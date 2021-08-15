import React, { useState } from 'react';
import './LoginModal.scss';
import formValidationOptions from '../../../validation/formValidation'
import { useForm } from '../../../hooks/useForm';

export default function LoginModal() {
    const [isLogged, setIsLogged] = useState(false);
    const {
        data,
        handleChange,
        handleSubmit,
        errors,
    } = useForm( formValidationOptions );

    return (
        <div className="login-modal">
            {
                isLogged? 
                    <div className="login-modal__login">
                        <h2>Login</h2>
                        <form className="login-modal__login-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">Username</label>    
                            <input name="email" type="email" required onChange={handleChange}/>
                            <br />
                            <label htmlFor="password">Username</label>    
                            <input name="password" type="password" required onChange={handleChange}/>
                            <br />
                            <input name="submit" type="submit"/>
                        </form>
                    </div> 
                    :
                    <div className="login-modal__register">
                        <h2>Register</h2>
                        <form className="login-modal__login-form" onSubmit={handleSubmit}>
                            <label htmlFor="username">Username</label>    
                            <input name="username" type="text" value={data.username || ''} required onChange={handleChange('username')}/>
                            { errors.username ? <p>{errors.username}</p> : ""}
                            <br />
                            <label htmlFor="email">Email</label>    
                            <input name="email" type="email" value={data.email || ''} required onChange={handleChange('email')}/>
                            { errors.email ? <p>{errors.email}</p> : ""}
                            <br />
                            <label htmlFor="password">Password</label>    
                            <input name="password" type="password" value={data.password || ''} onChange={handleChange('password')}/>
                            { errors.password ? <p>{errors.password}</p> : ""}
                            <br />
                            <label htmlFor="repeat-password">Repeat Password</label>    
                            <input name="repeat-password" type="password" value={data.password || ''} required onChange={handleChange('password')}/>
                            <br />
                            <input name="submit" type="submit"/>
                        </form>
                    </div> 
            }
        </div>
    )
}
