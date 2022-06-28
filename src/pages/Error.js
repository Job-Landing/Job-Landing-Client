import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../asserts/wrappers/Error'
import { HomeNavbar } from '../components'

const Error = () => {
    return (
        <Wrapper className='page-100'>
            <section>
                <h1>Opps! Don't cry</h1>
                <Link to="/" className="btn">
                    Back to Home
                </Link>
            </section>
        </Wrapper>
    );
}



export default Error;