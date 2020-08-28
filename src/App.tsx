import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About'
import Contact from './Contact';
import Home from './Home';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css';
import StudentScreen from './Student/StudentScreen';
import AddStudentScreen from './Student/AddStudentScreen';

const { Header, Footer, Content } = Layout;
const year: number = new Date().getFullYear();

export default class App extends React.Component {
  render() {
    return (
      <Layout className="layout" >
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/students">Students</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/about"
              component={About}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/students" exact component={StudentScreen} />
            <Route path="/students/add" component={AddStudentScreen} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Room Of Music ©{year} Created by JET Brighton PTY LTD</Footer>
      </Layout>
    );
  }
}