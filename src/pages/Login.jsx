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
    name: "",
    lastName: "",
    email: "",
    password: "",
    repPassword: ""
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    const response = await login(loginData)
    if(response.ok){
      navigate("/cart");
    } else {
      console.log(response)
    }
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const response = await register(registerData)
    if(response.ok){
      navigate("/cart");
    } else {
      console.log(response)
    }
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
        <input name="name" placeholder='name' type="text" value={registerData.name} onChange={handleRegisterInputChange} />
        <input name="lastName" placeholder='last name' type="text" value={registerData.lastName} onChange={handleRegisterInputChange} />
        <input name="email" placeholder='email' type="text" value={registerData.email} onChange={handleRegisterInputChange} />
        <input name="password" placeholder='password' type="password" value={registerData.password} onChange={handleRegisterInputChange} />
        <input name="repPassword" placeholder='repPassword' type="password" value={registerData.repPassword} onChange={handleRegisterInputChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
