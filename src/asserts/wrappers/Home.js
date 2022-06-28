import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  .wrapper {
    width: 100%;
    border-bottom: 0.1px solid white;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #17171e;
    box-shadow: rgba(209, 209, 209, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .inner_wrapper {
    width: 80%;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    color: white;
  }
  .vertical_line {
    border-left: 2px solid white;
    height: 30px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .link {
    text-decoration: none;
  }
  Button {
    color: white;
    border-color: white;
    border-radius: 20px;
    margin-right: 20px;
    text-decoration: none;
  }
  Button:hover {
    border-color: #5687f6;
  }
  .information {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    color: white;
    margin-bottom: 40px;
  }
  .information_title {
    font-size: 35px;
  }
  .information_text {
    font-size: 20px;
    color: #d1d1d1;
  }
  .homeImg {
    height: 350px;
    margin-left: auto;
    display: block;
  }
  @media only screen and (max-width: 800px) {
    .information {
      grid-template-columns: 1fr;
    }
    .homeImg {
      display: none;
    }
    .inner_wrapper{
      width: 90%;
    }
  }
`
export default Wrapper;