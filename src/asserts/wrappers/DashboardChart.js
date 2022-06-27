import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    column-gap: 30px;
    margin-top: 30px;
    width: 99%;

    svg{
        border-radius: 15px;
    }
    rect{
        border-radius: 10px;
    }
    .calendar{
        height: 200px;
        border: 2px solid #49495c;
        border-radius: 15px;
        padding: 15px 0 0 20px;
    }
    @media only screen and (max-width: 800px) {
        display:block;
        .calendar{
            margin-bottom: 20px;
        }
    }
`

export default Wrapper;