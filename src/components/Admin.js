import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageSlider from "./imageSlider";

const Admin = () => {
  const [product, setProduct] = useState([]);
  const [toys, setToys] = useState([]);
  const [binaryImage, setBinaryImage] = useState([]);


const getProduct = ()=>{
  axios.get("https://teddy-buddy-toys.onrender.com/read")
  .then((res)=>setToys(res.data))
      .catch((err) => {
        console.log("Error", err);
      });
}
  

useEffect(()=>{  
  getProduct();
  },[]);

  console.log(toys);


  const navigate = useNavigate();

  const handleChange=(e)=>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
  }

  const handleImgChange = (e) => {
    const binary = () => {
      var imgData = [];
      const img = e.target.files;
      for (var i = 0; i < img.length; i++) {
        var file = img[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const Base63 = reader.result;
          imgData.push(Base63);
        };
      }
      setBinaryImage(imgData);
    }
    binary();
  };

  const onsubmit =  async(e) => {
    e.preventDefault();

    await axios.post("https://teddy-buddy-toys.onrender.com/add", {
      name: product.name,
      price: product.price,
      status: product.status,
      imageStr: binaryImage,
    });
    setProduct({
      name:"",
      price:"",
      status:""
    })
    getProduct();
  };




  const Logout = () => {
    window.localStorage.removeItem("isLoggedIn");
    navigate("/");
    window.location.reload(false);
  };


  const deleteWork =  async(id) => {
    await axios.delete(`https://teddy-buddy-toys.onrender.com/delete/${id}`);
    getProduct()
  };

  const list = toys.map((toy) => {
    return (
      <div key={toy._id} className="items">
      <ImageSlider img={toy.imageStr}/>
        <h3>🔸{toy.name}</h3>
        <h3>🔸Price - ₹{toy.price}</h3>
        <h3>🔸{toy.status}</h3>
        <button onClick={() => deleteWork(toy._id)}>Delete</button>
      </div>
    );
  });

  return (
    <>
      <OuterContainer>
        <Container className="App">
          <h1>Add New Products</h1>
          <Form onSubmit={onsubmit}>
            <input type="text" name="name" required value={product.name} onChange={handleChange}/>
            <input type="number" name="price" required value={product.price} onChange={handleChange}/> 
            <select type="select" name="status" value={product.status} onChange={handleChange}>
              <option value=""> --Please select product status--</option>
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
            </select>
            <ImageInput
              type="file"
              name="image"
              multiple          
              onChange={handleImgChange}
            />
            <button type="submit">Add Product</button>
            <Button>
              <button type="buttom" className="logout" onClick={Logout}>
                Log out
              </button>
            </Button>
          </Form>
        </Container>
        <ToysContainer>
          <Logo>
            <img
              src="images/TBT-logo.left.png"
              className="unicon"
              alt="unicon-left"
            />
            <img src="images/TBT-logo.1.png" alt="logo" />
            <img
              src="images/TBT-logo.right.png"
              className="unicon"
              alt="unicon-right"
            />
          </Logo>
          <ToysList>{list}</ToysList>
        </ToysContainer>
      </OuterContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 78vh;
  padding: 30px;
  background: rgba(0, 0, 0, 0.1);
  h1 {
    color: white;
    font-size: 40px;
    text-decoration: underline white;
  }
  @media (max-width: 500px) {
    height: 58vh;
    h1 {
      margin-top:10px;
      font-size: 20px;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: 20px;
  @media (max-width: 500px) {
    width: 85vw;
    margin-bottom: 0px;
  }
  input {
    padding: 5px 5px;
    cursor: pointer;
    outline: none;
    border-radius: 6px;
    margin: 10px;
    font-size: 16px;
    @media (max-width: 500px) {
      padding: 10px 5px;
    }
  }
  select {
    padding: 5px 5px;
    cursor: pointer;
    outline: none;
    border-radius: 6px;
    margin: 10px;
    font-size: 16px;
    @media (max-width: 500px) {
      padding: 10px 5px;
    }
  }
  button {
    align-items: center;
    appearance: none;
    background-color: #0c2461;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-flex;
    height: 35px;
    margin: 10px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
    @media (max-width: 500px) {
      height: 50px;
      font-size: 20px;
    }
    &:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      transform: translateY(-2px);
    }
    &:focus {
      box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    }
    &:active {
      box-shadow: #d6d6e7 0 3px 7px inset;
      transform: translateY(2px);
    }
  }
`;

const Button = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  @media(max-width:500px){
    top: 5px;
    right: 5px;
    width: 100px;
  }
`;

const OuterContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/8409850/pexels-photo-8409850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-color: black;
  background-position: bottom;
  height: 550px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ToysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a3d62;
  h2 {
    font-size: 35px;
    color: #574b90;
    text-transform: uppercase;
  }
`;
const ToysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  @media (max-width: 768px){
    padding-bottom:20px;
  }
  .items {
    margin: 20px;
    border: 2px solid rgba(87, 101, 116, 0.2);
    box-shadow: 1px 1px 8px 1px gray;
    position: relative;
    background: rgba(256, 256, 256, 0.8);
    padding-bottom: 10px;
    @media (max-width: 768px) {
      width: 160px;
      margin: 5px;
      padding-bottom: 8px;
    }
  }
  h3 {
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  button {
    padding: 3px 10px;
    font-size: 15px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: #ee5253;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const ImageInput = styled.input`
  background-color: white;
  color: black;
  cursor: pointer;
  margin: 10px;
`;

const Logo = styled.div`
  width: 100%;
  background: white;
  display: flex;
  img {
    display: block;
    width: 450px;
    margin: auto;
  }
  .unicon {
    width: 150px;
  }
  @media (max-width: 500px) {
    justify-content: space-around;
    img {
      width: 180px;
      margin: 0px;
    }
    .unicon {
      width: 50px;
      margin: 0px;
    }
  }
`;

export default Admin;
