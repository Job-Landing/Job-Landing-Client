import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    padding: 20px 0 20px 0;
  }
  .left{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left_inner{
    width: 400px;
    height: 100%;
    background-color: rgb(33, 43, 54);
    border-radius: 30px;
    min-height: calc(100vh - 7rem);
    padding: 0 40px 0 40px;
  }
  .text{
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .text_login{
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 150px;
    margin-bottom: 50px;
  }
  .register_img{
    width: 100%;
  }
  .right{
    flex: 2;
    display: flex;
    justify-content: center;
  }
  .login{
    position: absolute;
    right: 40px;
    top: 80px;
    font-size: 15px;
  }
  h1 {
    font-size: 5rem;
  }
  .logo {
    margin-top: 40px;
    width: 300px;
  }
  .form_wrapper {
    height: 500px;
  }
  .form_title {
    color: black;
    font-size: 23px;
    font-weight: 600;
    color: white;
    margin-top: 80px;
    padding: 2px;
    margin-bottom: 0;
  }
  .form_title1{
    color: rgb(145, 158, 171);
    margin-top:10px;
    padding: 2px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 15px 0 15px 10px;
    width: 370px;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    margin-bottom: 15px;
    background: transparent;
    border: 2px solid #858585;
    color: white;
    transition: 0.3s;
  }
  input:hover{
    border: 2px solid white;
  }
  .password_validate{
    width: 370px;
  }
  .password_text {
    color: black;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    float:left;
  }
  .validate_wrapper{
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .validate_msg{
    margin: 0;
    font-size: 12px;
    padding: 3px 3px 3px 8px;
  }
  .bullet_green{
    width:8px;
    height: 8px;
    background-color: #86f09d;
    border-radius: 50%;
  }
  .bullet_red{
    width:8px;
    height: 8px;
    background-color: #F47C7C;
    border-radius: 50%;
  }
  .validate_item{
    display: flex;
    text-align: center;
    align-items: center;
  }

  .error_msg h4{
    margin: 0;
  }
  .error_msg ul{
    list-style: none;
    padding: 0;
    list-style-type: none;
    color: #ff5252;
    margin-top: 10px;
  }

  .submit {
    width: 380px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background: #1976d2;
    box-shadow:rgb(25 118 210 / 24%) 0px 8px 16px 0px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
  }
  .submitLoading {
    width: 380px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background: rgb(145, 158, 171);
    box-shadow:rgb(135 135 135 / 24%) 0px 8px 16px 0px;;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    border-radius: 10px;
  }
  .submit:hover {
    color: #fff;
    text-decoration: none;
    background: #3282d1;
    box-shadow:none;
  }
  .seen {
    color: rgb(145, 158, 171);
    position: relative;
    left: 340px;
    bottom: 56px;
    transition: 0.2s;
    border-radius: 50%;
    padding: 5px;
    /* text-align: left; */
  }
  .link {
    text-decoration: none;
  }
  .link_to_login{
    color: #1976d2;
    font-weight: 500;
  }
  .link_to_login:hover{
    text-decoration: underline;
  }
  .seen:hover {
    background-color: #21262d;
    border-radius: 50%;
  }

  /* loading */
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    margin-right: 70px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: -10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }



  @media only screen and (max-width: 800px) {
    .left{
      display: none;
    }
    .main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export default Wrapper;