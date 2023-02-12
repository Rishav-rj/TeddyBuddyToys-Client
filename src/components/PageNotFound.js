import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = ()=>{
    return(
        <>
            <Container>
            <div>
                <h1>404 - Page Not Found</h1>
            </div>
            <Link to="/">
                <p>Back to Teddy Buddy Toys</p>
            </Link>
            </Container>
        </>
    )

}

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height: 90vh;
    div{
        display: flex;
        justify-content:center;
        align-items:center;
        h1{
            color:white;
        }
    }
    p{
        color:white;
        cursor: pointer;
        background:black;
        padding:5px 15px;
        border-radius:6px;
        text-decoration:underline;
    }
`;

export default PageNotFound;