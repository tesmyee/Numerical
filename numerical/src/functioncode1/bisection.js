import React, { useState } from 'react';
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';
import api from '../api'

const { Content, Header } = Layout;
const { Column } = Table;
const { parse,floor,random } = require("mathjs");
function Bisection() {
  let [xl, setxl] = useState(0);
  let [xr, setxr] = useState(0);
  let [xm0, xm] = useState(0);
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

  function calbisection() {
    const ans = (fn, x) => parse(fn).evaluate({ x: x })
    const error = (xm0, xm) => Math.abs((xm - xm0) / xm)
    const fxm = (xl, xr) => (xl + xr) / 2

    while (error(xm0, xm) > ef || i <= 1) {
      xm0 = xm
      xm = fxm(xl, xr)
      if (ans(fn, xm) * ans(fn, xr)) {
        xr = xm
        console.log(xr + ' ' + ans)
      }
      else {
        xl = xm
        console.log(xl + ' ' + ans)
      }

      result.push({
        i: i,
        x: xm.toFixed(6),
        fx: ans(fn, xm).toFixed(6),
        er: error(xm0, xm).toFixed(6)
      });
      i++
    }
    xa = setxa(xm)
    console.log('xm = ' + xm + '\ni = ' + i)
    setdata(result)
  }

  return (
    // <Header> BISECTION </Header>
    <Content>
      <Layout style={{ margin: '70px',padding: '10px 10px'}}> 
                <h1 style={{color: 'green'}}>BISECTION</h1>
            </Layout>
      <Layout style={{
        margin: '70px',
        padding: '40px 40px',
        color: '#08090B'
      }} >
        <Row justify="space-around">
          <Col span={5} style={{ textAlign: 'center' }}> Function </Col>
          <Col span={5}>
            <Input style={{ width: '250px' }} fn onChange={event => setfn(event.target.value)} /> </Col>
        </Row>
        <br></br>
        <Row type="flex" justify="space-around">
          <Col span={5} style={{ color: '#1E1F20', textAlign: 'center' }}>XL</Col>
          <Col span={5}>
            <InputNumber step={0.1} xl onChange={value => {
              setxl(value)
              console.log('xl ' + xl)
            }} />
          </Col>
          <Col span={5} style={{ color: '#1E1F20', textAlign: 'center' }}>XR</Col>
          <Col span={5}>
            <InputNumber step={0.1} xr onChange={value => {
              setxr(value)
              console.log('xr ' + xr)
            }} />
          </Col>
        </Row>
        <br></br>
        <Row style={{textAlign: 'center'}}><Button  size="large" onClick={callapi}> CALL FUNCTION FROM DATABASE </Button></Row>
        <br></br>
        <Row style={{textAlign: 'center'}}>
        
        <Col span={8}></Col>
        <Col span={8} style={{ textAlign: 'center' }}>
        <Button type="primary" block id="result" onClick={calbisection}> Submit </Button>
        </Col></Row>
        <br></br>
        
        <Row>
          <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> XL : {xl}</h3></Col>
          <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> XR : {xr}</h3></Col>
          <Col span={8}><h3 style={{ textAlign: 'center', color: '#272838' }}> Function : {fn}</h3></Col>
        </Row>
        <br></br>
        <Row><h2 style={{ textAlign: 'center', color: '#E03616' }}> answer X : {xa.toFixed(6)}</h2></Row>
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


export default Bisection;
