import axios from 'axios';
import { useEffect, useState } from 'react';
const UserRegistration = () => {
    useEffect(() => {
        axios.get('users/');
    }, []);
    const checkEmail = (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        axios
            .get(`/users/checkemail/${email}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status == 1) {
                    document.getElementById('emailavailableno').textContent =
                        '';
                    document.getElementById('emailavailableyes').textContent =
                        res.data.debug_data;
                } else {
                    document.getElementById('emailavailableyes').textContent =
                        '';
                    document.getElementById('emailavailableno').textContent =
                        res.data.debug_data;
                }
            })
            .catch((e) => console.log(e));
    };
    const checkUsername = (e) => {
        e.preventDefault();
        let username = document.getElementById('username').value;
        axios
            .get(`/users/checkusername/${username}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.status == 1) {
                    document.getElementById('emailavailableno').textContent =
                        '';
                    document.getElementById('emailavailableyes').textContent =
                        res.data.debug_data;
                } else {
                    document.getElementById('emailavailableyes').textContent =
                        '';
                    document.getElementById('emailavailableno').textContent =
                        res.data.debug_data;
                }
            })
            .catch((e) => console.log(e));
    };
    const saveUser = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let dob = e.target.password.value;
        let username = e.target.username.value;
        axios
            .post('/users/adduser', { email, password, dob, username })
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    };
    return (
        <div>
            <h2>Welcome to registration page</h2>
            <form className='form' onSubmit={saveUser}>
                <h5 id='emailavailableno'></h5>
                <h5 id='emailavailableyes'></h5>
                <label>
                    <h3>Email</h3>
                </label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='email..'
                    className='form-control'
                />
                <button className='btn btn-danger' onClick={checkEmail}>
                    check email
                </button>
                <br />
                <label>
                    <h3>Password</h3>
                </label>
                <input
                    type='password'
                    name='password'
                    placeholder='password..'
                    className='form-control'
                />
                <label>
                    <h3>Date of Birth </h3>
                </label>
                <input type='date' name='dob' className='form-control' />
                <label>
                    <h3>Username</h3>
                </label>
                <input
                    id='username'
                    type='text'
                    className='form-control'
                    placeholder='username..'
                    name='username'
                />
                <button className='btn btn-danger' onClick={checkUsername}>
                    Check Username
                </button>
                <div className='text-center'>
                    <button className='btn btn-primary'>Register</button>
                </div>
            </form>
        </div>
    );
};
export default UserRegistration;
