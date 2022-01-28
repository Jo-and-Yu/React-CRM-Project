import React, { useState, useEffect } from 'react'

import Table from '../components/table/Table'

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

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.이름}</td>
        <td>{item.학년}</td>
        <td>{item.개인전화번호}</td>
        <td>{item.부모님전화번호}</td>
        <td>{item.등록일자}</td>
    </tr>
)

const Customers = () => {
    const [customerList, setCustomerList] = useState([])

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
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={[{"id":1,"이름":"유연아","생년월일":"19981127","학교":"사우고","학년":"2","개인전화번호":"01089732612","부모님전화번호":"01080734524","주소":"사우동할리스","등록일자":"20220910","학생구분":"재학중","특이사항":null}]}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
