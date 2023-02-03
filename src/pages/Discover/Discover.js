import { Box } from '@mui/material';
import React from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Discover.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const Discover = () => {
    return (
        <Scrollbars
            renderTrackHorizontal={({ style, ...props }) =>
                <div {...props} style={{ ...style, backgroundColor: 'blue' }}/>
            }
            style={{ height: '100vh' }}>
            <Box className='wrapper'>
                <Sidebar />
                <Box className='content'>
                    <SearchBox />
                    <MoviesList />
                </Box>
            </Box>
        </Scrollbars>
    )
}

export default Discover