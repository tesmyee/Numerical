import React, { useState } from 'react';
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'
const { Content, Header } = Layout;
const { Column } = Table;
// const { integral } = require('mathjs-simple-integral');
const { create, all, parse,floor,random } = require("mathjs");



function Trap() {

    let [a, seta] = useState(0);
    let [b, setb] = useState(0);
    var h = b - a;
    let [fn, setfn] = useState('');
    var ef = 0.000001;
    const result = [];
    let [calI, setcalI] = useState(0);
    const [errors, seterrors] = useState();
    const mathjs = create(all)
    const integral = require('mathjs-simple-integral')
    mathjs.import(integral)

    function callapi() {

        var index = floor(random() * (+3 - +0)) + 0;
        api.getTrapzeidel().then(res => {
            seta(res.data.data[0].a)
            setb(res.data.data[0].b)
            setfn(res.data.data[0].fn)
        })
        console.log('a api ' + a)
    }
    

    function caltrap() {
        const itg = mathjs.integral(fn, 'x')
        const ifn = itg.toString()
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const error = (realI, calI) => Math.abs((realI - calI) / realI)
        //console.log(ifn)
        const bounda = parse(ifn).evaluate({ x: a })
        const boundb = parse(ifn).evaluate({ x: b })
        console.log(bounda)
        console.log(boundb)
        const realI = boundb - bounda
        console.log(realI)
        calI = setcalI((h / 2) * (ans(fn, a) + ans(fn, b)))
        console.log(calI)
        
    }

    return (
        <Content>
            <Layout style={{ margin: '70px', padding: '10px 10px' }}>
                <h1 style={{ color: 'green' }}>TRAPZEIDEL</h1>
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
                    <Col span={7} style={{ color: '#1E1F20', textAlign: 'right' }}>a</Col>
                    <Col span={3} style={{ textAlign: 'center' }}>
                        <InputNumber a onChange={value => {
                            seta(value)
                            console.log('a ' + a)
                        }} />
                    </Col>
                    <Col span={3} style={{ color: '#1E1F20', textAlign: 'right' }}>b</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                        <InputNumber b onChange={value => {
                            setb(value)
                            console.log('b ' + b)
                        }} />
                    </Col>
                </Row>
                <br></br>
                <Row style={{ textAlign: 'center' }}><Button size="large" onClick={callapi}> CALL FUNCTION FROM DATABASE </Button></Row>
                <br></br>
                <Row justify="space-around">
                    <Col span={8}></Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Button type="primary" block id="result" size="large" onClick={caltrap}> Submit </Button></Col>
                </Row>
                <br></br>
                <Row>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> a : {a}</h3></Col>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> b : {b}</h3></Col>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> Function : {fn}</h3></Col>
                </Row>
                <br></br>
                <Row type="flex" justify="space-around">
                    <h2 style={{ textAlign: 'center', color: '#E03616' }}> Calculate integral : {calI.toFixed(6)}</h2>
                </Row>
                
            </Layout>
       
        </Content>
    )
}
export default Trap;
