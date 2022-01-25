import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Routess = () => { // v6 버전에서 Routes랑 이름이 겹쳐서 s하나 더 추가함
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/customers' element={<Customers />}/>
        </Routes>
    )
}

export default Routess
