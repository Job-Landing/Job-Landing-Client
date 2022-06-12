import React from 'react';
import {Link} from 'react-router-dom'
import Wrapper from '../asserts/wrappers/Error'

const Error = () => {
    return (
        <Wrapper className='page-100'>
            <section>
                <h1>404</h1>
                <h3>Sorry, the page you tried cannot be found</h3>
                <Link to="/">
                    back home
                </Link>
            </section>
        </Wrapper>
    );
}

export default Error;