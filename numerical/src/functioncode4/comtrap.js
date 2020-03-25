import React, { useState } from 'react';
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'
const { Content, Header } = Layout;
const { Column } = Table;
// const { integral } = require('mathjs-simple-integral');
const { create, all, parse,floor,random } = require("mathjs");


function Comtrap() {
    let [x, setx] = useState(0)
    let [x0] = useState(-1)
    var xa = 0;
    var x2a = 0;
    let [i] = useState(0);
    let [a, seta] = useState(0);
    let [b, setb] = useState(0);
    let [n, setn] = useState(0);
    var h;
    let [fn, setfn] = useState('');
    var ef = 0.000001;
    const result = [];
    let [calI, setcalI] = useState(0);
    const [data, setdata] = useState();
    const mathjs = create(all)
    const integral = require('mathjs-simple-integral')
    mathjs.import(integral)

    function callapi() {

        var index = floor(random() * (+3 - +0)) + 0;
        api.getComtrap().then(res => {
            seta(res.data.data[0].a)
            setb(res.data.data[0].b)
            setn(res.data.data[0].n)
            setfn(res.data.data[0].fn)
        })
        console.log('a api ' + a)
        // <h>Functionn : {fn} XL : {xl} XR : {xr}</h>

    }

    function caltrap() {
        const itg = mathjs.integral(fn, 'x')
        const ifn = itg.toString()
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const anscal = (fn, a) => parse(fn).evaluate({ x: a })
        const error = (realI, calI) => Math.abs((realI - calI) / realI)
        const bounda = parse(ifn).evaluate({ x: a })
        const boundb = parse(ifn).evaluate({ x: b })
        h = (b - a) / n;
        // console.log(bounda)
        // console.log(boundb)
        const realI = boundb - bounda
        console.log('real I' + realI)
        // console.log(calI)
        // console.log(error(realI, calI))
        while ((a + (h * i)) <= b) {
            if ((a + (h * i)) === a || (a + (h * i)) === b) {
                xa = xa + anscal(fn, (a + (h * i)))
                console.log('a: ' + (a+(h*i)) + ' i:' + i)
            }
            else {
                x2a = x2a + ans(fn, (a + (h * i)))
                console.log('x2a: ' + (a+(h*i)) + ' i:' + i)
            }
            i++
        }
        x2a = x2a * 2
        console.log('x2a ' + x2a)
        calI=setcalI((h / 2) * (xa + x2a))
        console.log('calI ' + calI)
        console.log(error(realI,calI))
    }

    return (
        <Content>
            <Layout style={{ margin: '70px', padding: '10px 10px' }}>
                <h1 style={{ color: 'green' }}>COMPOSITE TRAPZEIDEL</h1>
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
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>a</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber a onChange={value => {
                            seta(value)
                            console.log('a ' + a)
                        }} />
                    </Col>
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>b</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber b onChange={value => {
                            setb(value)
                            console.log('b ' + b)
                        }} />
                    </Col>
                    <Col span={4} style={{ color: '#1E1F20', textAlign: 'right' }}>n</Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        <InputNumber n onChange={value => {
                            setn(value)
                            console.log('n ' + n)
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
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> a : {a}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> b : {b}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> Function : {fn}</h3></Col>
                    <Col span={6}><h3 style={{ textAlign: 'center', color: '#272838' }}> n : {n}</h3></Col>
                </Row>
                <br></br>
                <Row type="flex" justify="space-around">
                    <h2 style={{ textAlign: 'center', color: '#E03616' }}> Calculate integral : {calI.toFixed(6)}</h2>
                </Row>
            </Layout>
            <Layout style={{ margin: '60px 60px', padding: '30px 30px' }}>
                <h2 style={{ margin: '20px 0', textAlign: 'center' }}> Result</h2>
                <Layout style={{ margin: '20px 20px' }}>
                    <Table dataSource={data}>
                        <Column title="iteration" dataIndex="i" key="i" />
                        <Column title="x" dataIndex="x" key="x" />
                        <Column title="F(x)" dataIndex="fx" key="fx" />
                        <Column title="Error" dataIndex="er" key="er" />
                    </Table>
                </Layout>
            </Layout>

        </Content>
    )
}
export default Comtrap;
