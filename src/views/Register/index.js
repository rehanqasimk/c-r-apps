import { useState } from 'react'
import { login, register } from '../../config/firebase'

function Register() {
    const [form, setForm] = useState({})

    const signup = () => {
        register(form)
    }

    const signin = () => {
        const { email, password } = form

        login(email, password)
    }

    const updateForm = (e, key) => {
        setForm({ ...form, [key]: e.target.value })
    }

    return (<div style={{ background: 'gray', height: 300, width: 300 }}>
        <h1>Register</h1>

        <input onChange={(e) => updateForm(e, 'name')} placeholder="First Name" />
        <input onChange={(e) => updateForm(e, 'email')} placeholder="Email" />
        <input onChange={(e) => updateForm(e, 'password')} placeholder="Password" />

        <button onClick={signup}>Register</button>
        <button onClick={signin}>Login</button>
    </div>)
}

export default Register