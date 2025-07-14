import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {nameContext} from './UserContext';
import '../App.css';

export default function UserForm() {
    const {userName, setUserName} = useContext(nameContext);
    const navigate = useNavigate();
    
    function handleChange(event) {
        setUserName(event.target.value);
    }

    function handleClick() {
        if (userName.trim()) {
            navigate("/quiz");
        } else {
            alert("Please enter your name first.");
        }
    }

  return (
    <div>
        <form className="form">
            <label htmlFor='name'>Name:</label>
            <input 
                id="name" 
                type="text" 
                value={userName} 
                onChange={handleChange} 
                required />
            <br /><br />
            <button onClick={handleClick}>Start Quiz</button>
        </form>
    </div>
  );
}