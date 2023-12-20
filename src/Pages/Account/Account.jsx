import React from 'react';
import Header from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import './Account.css'

const Account = () => {
    return (
        <>
            <Header activeAnimation={false}/>
            <section className="content-form">
                <h2>Login</h2>
                <form className='form' action="">
                    <label htmlFor="email">Email</label>
                    <input name='email' type="text"/>
                    <label htmlFor="password">Password</label>
                    <div className="cont-input">
                        <input name='password' type="text"/>
                        <a className='cont-input-enlace' href="">Forgot your password?</a>
                    </div>

                    <div className="form-buttons">
                        <button>Login</button>
                        <Link to='/Register'>Create account</Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Account;