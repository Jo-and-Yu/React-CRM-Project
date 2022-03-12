import React, {useState} from 'react'
import Axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const stateRefresh = () => {
        setPassword('')
        setUsername('')
        return ;
    }

    const login = () => {
        Axios.post('/login', {
            username: username,
            password: password
        })
        .then((res) => console.log(res.data.message))
        .finally(() => stateRefresh())        
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <input type='text' value={username} placeholder='Username...' onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' value={password} placeholder='Password...' onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
  )
}

export default Login