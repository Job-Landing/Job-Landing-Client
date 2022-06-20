import React from 'react'
import styled from 'styled-components'
import pending from '../images/pending.png'
import schedule from '../images/schedule.png'
import decline from '../images/decline.png'

const Statistic = () => {
    return (
        <Wrapper>
            <div className="box_wrapper">
                <div className="box box1">
                    <div>
                        <h5>Pending Application</h5>
                        <h2>100</h2>
                    </div>
                    <img src={pending} alt="pending"/>
                </div>
                <div className="box box2">
                    <div>
                        <h5>Interview Scheduled</h5>
                        <h2>100</h2>
                    </div>
                    <img src={schedule} alt="pending"/>
                </div>
                <div className="box box3">
                    <div>
                        <h5>Jobs Declined</h5>
                        <h2>100</h2>
                    </div>
                    <img src={decline} alt="pending"/>
                </div>
            </div>
        </Wrapper>
    );
}

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

export default Statistic
