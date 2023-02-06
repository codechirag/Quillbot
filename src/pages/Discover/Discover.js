import { Box } from '@mui/material';
import React, { useState } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Discover.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const Discover = () => {
    const [overflow,setOverFlow] = useState(false);
    const handleOverflow = (e)=>{
       setOverFlow(e);
    }
    return (
        <Scrollbars 
        className={`page-scroll ${overflow ? 'overflow': ''}`}
            renderTrackHorizontal={({ style, ...props }) =>
                <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>
            }
            style={{ height: '100vh' }}>
            <Box className='wrapper'>
                <Sidebar passOverflow= {handleOverflow} />
                <Box className='content'>
                    <SearchBox />
                    <MoviesList />
                </Box>
            </Box>
        </Scrollbars>
    )
}

export default Discover