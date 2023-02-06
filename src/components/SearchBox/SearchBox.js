import { Box, FilledInput, FormControl, IconButton, InputAdornment, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './SearchBox.scss';
import useWindowDimension from '../hooks/useWindowDimension'; 
const SearchBox = (props) => {
  const [mode, setMode] = useState(true);
  const [active, setActive] = useState(false);
  const dimensions = useWindowDimension();
  const [search, setSearch] = useState('');
  const toggleMode = () => {
    setMode(!mode);
  }

  return (
    <Box className='search-wrapper'>
      <Box className={`search-box ${active ? 'active' : ''}`}>
        <FormControl variant="outlined">
          <SearchIcon className='search-icon' tabIndex="1" onClick={()=>setActive(!active)} />
          {dimensions.width > 500 ? search === '' ? <Typography className='placeholder'component='span'>Title, Movies, Keyword</Typography> : '' : search === '' ? <Typography className='placeholder'component='span'>Type...</Typography> : '' }
          <FilledInput
            className='searchField'
            type='text'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={()=>setSearch('')}>
                  <CloseOutlinedIcon  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box className='page-control'>
        <Typography component='span' onClick={toggleMode} className='themeMode'>{mode === true ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}</Typography>
        <MoreVertIcon />
      </Box>
    </Box>

  )
}

export default SearchBox