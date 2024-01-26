import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PostCard from '@components/PostCard';
import { connect, useDispatch } from 'react-redux';
import classes from './style.module.scss';
import { selectBookmark } from './selectors';
import { getBookmark } from './actions';

const Bookmark = ({ bookmarks }) => {
  const dispatch = useDispatch();
  console.log(bookmarks);

  useEffect(() => {
    dispatch(getBookmark());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <p className={classes.title}>Bookmark</p>

      <Box className={classes.postSection}>
        <Grid container spacing={3}>
          {bookmarks?.map((post, index) => (
            <Grid item xs={6} md={4} lg={3} key={index}>
              <PostCard post={post?.postBookmarks} isDelete />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  bookmarks: selectBookmark,
});

export default connect(mapStateToProps)(Bookmark);
