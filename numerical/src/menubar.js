import React from 'react';
import { cyan } from '@ant-design/colors';
import { Layout, Menu,  } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Menubar(){
    return(
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="root">Root of Equations</Menu.Item>
            <Menu.Item key="linear">Linear</Menu.Item>
            <Menu.Item key="3">Chapter 3</Menu.Item>
          </Menu>
        </Header>
        
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                style={{ height: '100%' }}
              >
                  <Menu.Item key="1">Bisection</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </Layout>
    

      </Layout>
     )
   
}
export default Menubar;