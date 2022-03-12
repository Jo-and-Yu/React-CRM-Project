import React, { useState, useEffect } from 'react'

import Table from '../components/table/Table'
import CustomerAdd from './CustomerAdd'
import CustomerDelete from './CustomerDelete'

//import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
    '',
    '이름',
    '학년',
    '개인전화번호',
    '부모님전화번호',
    '등록일자'
]

const renderHead = (item, index) => <th key={index}>{item}</th>



const Customers = () => {
    const [customerList, setCustomerList] = useState([])

    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.이름}</td>
            <td>{item.학년}</td>
            <td>{item.개인전화번호}</td>
            <td>{item.부모님전화번호}</td>
            <td>{item.등록일자}</td>
            <td><CustomerDelete stateRefresh={stateRefresh}  id={item.id}/></td>
        </tr>
    )

    const stateRefresh = () => {
        setCustomerList([]);
        callApi()
        .then(data => setCustomerList(data))
        .catch(err => console.log(err));
      }

    async function callApi() {
        const response = await fetch('/customer');
        const body = await response.json();
        return body;
      };

    useEffect(() => {
        callApi()
            .then(data => setCustomerList(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <h2 className="page-header">
                customers({customerList.length})
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                                stateRefresh={stateRefresh}
                            />
                        </div>
                    </div>
                </div>
                <CustomerAdd stateRefresh={stateRefresh}/>
            </div>
        </div>
    )
}

export default Customers
