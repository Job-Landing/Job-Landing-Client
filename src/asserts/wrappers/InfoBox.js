import styled from "styled-components";

const Wrapper = styled.section`
    padding-top: 20px;

    .box_wrapper_bottom{
        /* background-color: #ABA5EA; */
        background-color: rgba(171,165,234, 0.4);
        width: 280px;
        border-radius: 15px;
    }
    .box_wrapper_top{
        display: flex;
        background-color: #8489ba;
        width: 270px;
        border-radius: 15px;
        padding: 10px;
        transform: rotate(4deg);
    }
    .box_wrapper1{
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .box_wrapper2{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;

    }
    .icon{
        color: #17171e;
        width: 35px;
        height: 35px;
    }
    h5{
        margin: 0;
    }
    .row1{
        width: 200px;
        height: 7px;
        background-color: white;
        border-radius: 10px;
    }
    .row2{
        width: 150px;
        height: 7px;
        background-color: white;
        border-radius: 10px;
    }

`

export default Wrapper;