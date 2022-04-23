import React, { useState } from 'react'
import './signin.scss'
const SignIn: React.FC = () => {
    const [emailAndPassword, setEmailAndPassword] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmailAndPassword({
            email: '',
            password: '',
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailAndPassword({
            email: e.target.value,
            password: e.target.value
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={() => handleSubmit}>
                <input
                    name="email"
                    value={emailAndPassword.email}
                    type="email"
                    onChange={handleChange}
                    required
                />
                <label>Email</label>
                <input
                    name="password"
                    value={emailAndPassword.password}
                    type="password"
                    required
                />
                <label>Password</label>

                <input type="submit" value="submit Form" />
            </form>
        </div>
    )
}

export default SignIn