import React from 'react'

import './topnav.css'

const topNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...'/>
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    {/* theme setting */}
                </div>
            </div>
        </div>
    )
}

export default topNav
