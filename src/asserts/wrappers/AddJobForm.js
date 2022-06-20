import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 20px;

  .form_wrapper {
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 15px;
    padding: 30px 0 30px 0;
    background: #F6F6F6;
  }


  .form_row1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    padding: 0 40px 20px 20px;
  }

  .form_row2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    padding: 0 30px 20px 20px;
  }

  .label {
    font-weight: 600;
    font-size: 18px;
    margin-left: 8px;
  }

  .input {
    width: 100%;
    padding: 15px 0 15px 10px;
    border-radius: 15px;
    border: none;
    margin-top: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.5s;
  }

  .box {
    background-color: white;
  }

  .date_picker {
    height: 55px;
    width: 100%;
    background-color: white;
    border-color: #c4c4c4;
  }

  .react-date-picker, .react-date-picker__wrapper, .MuiOutlinedInput-root, .MuiSelect-select, .MuiFormControl-root, .MuiBox-root {
    /* background: red; */
    outline: none;
    border-radius: 10px;
    border-color: #c4c4c4;
  }

  .react-date-picker__inputGroup__month {
    margin-left: 10px;
  }

  .react-date-picker__wrapper:hover {
    border-color: black;
  }

  .submit {
    background-color: #8489ba;
    margin-right: 10px;
  }

  .submit:hover {
    background-color: #8f93b8;
  }

  .clear {
    background-color: #969696;
    margin-right: 30px;
  }

  .clear:hover {
    background-color: #a1a1a1;
  }

  .btn {
    width: 100%;
    display: flex;
    /* padding: 0 20px 0 20px; */
    justify-content: flex-end;
  }

`

export default Wrapper;