import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Box, Grid, Toolbar } from '@mui/material';
import PostCard from '@components/PostCard';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { selectLogin } from '@containers/Client/selectors';
import Navbar from '@components/Navbar';
import classes from './style.module.scss';
import { getPost } from './actions';
import { selectPost } from './selectors';

const Home = ({ login, posts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(posts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handleSearch = (dataSearch) => {
    const finalRes = posts?.reduce((result, item) => {
      if (item?.title.toLowerCase().includes(dataSearch.toLowerCase())) {
        result.push(item);
      }
      return result;
    }, []);
    setData(finalRes);
  };

  return (
    <div>
      {login ? (
        <Navbar />
      ) : (
        <Box className={classes.jumbotron}>
          <Box className={classes.navbar}>
            <Toolbar>
              <img src="" alt="" className={classes.iconNav} />
            </Toolbar>
            <Box>
              <button
                type="button"
                className={classes.login}
                onClick={() => {
                  navigate('/login');
                }}
              >
                Login
              </button>
              <button
                type="button"
                className={classes.register}
                onClick={() => {
                  navigate('/register');
                }}
              >
                Register
              </button>
            </Box>
          </Box>

          <Box className={classes.header}>
            <p className={classes.title}>The Journey you ever dreamed of.</p>
            <p className={classes.subtitle}>
              We made a tool so you can easily keep & share your travel memories. But there is a lot more
            </p>
          </Box>
        </Box>
      )}
      <Box className={classes.searchSection}>
        <h2>Journey</h2>
        <Box className={classes.searchBox}>
          <input
            type="text"
            className={classes.search}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            type="button"
            className={classes.searchBtn}
            onClick={() => {
              handleSearch(search);
            }}
          >
            Search
          </button>
        </Box>
      </Box>

      <Box className={classes.postSection}>
        <Grid container spacing={3}>
          {data?.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

Home.propTypes = {
  login: PropTypes.any,
  posts: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
  posts: selectPost,
});

export default connect(mapStateToProps)(Home);
