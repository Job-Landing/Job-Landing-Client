import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
  }

  .logo {
    margin-top: 40px;
    width: 300px;
  }

  .form_wrapper {
    height: 500px;
    width: 450px;
    background: #F6F6F6;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .form_wrapper_1 {
    width: 100%;
    border-bottom: 3px solid white;
  }

  .form_title {
    color: black;
    font-size: 20px;
    padding: 10px 0 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  input {
    padding: 15px 0 15px 10px;
    width: 370px;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.5s;
  }

  p {
    color: black;
    font-size: 12px;
    font-weight: 500;
    margin-top: 15px;
    cursor: pointer;
  }

  .submit {
    width: 370px;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    background-image: linear-gradient(to right, #232526 0%, #414345 51%, #232526 100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
  }

  .submit:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  .redirect {
    border-top: 3px solid white;
    color: black;
    text-align: center;
  }

  .seen {
    color: #1B2430;
    position: relative;
    left: 160px;
    bottom: 34px;
    transition: 0.2s;
    /* text-align: left; */
  }

  .link {
    text-decoration: none;
  }

  .seen:hover {
    color: #626262;
  }
`

export default Wrapper;