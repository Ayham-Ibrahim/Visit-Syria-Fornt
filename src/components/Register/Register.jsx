import axios from 'axios';
import { useState } from 'react';
import './Register.css';
import { useNavigate , Link } from 'react-router-dom';
import {  toast  } from 'react-toastify';
function Register() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [country , setCountry] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    const notifyError = () => toast("The email has already been taken");
    const notifyRegister = () => toast("user successfuly registerd");
    const notifyPassword = () => toast("Password must be at least 9 characters");
    function handleRegister(e) {

    e.preventDefault();
    const headers = {
        'Content-Type': 'application/json'
    };

    if (password.length < 9) {
        notifyPassword();
    }
    const data = {
        name : name,
        country : country,
        email: email,
        password: password
    };
    axios.post('http://127.0.0.1:8000/api/auth/register', data,{headers})
    .then(response =>{
        console.log(response);
        if (response.status === 200 || 201) {
            console.log(response);
            notifyRegister();
            navigate('/');
        }
    }).catch(error => {
        console.log(error);
        notifyError();
    });
}   
  return (
   
    <section className="register-page">
            <div className="form-container">
                <div className="site-name">
                    <h1><span>Visit</span> Syria</h1>
                </div>
                <div className="hello-text">
                    <p>visit Syria تسجيل الدخول في موقع </p>
                </div>
                <form >
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required  placeholder='اسم المستخدم ' />
                    <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} required placeholder='البلد  ' />
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required  placeholder='البريد الالكتروني' />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='كلمة المرور ' />
                    <button type='submit' onClick={(e)=>handleRegister(e)}>دخول</button>
                    <p className='mt-3'> لديك حساب بالفعل ؟ <Link to='/login' > سجل الدخول اللآن</Link> </p>
                </form>
            </div>
        </section>
   
  )
}

export default Register