// import React, {useState, useEffect} from 'react';
// import Button from '@mui/material/Button';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import { Typography } from '@mui/material';


// function CustomerDelete(props){
    
//     const [constructor, setConstructor] = useState({
//         open: false
//     });

//     const handleClickOpen = () => {
//         setConstructor({
//             ...constructor,
//             open: true
//         });
//     }

//     const handleClose = () => {
//         setConstructor({
//             open: false
//         });
//     }

//     const deleteCustomer = (id) => {
//         const url = '/customer/' + id;
//         fetch(url, {
//             method: 'DELETE'
//         });
//         props.stateRefresh();
//     }

//     return(
//         <div>
//             <Button variant="contained" color="secondary" onClick={handleClickOpen}>삭제</Button>
//             <Dialog open={constructor.open} onClose={handleClose}>
//                 <DialogTitle onClose={handleClose}>
//                     삭제 경고
//                 </DialogTitle>
//                 <DialogContent>
//                     <Typography gutterBottom>
//                         선택한 고객 정보가 삭제됩니다.
//                     </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button variant="contained" color="primary" onClick={(e) => {deleteCustomer(props.id)}}>삭제</Button>
//                     <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// export default CustomerDelete;