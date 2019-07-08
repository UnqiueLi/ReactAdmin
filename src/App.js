/*应用根组件*/
import React, { Component } from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'

class App extends Component { 
    render(){ 
        return (
            <div>
                <Button type="primary">aaa</Button>
            </div>
        )
    }
}

export default App