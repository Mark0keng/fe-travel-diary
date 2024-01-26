import PropTypes from 'prop-types';
import { Avatar, Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PostCard from '@components/PostCard';
import classes from './style.module.scss';
import { getMyPost, getProfile } from './actions';
import { selectMyPost, selectProfile } from './selectors';

const Profile = ({ profile, myPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getMyPost());
  }, []);

  useEffect(() => {});
  return (
    <div className={classes.container}>
      <p className={classes.title}>Profile</p>

      <div className={classes.profileBox}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 200, height: 200, margin: '0px auto' }}
        />
        <p className={classes.name}>{profile?.fullname}</p>
        <p className={classes.email}>{profile?.email}</p>
        <button
          type="button"
          className={classes.addBtn}
          onClick={() => {
            navigate('/post');
          }}
        >
          Add New Post
        </button>
      </div>
      <Box className={classes.postSection}>
        <Grid container spacing={3}>
          {myPost?.map((post, index) => (
            <Grid item xs={3}>
              <PostCard key={index} post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
  myPost: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
  myPost: selectMyPost,
});

export default connect(mapStateToProps)(Profile);
