import React, { Component } from 'react'
import { Layout } from 'antd'
import { LeftNav } from '../../components'
// import { Redirect } from 'react-router-dom'
// import memoryUtils from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout
class Admin extends Component {

    render() {
        /*   const user = memoryUtils.user
          // 如果内存中没有存储user ===> 当前没有登录
          if (!user || !user._id) { 
             // 自动跳转到登录
              return <Redirect to='/login' />
          } */
        return (
            // <div>name{user.username}</div>
            <Layout style={{ height: '100%' }}>
                <Sider ><LeftNav /></Sider>
                <Layout>
                    <Header style={{ color: '#fff' }}>Header</Header>
                    <Content style={{ backgroundColor: '#fff' }}>Content</Content>
                    <Footer style={{ textAlign: "center"}}>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin