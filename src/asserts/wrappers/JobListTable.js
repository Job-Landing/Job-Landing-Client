import styled from "styled-components";

const Wrapper = styled.section`
    padding-top: 20px;
    /* Table */
    .inner_table{
        background-color: rgba(50, 50, 64, 0.79);
        border-radius: 15px;
        padding: 0 15px 15px 15px;

    }
    h2{
        margin: 0;
    }
    table, th, td {
        border-collapse: collapse;
    }
    .information_table{
        padding: 20px;
        margin-top: 20px;
    }
    .tr{
        background-color: #8489ba;
    }

    th{
        padding: 10px 0 10px 0;
    }
    th:nth-child(1){
        text-align: left;
        border-radius: 15px 0 0 15px;
        padding-left: 15px;
    }
    .last_column{
        border-radius: 0 15px 15px 0;
        padding-right: 15px;
    }
    tr td:nth-child(1){
        padding: 8px 5px 8px 15px;
    }
    tr td:nth-child(1), tr th:nth-child(1){
        width: 20%;
    }
    tr td:nth-child(2), tr th:nth-child(2){
        width: 20%;
    }
    tr td:nth-child(3), tr td:nth-child(4),tr td:nth-child(5), tr th:nth-child(3), tr th:nth-child(4),tr th:nth-child(5){
        width: 15%;
    }
    tr td:nth-child(6), tr td:nth-child(7), tr td:nth-child(8), tr th:nth-child(6), tr th:nth-child(7), tr th:nth-child(8){
        width: 8%;
    }
    tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5),tr td:nth-child(6), tr td:nth-child(7), tr td:nth-child(8){
        text-align: center;
        justify-content: center;
    }
    tr td:nth-child(8){
        padding-right: 15px;
    }
    .view_all{
        float: right;
        margin-right: 10px;
    }
    td{
        font-size: 14px;
    }
    .interview{
        background-color: #D9D7F1;
        color: #7166EC;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .offer{
        background-color: #eaf8e2;
        color: green;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .pending{
        background-color: #fdf5d1;
        color: #b1832e;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }
    .decline{
        background-color: #FCDAD7;
        color: #a9313a;
        border-radius: 5px;
        padding: 2px 4px 2px 4px;
        font-size: 13px;
        font-weight: 600;
    }

    .delete_icon{
        color: white;
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
    .no_underline{
        text-decoration: none;
    }
    .pagination{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .empty{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .link{
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: 600;
        width: 100px;
        height: 30px;
        background-color:#8489ba;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 0 5px 0;
        cursor: pointer;
        box-shadow:rgb(132 137 186 / 24%) 0px 8px 16px 0px;
        border-radius: 15px;
        transition: 0.5s;
        background-size: 200% auto;
        margin-right: 10px;
    }
    .link:hover {
        color: #fff;
        text-decoration: none;
        background: #787fb6;
        box-shadow:none;
    }
    .inner_table_row1{
        display: flex;
        align-items: center;
        padding: 20px 0 0 0;
        padding-left: 20px;
        justify-content: space-between;
    }

    li button, li div{
        color: white;
    }

    /* label, input, svg{
        color: white;
    }

    .react-date-picker__wrapper, .MuiOutlinedInput-root, .MuiSelect-select, .MuiFormControl-root, .MuiBox-root, .MuiFormControl-root, .MuiAutocomplete-root{
        border-radius: 10px;
        border-color: red;
    } */

`

export default Wrapper;