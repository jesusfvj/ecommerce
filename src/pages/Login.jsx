import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';

export function LogIn() {
    const {login, isAuthenticated} = useAuthContext();
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleInputChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        if(password === "password"){
            login()
            navigate("/cart");
        }
    }
  return (
    <div>
        <h1>LogIn</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={password} onChange={handleInputChange} />
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}
