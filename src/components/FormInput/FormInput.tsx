import React from 'react'
import './form_input.scss'

interface Props {
    label: string
    name: string
    value: string
    type: string
    placeholder: string
    required: any
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const FormInput: React.FC<Props> = ({ label, name, value, type, placeholder, handleChange, required }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                required={required}
            />
            {
                label ? (
                    <label className={`${value.length ? 'shrink' : ''} form-input`}>

                    </label>
                ) : null
            }

        </div>
    )
}

export default FormInput