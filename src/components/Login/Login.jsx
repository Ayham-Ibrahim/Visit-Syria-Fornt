import axios from 'axios';
import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const notifyError = () => toast("The email or password are incorrect");
    const notifyLogin = () => toast("user successfuly login");
    const notifyPassword = () => toast("Password must be at least 9 characters");
    function handleLogin(e) {

        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json'
        };

        if (password.length < 9) {
            notifyPassword();
        }
        const data = {
            email: email,
            password: password
        };
        axios.post('http://127.0.0.1:8000/api/auth/login', data,{headers})
        .then(response =>{
            if (response.status === 200) {
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('id', response.data.user.id);
                navigate('/');
                notifyLogin();
            }
        }).catch(error => {
            if (error.response && error.response.status === 401 ||error.response && error.response.status ===  400) {
                notifyError();
            } else {
                console.log(error);
            }
        });
    }   
    return (
        <section className="login-page">
            <div className="form-container">
                <div className="site-name">
                    <h1><span>Visit</span> Syria</h1>
                </div>
                <div className="hello-text">
                    <p>visit Syria تسجيل الدخول في موقع </p>
                </div>
                <form >
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='البريد الالكتروني' />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='كلمة المرور ' />
                    <button type='submit' onClick={(e) => handleLogin(e)}>دخول</button>
                    <p className='mt-4  '>ليس لديك حساب ؟ <Link to='/register' > سجل اللآن</Link> </p>
                </form>
            </div>
        </section>
    )
}

export default Login