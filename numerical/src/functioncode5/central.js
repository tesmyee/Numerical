import React, { useState, useEffect, useRef } from "react";
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'


const { Content, header } = Layout;
const { Column } = Table;
// const { integral } = require('mathjs-simple-integral');
const { create, all, parse, floor, random, derivative } = require("mathjs");


function Central() {
    let [x, setx] = useState(0)
    let [h, seth] = useState(0)
    let [diff, setdiff] = useState(0)
    let [answer, setanswer] = useState(0)
    let [errors, seterrors] = useState(0)
    const [fn, setfn] = useState(' ')

    function callapi() {
        var index = floor(random() * (+3 - +0)) + 0;
        api.getCentral().then(res => {
            seth(res.data.data[0].h)
            setx(res.data.data[0].x)
            setdiff(res.data.data[0].diff)
            setfn(res.data.data[0].fn)
        })
        console.log('api '+ h + ' '+x)
        // <h>Functionn : {fn} XL : {xl} XR : {xr}</h>

    }
    
    function calcentral1() {
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const error = (E, answer) => Math.abs((E - answer) / E)
        const diff1 = (fn, x) => derivative(parse(fn), 'x').evaluate({ x: x })
        const diff2 = (fn, x) => derivative(derivative(parse(fn), 'x'), 'x').evaluate({ x: x })
        const diff3 = (fn, x) => derivative(derivative(derivative(parse(fn), 'x'), 'x'), 'x').evaluate({ x: x })
        const diff4 = (fn, x) => derivative(derivative(derivative(derivative(parse(fn), 'x'), 'x'), 'x'), 'x').evaluate({ x: x })
        var answer = 0
        var E = 0

        if (diff === 1) {
            answer = (ans(fn, x + h) - ans(fn, x-h)) / (h)
            E = diff1(fn, x)
        }
        else if (diff === 2) {
            answer = ((ans(fn, x + (h))) - (2 * ans(fn, x)) + ans(fn, x-h)) / (h ** 2)
            E = diff2(fn, x)
        }
        else if (diff === 3) {
            answer = ((ans(fn, x + (2 * h))) - (2 * ans(fn, x + (h))) + (2 * ans(fn, x - h)) - ans(fn, x-(2*h))) / (h ** 3)
            E = diff3(fn, x)
        }
        else if (diff === 4) {
            answer = ((ans(fn, x + (2 * h))) - (4 * ans(fn, x + (h))) + (6 * ans(fn, x)) - (4 * ans(fn, x - h)) + ans(fn, x-(2*h))) / (h ** 4)
            E = diff4(fn, x)
        }
        else {
            answer = 0
        }
        setanswer(answer)
        E = error(E, answer)
        seterrors(E)
        
    }


    function calcentral2() {
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const error = (E, ANS) => Math.abs((E - ANS) / E)
        const diff1 = (fn, x) => derivative(parse(fn), 'x').evaluate({ x: x })
        const diff2 = (fn, x) => derivative(derivative(parse(fn), 'x'), 'x').evaluate({ x: x })
        const diff3 = (fn, x) => derivative(derivative(derivative(parse(fn), 'x'), 'x'), 'x').evaluate({ x: x })
        const diff4 = (fn, x) => derivative(derivative(derivative(derivative(parse(fn), 'x'), 'x'), 'x'), 'x').evaluate({ x: x })
        var answer = 0
        var E = 0
        if (diff === 1) {
            answer = (-(ans(fn,x + (2 * h))) + 8 * ans(fn,x + h) - 8 * ans(fn,x - h) + ans(fn,x - (2 * h))) / (12 * h)
            E = diff1(fn, x)
        }
        else if (diff === 2) {
            answer = (-(ans(fn,x + (2 * h))) + 16 * ans(fn,x + h) - 30 * ans(fn,x) + 16 * ans(fn,x - h) - ans(fn,x - (2 * h))) / (12 * (h**2))
            E = diff2(fn, x)
        }
        else if (diff === 3) {
            answer = (-(ans(fn,x + (3 * h))) + 8 * ans(fn,x + (2 * h)) - 13 * ans(fn,x + h) + 13 * ans(fn,x - h) - 8 * ans(fn,x - (2 * h)) + ans(fn,x - (3 * h))) / (8 * (h**3))
            E = diff3(fn, x)
        }
        else if (diff === 4) {
            answer = (-(ans(fn,x + (3 * h))) + 12 * ans(fn,x + (2 * h)) - 39 * ans(fn,x + h) + 56 * ans(fn,x) - 39 * ans(fn,x - h) + 12 * ans(fn,x - (2 * h)) - ans(fn,x - (3 * h))) / (6 * (h**4))
            E = diff4(fn, x)
        }
        else {
            answer = 0
        }
        setanswer(answer)
        console.log('real= ' + E)
        E = error(E, answer)
        seterrors(E)
        console.log('answer=' + answer)
        console.log("E =" + E)
    }



    return (
        <Content>
            <Layout style={{ margin: '70px', padding: '10px 10px' }}>
                <h1 style={{ color: 'green' }}>CENTRAL DIFFERENTIAL</h1>
            </Layout>
            <Layout style={{
                margin: '70px',
                padding: '40px 40px',
                color: '#08090B'
            }} >
                <Row justify="space-around">
                    <Col span={7} style={{ textAlign: 'right' }}> Function </Col>
                    <Col span={3} offset={2} style={{ textAlign: 'left' }}>
                        <Input style={{ width: '250px' }} fn onChange={event => setfn(event.target.value)} /> </Col>
                </Row>
                <br></br>
                <Row type="flex" >
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>x</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber x onChange={value => {
                            setx(value)
                            console.log('x ' + x)
                        }} />
                    </Col>
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>h</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber h onChange={value => {
                            seth(value)
                            console.log('h ' + h)
                        }} />
                    </Col>
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>Diff</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber diff onChange={value => {
                            setdiff(value)
                            console.log('diff ' + diff)
                        }} />
                    </Col>
                
                </Row>

                <br></br>
                <Row style={{ textAlign: 'center' }}><Button size="large" onClick={callapi}> CALL FUNCTION FROM DATABASE </Button></Row>
                <br></br>
                <br></br>
                <Row>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> x : {x}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> h : {h}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> diff : {diff}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> Function : {fn}</h3></Col>
                </Row>
                <br></br>

                <Row justify="space-around">

                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Button type="primary" block id="result" size="large" onClick={calcentral1}> O(h) </Button></Col>
                    <Col span={8}></Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Button type="primary" block id="result" size="large" onClick={calcentral2}> O(h^2) </Button></Col>
                </Row>

                <br></br>
                <Row type="flex" justify="space-around">
                    <h2 style={{ textAlign: 'center', color: '#E03616' }}> Calculate : {answer.toFixed(6)}</h2>
                </Row>
                <Row type="flex" justify="space-around">
                    <h2 style={{ textAlign: 'center', color: '#E03616' }}> Error : {errors.toFixed(6)}</h2>
                </Row>
            </Layout>


        </Content>
    )
}
export default Central;