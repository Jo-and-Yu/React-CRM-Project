import React, { useState } from 'react'
import { post } from 'axios'
import { Button } from '@mui/material';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Modal from 'react-modal'


const CustomerAdd = (props) => {
  
    const [constructor, setConstructor] = useState({
        이름: "",
        생년월일: "",
        학교: "",
        학년: "",
        개인전화번호: "",
        부모님전화번호: "",
        주소: "",
        등록일자: "",
        학생구분: "",
        특이사항: null,
        open: false
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        addCustomer()
        .then((res) => {
                console.log(res.data);
                props.stateRefresh();
            });
        setConstructor({
            ...constructor,
            이름: "",
            생년월일: "",
            학교: "",
            학년: "",
            개인전화번호: "",
            부모님전화번호: "",
            주소: "",
            등록일자: "",
            학생구분: "",
            특이사항: null,
            open: false
        })
    }

    const handleClickOpen = () => {
        setConstructor({
            ...constructor,
            open: true
        });
    }

    const handleClose = () => {
        setConstructor({
            이름: "",
            생년월일: "",
            학교: "",
            학년: "",
            개인전화번호: "",
            부모님전화번호: "",
            주소: "",
            등록일자: "",
            학생구분: "",
            특이사항: null,
            open: false
        });
    }

    const handleValueChange = (e) => {
        const {name, value} = e.target;
         setConstructor({
             ...constructor,
             [name]: value
         });
     }

     const addCustomer = () => {
        const url = '/customer';
        const formData = new FormData();
        formData.append('이름', constructor.이름);
        formData.append('생년월일', constructor.생년월일);
        formData.append('학교', constructor.학교);
        formData.append('학년', constructor.학년);
        formData.append('개인전화번호', constructor.개인전화번호);
        formData.append('부모님전화번호', constructor.부모님전화번호);
        formData.append('주소', constructor.주소);
        formData.append('등록일자', constructor.등록일자);
        formData.append('학생구분', constructor.학생구분);
        formData.append('특이사항', constructor.특이사항);
    
        return post(url, formData);
    }

  return(
    <div>
        <button onClick={handleClickOpen}>추가하기</button>
        <Modal isOpen={constructor.open} onRequestClose={handleClose}>
            <form onSubmit={handleFormSubmit}>
                <h2>학생 추가</h2>
                <div>
                    이름: <input type="text" name="이름" vlaue={constructor.이름} onChange={handleValueChange}/><br/>
                    생년월일: <input type="text" name="생년월일" value={constructor.생년월일} onChange={handleValueChange}/><br/>
                    학교: <input type="text" name="학교" value={constructor.학교} onChange={handleValueChange}/><br/>
                    학년: <input type="text" name="학년" value={constructor.학년} onChange={handleValueChange}/><br/>
                    개인전화번호: <input type="text" name="개인전화번호" vlaue={constructor.개인전화번호} onChange={handleValueChange}/><br/>
                    부모님전화번호: <input type="text" name="부모님전화번호" value={constructor.부모님전화번호} onChange={handleValueChange}/><br/>
                    주소: <input type="text" name="주소" value={constructor.주소} onChange={handleValueChange}/><br/>
                    등록일자: <input type="text" name="등록일자" value={constructor.등록일자} onChange={handleValueChange}/><br/>
                    학생구분: <input type="text" name="학생구분" value={constructor.학생구분} onChange={handleValueChange}/><br/>
                    특이사항: <input type="text" name="특이사항" value={constructor.특이사항} onChange={handleValueChange}/><br/>
                </div>
                <div>
                    <button type="submit">추가하기</button>
                    {/* <button variant="contained" color="primary" onClick={handleFormSubmit}>추가</button><br></br>
                    <button variant="outlined" color="primary" onClick={handleClose}>닫기</button> */}
                </div>
            </form>
         </Modal>
    </div>
  );
}

export default CustomerAdd;
