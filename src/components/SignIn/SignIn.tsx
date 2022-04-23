import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomItem/CustomButton'
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
                <FormInput
                    label ="email"
                    name="email"
                    value={emailAndPassword.email}
                    type="email"
                    handleChange={handleChange}
                    placeholder = "Email"
                    required
                />
               
                <FormInput
                    label="password"
                    name="password"
                    value={emailAndPassword.password}
                    type="password"
                    handleChange={handleChange}
                    placeholder = "Password"
                    required
                />
              

                <CustomButton type="submit" value="submit Form" >Sign In</CustomButton>
            </form>
        </div>
    )
}

export default SignIn