import React from 'react'
import { JobLandingContext } from '../context/context';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

const Home = (() => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const { example, setExample } = React.useContext(JobLandingContext);
  return (
    <div>
      <h1>home</h1>
      <h2>{example}</h2>
      <Button variant="contained">Contained</Button>
      <Switch {...label} defaultChecked />
    </div>

  )
})

export default Home