import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomItem/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase'
import './signin.scss'
const SignIn: React.FC = () => {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setPassword(e.target.value)
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={() => handleSubmit}>
                <FormInput
                    label="email"
                    name="email"
                    value={email}
                    type="email"
                    handleChange={handleChange}
                    placeholder="Email"
                    required
                />

                <FormInput
                    label="password"
                    name="password"
                    value={password}
                    type="password"
                    handleChange={handleChange}
                    placeholder="Password"
                    required
                />


                <CustomButton type="submit"  >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} >{' '}Sign In with Google{' '}</CustomButton>
            </form>
        </div>
    )
}

export default SignIn