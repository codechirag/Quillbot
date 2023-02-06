import { Box, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { Data } from '../../Data';
import './MoviesList.scss';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ProgressBar from "@ramonak/react-progress-bar";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const MoviesList = () => {
  const [movieId, setMovieId] = useState();
  const [active, setActive] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const steps = [{
    style: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    duration: 400,
  }, {
    style: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    duration: 1000,
  }];
  return (
    <>
      <Box className='moviesList'>
        {
          Data.map((data, id) => {
            return (
              <Box  className='root-wrapper' key={id}>
                <Box className={`details-wrapper ${activeCard == data ? 'active' : ''}`}>
                  <Box className='movie-details'>
                    <Box className='movie-bg'>
                      {activeCard && <Box className='details-card'>
                        <Box className='movie-poster'>
                            <CloseOutlinedIcon onClick={()=>setActiveCard(null)} className='details-close' />
                            <img src={activeCard.Poster} height='389' width='331' alt={activeCard.Title + 'details'} />

                        </Box>
                          <Box className='movie-info' >
                            <Typography variant='h2'>{activeCard.Title}</Typography>
                            {activeCard.imdbRating != 'N/A' && <Box className='imdb-rating'>
                              <ProgressBar
                                completed={activeCard.imdbRating * 10}
                                isLabelVisible={false}
                                animateOnRender={true}
                                transitionDuration={'2s'}
                                initCompletedOnAnimation='0'
                                height={'8px'}
                                width={'111px'}
                                bgColor='#00E0FF'
                                baseBgColor='#283647'
                                className='rating-bar' />
                              <Typography component='span'>{activeCard.imdbRating + '/10'}</Typography>
                            </Box>}
                            <Box className='year info'><Typography component='span' className='info'>Year:</Typography> {activeCard.Year + '/10'}</Box>
                            <Box className='running-time info'><Typography component='span' className='info'>Running Time:</Typography> {activeCard.Runtime}</Box>
                            <Box className='directed-by info'><Typography component='span' className='info'>Directed By:</Typography> {activeCard.Director}</Box>
                            <Box className='language info'><Typography component='span' className='info'>Language:</Typography> {activeCard.Language}</Box>
                            <Box className='description'>{activeCard.Plot}</Box>
                            <Box className='button-wrap'>
                              <Button variant='contained'>Play Movie</Button>
                              <Button variant='outlined'>Watch Trailer</Button>
                            </Box>
                          </Box>
                      </Box>}
                    </Box>
                  </Box>
                </Box>
                <Paper sx={{ bgcolor: '#394B61', padding: '10px' }} key={id} className={`movie-card ${activeCard == data ? 'active' : ''}`} onClick={() => {
                  setActive(true);
                  setActiveCard(data);
                }}
                >
                  <Box className='movie-banner'><img src={data.Poster} width='157' height='188' alt={data.title} /></Box>
                  <Typography component='p' my='12px'>{data.Title}</Typography>
                  <Box className='icon-controls'><PlayCircleFilledWhiteOutlinedIcon /><AddCircleOutlineOutlinedIcon /></Box>
                </Paper >
              </Box>
            )
          })
        }
      </Box>
    </>
  )
}

export default MoviesList