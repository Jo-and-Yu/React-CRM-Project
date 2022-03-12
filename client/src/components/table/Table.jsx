import React, { useState, useEffect } from 'react'
import './table.css'

const Table = (props) => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)  
    
    useEffect(() => {
        setDataShow(initDataShow)
    }, [props.bodyData])
    
    let pages = 1
    
    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrpage] = useState(0)

    const selectPage = (page) => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

        setCurrpage(page)
    }

    return (
        <div>
            <div className='table-wrapper'>
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {   
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
                {
                    pages > 1 ? (
                        <div className="table__pagination">
                            {
                                range.map((item, index) => (
                                    <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`}
                                        onClick={() => selectPage(index)}>
                                        {item + 1}
                                    </div>
                                ))
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Table
