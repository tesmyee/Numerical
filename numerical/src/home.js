import React, { useState, useEffect, useRef } from "react";
import { Layout, InputNumber, Button, Row, Col, Table, Input } from 'antd';

const { Content, header } = Layout;
const { Column } = Table;

function Home (){

    return(
        <Content>
            <Layout style={{ margin: '70px', padding: '10px 10px' }}>
            <h1 style={{ color: 'blue' }}>TEINTIDA SRISONGMUANG</h1>
            <h1 style={{ color: 'blue' }}> 6004062630230 SEC 2 </h1>
            </Layout>
        </Content>
    )
}
export default Home;