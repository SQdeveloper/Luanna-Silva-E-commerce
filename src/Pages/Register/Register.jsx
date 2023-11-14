import React from 'react';
import Header from '../../Components/Header/Header';
import './Register.css';

const Register = () => {
    return (
        <>
            <Header/>
            <section className="content-createAccount">
                <h2>Create Account</h2>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input name='name' type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input name='lastName' type="text" />
                    <label htmlFor="email">Email</label>
                    <input name='email' type="text" />
                    <label htmlFor="password">Password</label>
                    <input name='password' type="text" />

                    <button className="btn-createAccount">Register</button>                    
                </form>
            </section>  
        </>
    );
};

export default Register;