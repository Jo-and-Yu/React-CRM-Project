import React, { useState } from 'react'
import { post } from 'axios'
import { Button } from '@mui/material';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Modal from 'react-modal'


const CustomerAdd = (props) => {
  
    // const [constructor, setConstructor] = useState({
    //     이름: "",
    //     생년월일: "",
    //     학교: "",
    //     학년: "",
    //     개인전화번호: "",
    //     부모님전화번호: "",
    //     주소: "",
    //     등록일자: "",
    //     학생구분: "",
    //     특이사항: null,
    //     open: false
    // });

    const [이름, set이름] = useState("")
    const [생년월일, set생년월일] = useState("")
    const [학교, set학교] = useState("")
    const [학년, set학년] = useState("")
    const [개인전화번호, set개인전화번호] = useState("")
    const [부모님전화번호, set부모님전화번호] = useState("")
    const [주소, set주소] = useState("")
    const [등록일자, set등록일자] = useState("")
    const [학생구분, set학생구분] = useState("")
    const [특이사항, set특이사항] = useState(null)
    const [open, setopen] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        addCustomer()
            
        set이름("")
        set생년월일("")
        set학교("")
        set학년("")
        set개인전화번호("")
        set부모님전화번호("")
        set주소("")
        set등록일자("")
        set학생구분("")
        set특이사항(null)
        setopen(false)
    }

    const handleClickOpen = () => {
        setopen(true)
    }

    const handleClose = () => {
        set이름("")
        set생년월일("")
        set학교("")
        set학년("")
        set개인전화번호("")
        set부모님전화번호("")
        set주소("")
        set등록일자("")
        set학생구분("")
        set특이사항(null)
        setopen(false)
    }

    // const handleValueChange = (e) => {
    //     const {name, value} = e.target;
    //      setConstructor({
    //          ...constructor,
    //          [name]: value
    //      });
    //  }

     const addCustomer = () => {
        const url = '/customer';
        const data = {이름, 생년월일, 학교, 학년, 개인전화번호, 부모님전화번호, 주소, 등록일자, 학생구분, 특이사항}
       
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .finally(() => props.stateRefresh())
    }

  return(
    <div>
        <button onClick={handleClickOpen}>추가하기</button>
        <Modal isOpen={open} onRequestClose={handleClose}>
            <form onSubmit={handleFormSubmit}>
                <h2>학생 추가</h2>
                <div>
                    이름: <input type="text" name="이름" value={이름} onChange={(e) => { set이름(e.target.value) }}/><br/>
                    생년월일: <input type="text" name="생년월일" value={생년월일} onChange={(e) => { set생년월일(e.target.value) }}/><br/>
                    학교: <input type="text" name="학교" value={학교} onChange={(e) => { set학교(e.target.value) }}/><br/>
                    학년: <input type="text" name="학년" value={학년} onChange={(e) => { set학년(e.target.value) }}/><br/>
                    개인전화번호: <input type="text" name="개인전화번호" vlaue={개인전화번호} onChange={(e) => { set개인전화번호(e.target.value) }}/><br/>
                    부모님전화번호: <input type="text" name="부모님전화번호" value={부모님전화번호} onChange={(e) => { set부모님전화번호(e.target.value) }}/><br/>
                    주소: <input type="text" name="주소" value={주소} onChange={(e) => { set주소(e.target.value) }}/><br/>
                    등록일자: <input type="text" name="등록일자" value={등록일자} onChange={(e) => { set등록일자(e.target.value) }}/><br/>
                    학생구분: <input type="text" name="학생구분" value={학생구분} onChange={(e) => { set학생구분(e.target.value) }}/><br/>
                    특이사항: <input type="text" name="특이사항" value={특이사항} onChange={(e) => { set특이사항(e.target.value) }}/><br/>
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
