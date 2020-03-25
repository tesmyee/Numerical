import React, { useState } from 'react';
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'

const { Content, Header } = Layout;
const { Column } = Table;
const { parse,floor,random } = require("mathjs");
const {derivative} = require("mathjs");


function Newton(){
    let [x,setx] = useState(0)
    let [x0] = useState(-1)
    let [xa, setxa] = useState(0);
    let [i] = useState(0);
    let [fn, setfn] = useState('');
    var ef = 0.000001;
    const result = [];
    const [data, setdata] = useState();

    function callapi() {
        var index = floor(random() * (+3 - +0)) + 0;
        api.getNewton().then(res => {
          setx(res.data.data[index].x)
          setfn(res.data.data[index].fn)
        })
        console.log('x api ' + x )
        // <h>Functionn : {fn} XL : {xl} XR : {xr}</h>
      }
    

    function calnewton(){
        const ans = (fn, x) => parse(fn).evaluate({ x: x })
        const error = (x, x0) => Math.abs((x - x0) / x)
        const div = (fn,x) => derivative(parse(fn),'x').evaluate({ x: x })
        while (error(x,x0) > ef || i <= 1 ){
            x0=x
            console.log('before x '+x)
            console.log (fn)
            x = x0-(ans(fn,x0)/div(fn,x0))
            console.log('x0 ' + x0)
            console.log('x ' + x)
            console.log('div ' + div(fn,x0))

            result.push({
                i: i,
                x: x.toFixed(6),
                fx: ans(fn, x0).toFixed(6),
                er: error(x, x0).toFixed(6)
              });
              i++
            }
            xa = setxa(x)
            console.log('x = ' + x0 + '\ni = ' + i)
            setdata(result)
        }
    
    
    return (
        // <Header> BISECTION </Header>
        <Content>
            <Layout style={{ margin: '70px',padding: '10px 10px'}}> 
                <h1 style={{color: 'green'}}>NEWTON RALPHSON</h1>
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
                    <Col span={7} style={{ color: '#1E1F20', textAlign: 'right' }}>X</Col>
                    <Col span={3} style={{textAlign: 'center'}}>
                        <InputNumber xl onChange={value => {
                            setx(value)
                            console.log('x ' + x)
                        }} />
                    </Col>
                    
                </Row>

                <br></br>
                <Row style={{textAlign: 'center'}}><Button size="large" onClick={callapi}> CALL FUNCTION FROM DATABASE </Button></Row>
                <br></br>
                
                <Row justify="space-around">
                    <Col span={8}></Col>
                    <Col span={8} style={{ textAlign: 'center' }}>
                        <Button type="primary" block id="result" size="large" onClick={calnewton}> Submit </Button></Col>
                </Row>
                <br></br>

                <br></br>
                <Row>
                    <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> X : {x}</h3></Col>
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
export default Newton ;