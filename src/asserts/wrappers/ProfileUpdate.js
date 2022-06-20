import styled from "styled-components";

const Wrapper = styled.section`
    padding-top: 20px;
    .box_wrapper2{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;

    }

    .information_wrapper{
        display: flex;
        align-items: center;
        padding: 40px 10px 10px 0;
    }
    .avatar{
        width: 150px;
        height: 150px;
        border-radius:50%;
    }
    .information{
        margin-left: 20px;
    }
    .information p{
        font-size: 20px;
        font-weight: 500;
    }

    .form_row{
        display: block;
        margin-bottom: 20px;
    }
    input{
        width:  400px;
        height: 30px;
        border-radius:2px;
        transition: 0.3s;
        border-style: solid;
        border:0;
        outline:0;
        padding: 2px 0 2px 10px;
        font-weight: 500;
        margin-top: 8px;
    }
    input:disabled {
        background-color: #696d94;
        color: #1e203b;
    }
    .update{
        margin-top: 10px;
    }
    .form_wrapper{
        margin-top: 20px;
    }
    img{
        width: 500px;
    }

    .alert{
        width: 200px;
        position: fixed;
        top: 120px;
        right: 70px;
    }

    .none{
        display: none;
    }



`
export default Wrapper;