import React, {useState} from 'react'
import Axios from 'axios'

const Register = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const stateRefresh = () => {
        setPasswordReg('')
        setUsernameReg('')
        return ;
    }

    const register = () => {
        Axios.post('/register', {
            id: usernameReg,
            password: passwordReg
        })
        .then((res) => console.log(res.data.message))
        .then(() => stateRefresh())      
    }

  return (
    <div className='registration'>
            <h1>Registration</h1>
            <label>Username</label>
            <input 
            type='text'
            value={usernameReg}
            onChange={(e) => setUsernameReg(e.target.value)
            }
            />
            <label>Password</label>
            <input 
            type='text'
            value={passwordReg}
            onChange={(e) => setPasswordReg(e.target.value)
            }
            />
            <button onClick={register}>Register</button>
    </div>
  )
}

export default Register