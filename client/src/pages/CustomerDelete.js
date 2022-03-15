import React from 'react';


function CustomerDelete(props){
    

    const deleteCustomer = (id) => {
        const url = '/customer/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .finally(() => props.stateRefresh())
        
        
    }

    return(
        <div>
            <button onClick={(e) => {deleteCustomer(props.id)}}>삭제</button>
        </div>
    );
}

export default CustomerDelete;