import React , { useEffect } from 'react'
import './layout.css'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routess from '../Routess'

import { BrowserRouter as Router, Route} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(()=> {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <Router>
            <div className= {`layout ${themeReducer.mode} ${themeReducer.color}`}>
            {/* v6 버전에서 렌더 방식이 안되서 이걸로 고쳐놨는데 나중에 다시 수정할 수도 있음  */}
                <Sidebar /> 
                <div className='layout__content'>
                    <TopNav/>
                    <div className='layout__content-main'>
                        <Routess/>
                    </div>
                </div>
            </div>
        </Router>
            
    )
}

export default Layout
