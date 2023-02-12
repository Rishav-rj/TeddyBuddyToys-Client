import { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from "axios";
import ImageSlider from "./imageSlider";
import Loader from "./Loader";

const Main = () => {
  const [toys, setToys] = useState([]);
  const [mode, setMode] = useState("#ef5777");

  const getProduct = () => {
    axios
      .get("https://teddy-buddy-toys.onrender.com/read")
      .then((res)=>setToys(res.data))
      .catch((err) => {
        console.log("Error", err)
      });
  };
  
useEffect(()=>{
    getProduct()
  },[])


  const list = toys.map((toy)=>{
    return(
      <div className="items" key={toy._id}>
        <ImageSlider img={toy.imageStr}/>
      <h3>🔸{toy.name}</h3> 
      <h3>🔸Price - ₹{toy.price}</h3> 
      <h3>🔸{toy.status}</h3> 
      </div>
    )
  })
 

  
  return (
    <>
    <Container className="App">
        <Logo>
          <img src="images/TBT-logo.left.png" className="unicon" alt=""/>
          <img src="images/TBT-logo.1.png" alt=""/>
          <img src="images/TBT-logo.right.png" className="unicon" alt=""/>
        </Logo>
        {Object.keys(toys).length === 0 ? (
            <Loader/>
        ) : (
      <ToysList style={{background:mode}}>
        <Light type="button" autofocus onClick={()=>setMode("#ef5777")}>Light</Light>
        <Dark type="button" onClick={()=>setMode("#0a3d62")}>Dark</Dark>
        {list}
      </ToysList>
        )}
    </Container>
    </>
  );
}


const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h1{
    color:white;
    font-size:40px;
    text-decoration:underline white;
    margin:30px;
  }
  img{
    width:300px; 
  }
  @media (max-width:500px) {
   
    h1{
      font-size:30px;
    }
  }
  
`;

const Logo = styled.div`
    width: 100%;
    background: white;
    display: flex;
    img{
      display: block;
      width:450px;
      margin: auto;
    }
    .unicon{
      width:150px;
    }
    @media (max-width:500px) {
      justify-content:space-around;
        img{
          width:180px;
          margin:0px; 
        }
        .unicon{
          width:50px;
          margin:0px; 
        }
      }
`;


const ToysList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  padding-top:50px;
  padding-bottom:30px;
  position:relative;
  width:100%;
  height:100%;
  .items{
    margin:20px;
    border:2px solid rgba(87, 101, 116,0.2);
    box-shadow:1px 1px 8px 1px gray;
    position:relative;
    background:rgba(256,256,256,0.8);
    ${'' /* background:rgba(246, 185, 59,0.8); */}
    padding-bottom:10px;
    @media(max-width:768px){
        width: 160px;
        margin:5px;
        padding-bottom:8px;
    }
  }
  h3{
    font-weight:400;
    @media(max-width:768px){
        font-size:12px;
    }
  }
`;

const Light = styled.button`
  position:absolute;
  top:18px;
  right:80px;
  padding:4px 8px;
  width:60px;
  font-size:14px;
  font-weight:bold;
  border-radius:20px;
  cursor:pointer;
  border:none;
  color:black;
  background:#ef5777;
  box-shadow:1px 1px 3px 3px rgba(0,0,0,0.5);
  &:hover{
    box-shadow:1px 1px 2px 2px rgba(0,0,0,0.5);
  }
  &:active{
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
    transform: scale(0.95);
  }
  &:focus{
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
    transform: scale(0.95);
    border:1px solid white;
  }
  @media(max-width:500px){
    top:15px;
    right:65px;
  }
`;
const Dark = styled.button`
  position:absolute;
  top:18px;
  right:155px;
  padding:4px 8px;
  width:60px;
  font-size:14px;
  font-weight:bold;
  border-radius:20px;
  cursor:pointer;
  border:none;
  color:white;
  background: #0a3d62;
  box-shadow:1px 1px 3px 3px rgba(0,0,0,0.5);
  &:hover{
    box-shadow:1px 1px 2px 2px rgba(0,0,0,0.5);
  }
  &:active{
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
    transform: scale(0.95);
  }
  &:focus{
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.5);
    transform: scale(0.95);
    border:1px solid white;
  }
  @media(max-width:500px){
    top:15px;
    left:65px;
  }
`;



export default Main;
