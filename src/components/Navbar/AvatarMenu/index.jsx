import { Avatar, Divider, Menu, MenuItem, MenuList, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin, setToken } from '@containers/Client/actions';
import classes from './style.module.scss';

const AvatarMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleLogout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };

  return (
    <>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        style={{ marginRight: '1em', width: 28, height: 28, cursor: 'pointer' }}
        onClick={handleClick}
      />
      <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
        <Paper sx={{ width: 180, maxWidth: '100%' }}>
          <MenuList>
            <MenuItem
              sx={{ height: 32 }}
              onClick={() => {
                navigate('/profile');
              }}
            >
              <img src="" alt="" className={classes.iconProfile} />
              <p className={classes.menuName}>Profile</p>
            </MenuItem>
            <MenuItem
              sx={{ height: 32 }}
              onClick={() => {
                navigate('/post');
              }}
            >
              <img src="" alt="" className={classes.iconJourney} />
              <p className={classes.menuName}>New Journey</p>
            </MenuItem>
            <MenuItem
              sx={{ height: 32 }}
              onClick={() => {
                navigate('/bookmark');
              }}
            >
              <img src="" alt="" className={classes.iconBookmark} />
              <p className={classes.menuName}>Bookmark</p>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ height: 32 }} onClick={handleLogout}>
              <img src="" alt="" className={classes.iconLogout} />
              <p className={classes.menuName}>Logout</p>
            </MenuItem>
          </MenuList>
        </Paper>
      </Menu>
    </>
  );
};

export default AvatarMenu;
