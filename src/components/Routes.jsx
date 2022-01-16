import React from 'react'

import { Route, Routes } from 'reat-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routes = () => {
    return (
        <Routes>
            <Route path='/' component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
        </Routes>
    )
}

export default Routes
