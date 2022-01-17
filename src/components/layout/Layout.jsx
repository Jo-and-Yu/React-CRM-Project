import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routess from '../Routess'
import { BrowserRouter as Router, Route} from 'react-router-dom'


const Layout = () => {
    return (
        <Router>
            <div className='layout'>
            {/* v6 버전에서 렌더 방식이 안되서 이걸로 고쳐놨는데 나중에 다시 수정할 수도 있음  */}
                <Sidebar /> 
                <div className='layout__content'>
                    <div className='layout__content-main'>
                        <Routess/>
                    </div>
                </div>
            </div>
        </Router>
            
    )
}

export default Layout
