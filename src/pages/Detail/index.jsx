import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import classes from './style.module.scss';
import { selectDetailPost } from './selectors';
import { getDetailPost } from './actions';

const Detail = ({ post }) => {
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailPost(postId));
  }, [dispatch]);

  // const currentPost = useSelector((state) => state.detailReducer?.detailPost);
  console.log(post);

  return (
    <div className={classes.container}>
      <p className={classes.title}>Bersemayam di tanah Dewata</p>
      <p className={classes.date}>17 October 2020</p>

      <div className={classes.thumbnailBox}>
        <img srcSet={post?.imageUrl} alt="thumbnail" className={classes.thumbnail} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: post?.desc }} className={classes.desc} />
    </div>
  );
};

Detail.propTypes = {
  post: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  post: selectDetailPost,
});

export default connect(mapStateToProps)(Detail);
