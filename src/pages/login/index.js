/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Form, Button, Input, Icon } from 'antd'
import memoryUtils from '../../utils/memoryUtils'
import './index.less'

const FormItem = Form.Item
class Login extends Component {
    handleSubmit = (event) => { 
        // 阻止时间的默认行为
        event.preventDefault()
        // console.log(event)
        const form = this.props.form
        const data = form.getFieldsValue()
        console.log('data', data)
    /* 对所有表单校验 */
        form.validateFields((err,values)=>{
            console.log('vidild', err, values)
            if (!err) {
                // const { username, password } = values
                console.log('success')
                const user = values.username
                memoryUtils.user = user //保存在内存中
                this.props.history.replace('/')
            } else { 
                console.log('fail')
            }
        })
    }
    render() {
        const {
            getFieldDecorator,
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
                                        //自定义校验
                                        validator(rule, value, callback) { 
                                            console.log(rule, value, callback)
                                            if (value === '1') { 
                                                callback('不符')
                                            }
                                            callback()
                                        }
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
    一类特别的函数
    a 接受函数类型的参数
    b 返回值是函数 
    常见
    a 定时器 setTimeout() / setInterval()
    b Promise:Promise(()=>{} then(value=>{},reason=>{}))
    c 数据遍历的相关方法: forEach()/filter()/map()/reduce()/find()/findIndex()
    d 函数对象的bind()
    e Form.create()() / getFieldDecorator()()
2、高阶组件
    a 本质就是一个函数
    b 接收一个组件（被包装组件），返回一个新的组件（包装组件），新组件内部渲染被包装，包装组件会向被包装组件传入特定属性
    c 作用：扩展组件的功能
    d 高阶组件也是高阶函数:接收一个组件函数，返回一个新的组件函数
*/

export default Form.create()(Login)