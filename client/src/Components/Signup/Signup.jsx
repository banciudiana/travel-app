import React from 'react'
import "./Signup.css";
const Signup =()=>{
    return (
        <div className='sign-up-container'>
            <h2>Sign Up</h2>
            <form className='sign-up-form'>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder='Username'/>

                <label htmlFor="email" >Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'/>

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='*****' ></input>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup