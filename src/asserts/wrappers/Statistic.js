import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 20px;

  .box_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
  }

  .box {
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-radius: 15px;
    box-shadow: rgba(153, 153, 241, 0.3) 0px 7px 29px 0px;
    padding: 5px 20px 5px 20px;
    border: 1px solid rgba(153, 153, 241, 0.3);
  }

  .box1 {
    background-color: #C2DED1;
  }

  .box2 {
    background-color: #D9D7F1;
  }

  .box3 {
    background-color: #8CC0DE;
  }

  img {
    width: 180px;
  }
`

export default Wrapper;