import React,{useState, useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Sidebar, Navbar, Statistic, DashboardTable, DashboardChart } from '../components'
import axios from 'axios';
import { BASE_URL } from '../utils/constant'
import { JobLandingContext } from '../context/context';

const Dashboard = () => {
  const { user } = React.useContext(JobLandingContext);
  const [jobList, setJobList] = useState([])
  const [date, setDate] = useState([])

  const initialState = {
    pending: 0,
    interview: 0,
    decline: 0,
    offer: 0
  }
  const [jobStatus, setJobStatus] = useState(initialState)

  const getJobList = async () => {
    const response = await axios(`${BASE_URL}/job/${user._id}`)
    setJobList(response.data)
    setDateList(response.data)
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i].status === 'pending') {
        setJobStatus({ ...jobStatus, [jobStatus['pending']]: jobStatus['pending']++ })
      } else if (response.data[i].status === 'interview') {
        setJobStatus({ ...jobStatus, [jobStatus['interview']]: jobStatus['interview']++ })
      }else if (response.data[i].status === 'decline') {
        setJobStatus({ ...jobStatus, [jobStatus['decline']]: jobStatus['decline']++ })
      }else if (response.data[i].status === 'offer') {
        setJobStatus({ ...jobStatus, [jobStatus['offer']]: jobStatus['offer']++ })
      }
    }
  }


    const setDateList = (response_data) => {
      let dateArray = []
      let dateMap = new Map();
      for (var i = 0; i < response_data.length; i++){
          let createAt = response_data[i]['createAt'];
          let createAtList = createAt.split('-')
          if (!dateMap.has(createAt)) {
            var value = [new Date(createAtList[0], createAtList[1]-1, createAtList[2]), 1]
            dateMap.set(createAt, value)
          } else {
            dateMap.get(createAt)[1]++;
          }
      }
      dateMap.forEach(function (value, key, map) {
        // console.log(`dateMap.get('${key}') = ${value}`)
        dateArray.push(value)
      })

      setDate(dateArray)
    }


  useEffect(() => {
    getJobList()
  }, [])


  return (
      <Wrapper>
      <Sidebar />
        <div className="right">
          <Navbar />
          <Statistic jobStatus={jobStatus} />
          <DashboardChart jobStatus={jobStatus} jobList={jobList} date={date} />
          <DashboardTable jobList={jobList} />
        </div>
      </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  .right{
    width: 100vw;
    padding: 20px 40px 20px 40px;
  }
`

export default Dashboard;