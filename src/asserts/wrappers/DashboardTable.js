import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 40px;
    .table{
        display: grid;
        grid-template-columns: 3fr 2fr;
        column-gap: 20px;
    }
    .inner_table{
        display: flex;
        flex-direction: column;
        background-color: rgba(50, 50, 64, 0.79);
        border-radius: 15px;
        padding: 0 15px 15px 15px;
    }
    h2{
        margin: 0;
        padding: 20px 0 0 0;
        padding-left: 20px;
    }
    table, th, td {
        border-collapse: collapse;
    }
    .information_table{
        padding: 20px;
        margin-top: 20px;
        width: 100%;
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
    }
    tr td:nth-child(1){
        padding: 8px 5px 8px 15px;
    }
    tr th:nth-child(1), tr th:nth-child(2),tr th:nth-child(3),tr th:nth-child(4),tr th:nth-child(5){
         width: 20%;
    }
    tr td:nth-child(1), tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5){
         width: 20%;
    }
    tr td:nth-child(2),tr td:nth-child(3),tr td:nth-child(4),tr td:nth-child(5){
        text-align: center;
        justify-content: center;
    }
    .link{
        text-decoration: none;
        display:flex;
        justify-content:flex-end;
        width: 100%;
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
    @media only screen and (max-width: 800px) {
        .table{
            display:block;
        }
        .inner_table{
            margin-bottom: 20px;
        }
    }
`

export default Wrapper;