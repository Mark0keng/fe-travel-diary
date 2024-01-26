/* eslint-disable react/prop-types */
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBookmark } from '@pages/Bookmark/actions';
import { createBookmark } from '@pages/Home/actions';
import classes from './style.module.scss';

const PostCard = ({ post, isDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookmark = (postId) => {
    const data = {
      postId: String(postId),
    };
    dispatch(createBookmark(data));
  };

  const handleDelete = (id) => {
    dispatch(deleteBookmark(String(id)));
  };

  return (
    <Box className={classes.card}>
      <div
        className={classes.bookmark}
        onClick={() => {
          isDelete ? handleDelete(post?.id) : handleBookmark(post?.id);
        }}
      >
        <img src="" alt="" className={classes.icon} />
      </div>
      <div className={classes.thumbnailBox}>
        <img src={post?.imageUrl} alt="" className={classes.thumbnail} />
      </div>

      <Box
        className={classes.textSection}
        onClick={() => {
          navigate(`/post/${post?.id}`);
        }}
      >
        <p className={classes.title}>{post?.title}</p>
        <p className={classes.date}>{post?.timestamp}</p>
        <div dangerouslySetInnerHTML={{ __html: post?.shortDesc }} className={classes.shortDesc} />
      </Box>
    </Box>
  );
};

export default PostCard;
