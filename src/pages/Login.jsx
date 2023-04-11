import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '../context/UserContext/UserContext';

export function LogIn() {
    const { login, register } = useUser();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
    const [registerData, setRegisterData] = useState({
        fullName: "",
        email: "",
        password: "",
        repPassword: ""
      });

    const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterInputChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        login(loginData)
        navigate("/cart");
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        register(registerData)
        navigate("/cart");
    }

  return (
    <div className='bg-red-400 w-screen h-screen flex flex-col'>
        <h2>LogIn</h2>
        <form onSubmit={handleLogInSubmit} className='flex flex-col w-[20vw]'>
            <input className='h-8' name="email" placeholder='email' type="text" value={loginData.email} onChange={handleLoginInputChange} />
            <input className='h-8' name="password" placeholder='password' type="text" value={loginData.password} onChange={handleLoginInputChange} />
            <button type="submit">Log in</button>
        </form>
        <hr />
        <h2>Register</h2>
        <form onSubmit={handleRegisterSubmit} className='flex flex-col w-[20vw]'>
            <input name="fullName" placeholder='full name' type="text" value={registerData.fullName} onChange={handleRegisterInputChange} />
            <input name="email" placeholder='email' type="text" value={registerData.email} onChange={handleRegisterInputChange} />
            <input name="password" placeholder='password' type="password" value={registerData.password} onChange={handleRegisterInputChange} />
            <input name="repPassword" placeholder='repPassword' type="password" value={registerData.repPassword} onChange={handleRegisterInputChange} />
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}
