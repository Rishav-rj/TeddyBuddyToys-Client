import React, { useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';


const Login = () => {

const [user, setUser] = useState();
const [auth, setAuth] = useState();

const handle=(e)=>{
    setUser({
    ...user,
    [e.target.name]:e.target.value
    })
}

const navigate = useNavigate();

const useAuth = ()=>{
  if(auth==="Login Successfull"){
    return true
  }else  return false
}
const isAuth = useAuth();

const loggedIn = window.localStorage.getItem("isLoggedIn")

const submit=(e)=>{
    e.preventDefault()
    console.log(user.password);
      axios.post("https://teddy-buddy-toys.onrender.com/user",user)
      .then(res => {
          if(res.data.message==="Login Successfull"){
              alert(res.data.message)
              setAuth(res.data.message)
              navigate("/chitcola")
              window.localStorage.setItem("isLoggedIn",true)
          }else{
              alert(res.data.message)
          }    
      })  

}

  return (isAuth || loggedIn)?<Outlet/>:(
    <Container>
      <form onSubmit={submit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required 
          onChange={handle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handle}
        />
        <button type="submit">Login</button>
      </form>
    </Container>
    
  );
};
const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 100vw;
  height:100vh; 
  background-image:URL("https://images.pexels.com/photos/5499869/pexels-photo-5499869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: 10% 100%; 
  background-repeat: no-repeat;
  background-size: cover; 
  
  form{
    position: absolute;
    top:150px; 
    background: rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    height:40%; 
    margin:10px;
    padding:10px;
    input{
      width:25vw;
      padding:8px 5px;
      margin: 10px;
      border-radius:5px;
      outline:none;
      border:none;
      font-size:18px;
      @media (max-width:500px) {
        width:75vw;
        padding:12px 5px;
      }
    }
    button{
      margin: 15px;
      align-items: center;
      appearance: none;
      background-color: #0c2461;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
      box-sizing: border-box;
      color: white;
      cursor: pointer;
      display: inline-flex;
      height: 35px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow .15s,transform .15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow,transform;
      font-size: 18px;
      @media (max-width:500px) {
        height: 50px;
        width:75vw;
        font-size: 20px;
        }
      &:hover{
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
      }
      &:focus{
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      }
      &:active{
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
      }
      }
}
`;

export default Login;
