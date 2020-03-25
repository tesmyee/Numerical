import React, { useState, useEffect } from 'react';
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'

const { Content, Header } = Layout;
const { Column } = Table;
const { parse, floor, random } = require("mathjs");

function Falseposition() {
    let [xl, setxl] = useState(0);
    let [xr, setxr] = useState(0);
    let [x1, xm0] = useState(0);
    let [xa, setxa] = useState(0);
    let [i] = useState(0);
    let [fn, setfn] = useState('');
    var ef = 0.000001;
    const result = [];
    const [data, setdata] = useState();
    
    function callapi() {
            var index = floor(random() * (+3 - +0)) + 0;
            api.getBisection().then(res => {
                setxl(res.data.data[index].xl)
                setxr(res.data.data[index].xr)
                setfn(res.data.data[index].fn)
            })
            console.log('xl api ' + xl + '// xr api ' + xr)
            // <h>Functionn : {fn} XL : {xl} XR : {xr}</h>
        
    }

    function calfp() {
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const error = (xm0, x1) => Math.abs((x1 - xm0) / x1)
        const fx1 = (xl, xr) => ((xl * ans(fn, xr)) - (xr * ans(fn, xl))) / (ans(fn, xr) - ans(fn, xl))

        while (error(xm0, x1) > ef || i <= 1) {
            xm0 = x1
            x1 = fx1(xl, xr)
            if ((ans(fn, x1) * ans(fn, xr)) > 0) {
                xr = x1
                console.log(xr + ' ' + ans)
            }
            else {
                xl = x1
                console.log(xl + ' ' + ans)
            }

            result.push({
                i: i,
                x: x1.toFixed(6),
                fx: ans(fn, x1).toFixed(6),
                er: error(xm0, x1).toFixed(6)
            });
            i++
        }
        xa = setxa(x1)
        console.log('x1 = ' + x1 + '\ni = ' + i)
        setdata(result)
    }


    return (
        // <Header> BISECTION </Header>
        <Content>
            <Layout style={{ margin: '70px', padding: '10px 10px' }}>
                <h1 style={{ color: 'green' }}>FALSE POSITION</h1>
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
                    <Col span={7} style={{ color: '#1E1F20', textAlign: 'right' }}>XL</Col>
                    <Col span={3} style={{ textAlign: 'center' }}>
                        <InputNumber xl onChange={value => {
                            setxl(value)
                            console.log('xl ' + xl)
                        }} />
                    </Col>
                    <Col span={3} style={{ color: '#1E1F20', textAlign: 'right' }}>XR</Col>
                    <Col span={5} style={{ textAlign: 'center' }}>
                        <InputNumber xr onChange={value => {
                            setxr(value)
                            console.log('xr ' + xr)
                        }} />
                    </Col>
                </Row>
                
                <br></br>
                <Row style={{ textAlign: 'center' }}><Button size="large" onClick={callapi}> CALL FUNCTION FROM DATABASE </Button></Row>
                <br></br>
                
                <Row justify="space-around">
                    <Col span={8}></Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Button type="primary" block id="result" size="large" onClick={calfp}> Submit </Button></Col>
                </Row>
                
                <br></br>
                <Row>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> XL : {xl}</h3></Col>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> XR : {xr}</h3></Col>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> Function : {fn}</h3></Col>
                </Row>
                <br></br>
                
                <Row type="flex" justify="space-around">
                    <h2 style={{ textAlign: 'center', color: '#E03616' }}> answer X : {xa.toFixed(6)}</h2>
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

export default Falseposition;