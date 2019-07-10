/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Form, Button, Input, Icon } from 'antd'
import './index.less'

const FormItem = Form.Item
class Login extends Component {
    handleSubmit = (event) => { 
        // 阻止时间的默认行为
        event.preventDefault()
        console.log(event)
        const from = this.props.form
        const data = from.getFieldsValue()
        console.log('data',data);
    }
    render() {
        const {
            getFieldDecorator
        } = this.props.form
        return (
            <div className="login">
                <div className="login-header">
                    <h1>
                        后端管理系统
                    </h1>
                </div>
                <div className="login-content">
                    <h2>登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {
                                getFieldDecorator('username', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input your username!'
                                    }],
                                })(<Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户" />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" >
                                登录
                           </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}
/* 
1、高阶函数
2、高阶组件
*/

export default Form.create()(Login)