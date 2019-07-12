import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, type = 'GET') { 
    return new Promise((resolve, reject) => { 
        let promise
        //执行一步ajax请求
        if (type === 'GET') {  //发送GET请求
            promise = axios.get(url, { //配置对象
                paramsl: data //指定请求参数
            })
        } else { //发送post请求
         promise =  axios.post(url, data)
        }
        //如果成功了，调用resolve(value)
        promise.then(response => { 
            resolve(response)
            //如果失败了，不调用reject(reason)
        }).catch(error => { 
            message.error('error')
        })
    })
    
}