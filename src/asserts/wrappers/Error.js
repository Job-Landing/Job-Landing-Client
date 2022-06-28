import styled from "styled-components";
import image404 from '../images/404.png'

const Wrapper = styled.main`
    /* background: #94bdff; */
    display: flex;
    justify-content: center;
    text-align: center;
    background: url(${image404}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    h1 {
        text-transform: none;
        margin-bottom: 2rem;
        font-size: 40px;
    }
    .btn{
        text-decoration: none;
        background-color: #ed6543;
        padding: 15px 25px 15px 25px;
        color: white;
        cursor: pointer;
        border-radius: 20px;
        font-weight: 600;
    }
`

export default Wrapper;