import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Sidebar.scss';
import user from '../../resources/images/user.png';
import Avatar from '@mui/material/Avatar';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { NavLink } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Sidebar = () => {
  const [active,setActive] = useState(false);
  const menu1List = [
    {
      id: '1',
      text: 'Discover',
      link: '/',
      icon: <SearchIcon />
    },
    {
      id: '2',
      text: 'Playlist',
      link: '/playlist',
      icon: <PlaylistPlayIcon />
    },
    {
      id: '3',
      text: 'Movie',
      link: '/movie',
      icon: <LiveTvIcon />
    },
    {
      id: '4',
      text: 'TV Shows',
      link: '/tv-shows',
      icon: <DesktopWindowsOutlinedIcon />
    },
    {
      id: '5',
      text: 'My List',
      link: '/my-list',
      icon: <ListIcon />
    }
  ]
  const menu2List = [
    {
      id: '1',
      text: 'Watch Later',
      link: '/watch-later',
      icon: <UpdateOutlinedIcon />
    },
    {
      id: '2',
      text: 'Recommended',
      link: '/recommended',
      icon: <FavoriteBorderOutlinedIcon />
    }
  ]
  const menu3List = [
    {
      id: '1',
      text: 'Settings',
      link: '/settings',
      icon: <SettingsOutlinedIcon />
    },
    {
      id: '2',
      text: 'Logout',
      link: '/logout',
      icon: <LogoutOutlinedIcon />
    }
  ]
  return (
    <>
      <Typography className='responsive-menu' onClick={()=>setActive(true)} ><MenuRoundedIcon /></Typography>
      {active && <Box className='overlay'></Box>}
      <Box className={`sidebar ${active ? 'active' : ''}`} sx={{ bgcolor: 'background.paper' }}>
        <Box className='user-profile' sx={{ borderBottom: '1px solid', borderColor: 'grey.50' }}>
        <Typography className='close-menu' onClick={()=>setActive(false)} ><CloseRoundedIcon className='close-button'/></Typography>
          <Avatar alt='User Image' sx={{ width: '91px', height: '91px', margin: '0 auto 11px' }} src={user} />
          <Typography variant='h1' >Eric Hoffman</Typography>
        </Box>
        <Box className='menu'>
          <Box className='menu1 menuBorder' py='13px'>
            {
              menu1List.map((value) => {
                return (
                  <NavLink key={value.id} to={value.link} >{value.icon}<Typography component='span'>{value.text}</Typography></NavLink>
                )
              })
            }
          </Box>
          <Box className='menu2 menuBorder' py='13px'>
            {
              menu2List.map((value) => {
                return (
                  <NavLink key={value.id} to={value.link} >{value.icon}<Typography component='span'>{value.text}</Typography></NavLink>
                )
              })
            }
          </Box>
          <Box className='menu3' py='13px'>
            {
              menu3List.map((value) => {
                return (
                  <NavLink key={value.id} to={value.link} >{value.icon}<Typography component='span'>{value.text}</Typography></NavLink>
                )
              })
            }
          </Box>
        </Box>
      </Box>
    </>
  )

}

export default Sidebar;