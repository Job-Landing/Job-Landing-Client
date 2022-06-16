import React from 'react'
import pending from '../asserts/images/pending.png'
import schedule from '../asserts/images/schedule.png'
import decline from '../asserts/images/decline.png'
import Wrapper from '../asserts/wrappers/Statistic'

const Statistic = () => {
    return (
        <Wrapper>
            <div className="box_wrapper animate__animated animate__fadeIn">
                <div className="box box1">
                    <div>
                        <h5>Pending Application</h5>
                        <h2>100</h2>
                    </div>
                    <img src={pending} alt="pending" />
                </div>
                <div className="box box2">
                    <div>
                        <h5>Interview Scheduled</h5>
                        <h2>100</h2>
                    </div>
                    <img src={schedule} alt="pending" />
                </div>
                <div className="box box3">
                    <div>
                        <h5>Jobs Declined</h5>
                        <h2>100</h2>
                    </div>
                    <img src={decline} alt="pending" />
                </div>
            </div>
        </Wrapper>
    );
}



export default Statistic
