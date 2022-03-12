import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routess = () => { // v6 버전에서 Routes랑 이름이 겹쳐서 s하나 더 추가함
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    )
}

export default Routess
