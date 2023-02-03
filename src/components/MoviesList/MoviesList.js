import { Box, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { Data } from '../../Data';
import './MoviesList.scss';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ProgressBar from "@ramonak/react-progress-bar";
import Animate from 'react-smooth';

const MoviesList = () => {
  const [movieId, setMovieId] = useState();
  const [active, setActive] = useState(false);
  console.log('movie data on click', movieId);
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
      <Box className={`details-wrapper ${active ? 'active' : ''}`}>
        <Box className='movie-details'>
          <Box className='movie-bg'>
            {movieId && <Box className='details-card'>
              <Box className='movie-poster'>
                <Animate from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  easing="ease-in"
                  duration="300"
                >
                  {({ opacity }) => <img src={movieId.Poster} height='389' width='331' alt={movieId.Title + 'details'} style={{ opacity }} />}

                </Animate>
              </Box>
              <Animate steps={steps}
              >
                <Box className='movie-info' >
                  <Typography variant='h2'>{movieId.Title}</Typography>
                  <Box className='imdb-rating'>
                    <ProgressBar
                      completed={movieId.imdbRating * 10}
                      isLabelVisible={false}
                      animateOnRender={true}
                      initCompletedOnAnimation='0'
                      height={'8px'}
                      width={'111px'}
                      bgColor='#00E0FF'
                      baseBgColor='#283647'
                      className='rating-bar' />
                    <Typography component='span'>{movieId.imdbRating + '/10'}</Typography>
                  </Box>
                  <Box className='year info'><Typography component='span' className='info'>Year:</Typography> {movieId.Year + '/10'}</Box>
                  <Box className='running-time info'><Typography component='span' className='info'>Running Time:</Typography> {movieId.Runtime}</Box>
                  <Box className='directed-by info'><Typography component='span' className='info'>Directed By:</Typography> {movieId.Director}</Box>
                  <Box className='language info'><Typography component='span' className='info'>Language:</Typography> {movieId.Language}</Box>
                  <Box className='description'>{movieId.Plot}</Box>
                  <Box className='button-wrap'>
                    <Button variant='contained'>Play Movie</Button>
                    <Button variant='outlined'>Watch Trailer</Button>
                  </Box>
                </Box>
              </Animate>
            </Box>}
          </Box>
        </Box>
      </Box>
      <Box className='moviesList'>
        {
          Data.map((data, id) => {
            return (
              <Paper sx={{ bgcolor: '#394B61', padding: '10px' }} key={id} className='movie-card' onClick={() => { setMovieId(data); setActive(true) }}>
                <Box className='movie-banner'><img src={data.Poster} width='157' height='188' alt={data.title} /></Box>
                <Typography component='p' my='12px'>{data.Title}</Typography>
                <Box className='icon-controls'><PlayCircleFilledWhiteOutlinedIcon /><AddCircleOutlineOutlinedIcon /></Box>
              </Paper >
            )
          })
        }
      </Box>
    </>
  )
}

export default MoviesList