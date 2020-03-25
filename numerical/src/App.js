import React, { useState } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Bisection from './functioncode1/bisection'
import Falseposition from './functioncode1/falseposition';
import Onepoint from './functioncode1/onepoint';
import Newton from './functioncode1/newton';
import Secant from './functioncode1/secant';
import Taylor from './functioncode1/taylor';
import Trap from './functioncode4/trapzeidel';
import Comtrap from './functioncode4/comtrap';
import Simson from './functioncode4/simson';
import Comsimson from './functioncode4/comsimson';
import Forward from './functioncode5/forward';
import Backward from './functioncode5/backward';
import Central from './functioncode5/central';
import Home from './home'


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

function App() {
  const [pageState, setpageState] = useState(<Home/>)
  const pageBisection = () => setpageState(<Bisection />)
  const pageFalseposition = () => setpageState(<Falseposition />)
  const pageOnepoint = () => setpageState(<Onepoint />)
  const pageNewton = () => setpageState(<Newton />)
  const pageSecant = () => setpageState(<Secant />)
 
  const pageTrap = () => setpageState(<Trap />)
  const pageComtrap = () => setpageState(<Comtrap/>)
  const pageSimson = () => setpageState(<Simson/>)
  const pageComsimson = () => setpageState(<Comsimson/>)
  const pageForward = () => setpageState(<Forward/>)
  const pageBackward = () => setpageState(<Backward/>)
  const pageCentral = () => setpageState(<Central/>)
  const pageHome = () => setpageState(<Home/>)
  

  return (
    <Layout style={{ padding: '24px 0', background: '#090C0C' }}>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '15px 0', background: '#090C0C' }}>
          <Sider width={250} style={{ background: '#ffff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%' }}
              
            >
              <Menu.Item key="home" onClick={pageHome}>HOME</Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    Root of equation
                </span>
                }
              >
                <Menu.Item key="1" onClick={pageBisection}>Bisection</Menu.Item>
                <Menu.Item key="2" onClick={pageFalseposition}>False position</Menu.Item>
                <Menu.Item key="3" onClick={pageOnepoint}>One point iteration</Menu.Item>
                
                <Menu.Item key="5" onClick={pageNewton}>Newton-Ralphson</Menu.Item>
                <Menu.Item key="6" onClick={pageSecant}>Secant Method</Menu.Item>
              </SubMenu>
              
              <SubMenu
                key="sub5"
                title={
                  <span>
                    Integral
                </span>
                }
              >
                <Menu.Item key="20" onClick={pageTrap}>Trapzeidel</Menu.Item>
                <Menu.Item key="21" onClick={pageComtrap}>Composite Trapzeidel</Menu.Item>
                <Menu.Item key="22" onClick={pageSimson}>Simson</Menu.Item>
                <Menu.Item key="23" onClick={pageComsimson}>Composite Simson</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    Differential
                </span>
                }
              >
                <Menu.Item key="24" onClick={pageForward}>Forward Error</Menu.Item>
                <Menu.Item key="25" onClick={pageBackward}>Backward Error</Menu.Item>
                <Menu.Item key="26" onClick={pageCentral}>Central </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {pageState}
        </Layout>
      </Content>
    </Layout>
  )
}


export default App;
