import React, { Component } from 'react'
import { Layout } from 'antd'
import { Redirect } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout
class Admin extends Component {

    render() {
        const user = memoryUtils.user
        //如果内存中没有存储user ===> 当前没有登录
        if (!user || !user._id) { 
           // 自动跳转到登录
            return <Redirect to='/login' />
        }
        return (
            // <div>name{user.username}</div>
            <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
        )
    }
}

export default Admin