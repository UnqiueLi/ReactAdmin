/*应用根组件*/
import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/index'
import Admin from './pages/admin/index'

class App extends Component { 
    render(){ 
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/' component={Admin}></Route>
                   </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App