/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from './actions';
import classes from './style.module.scss';

const Post = () => {
  const [thumbnail, setThumbnail] = useState('');
  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [desc, setDesc] = useState('');
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (desc.length < 300) setShortDesc(desc);
  }, [desc]);

  const handleSubmit = () => {
    const dataPost = {
      imageUrl: thumbnail,
      title,
      shortDesc,
      description: desc,
    };
    dispatch(
      createPost(dataPost, () => {
        navigate('/');
      })
    );
  };

  const handleThumbnail = (event) => {
    const image = event.target.files[0];
    setThumbnail(image);
    const imageUrl = URL.createObjectURL(image);
    setPreview(imageUrl);
  };

  return (
    <div className={classes.container}>
      <p className={classes.title}>New Journey</p>

      <div className={classes.content}>
        {thumbnail ? (
          <div className={classes.previewBox}>
            <img src={preview} alt="" className={classes.preview} />
            <input type="file" onChange={handleThumbnail} />
          </div>
        ) : (
          <div className={classes.thumbContainer}>
            <input type="file" onChange={handleThumbnail} />
          </div>
        )}

        <div>
          <label htmlFor="title" className={classes.label}>
            Title
          </label>
          <input
            type="text"
            className={classes.field}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="title" className={classes.label}>
            Short Description
          </label>
          <div dangerouslySetInnerHTML={{ __html: shortDesc }} className={classes.shortDesc} />
        </div>
        <div>
          <label htmlFor="title" className={classes.label}>
            Description
          </label>
          <ReactQuill value={desc} onChange={setDesc} style={{ height: 200 }} />
        </div>
      </div>
      <div className={classes.submitSection}>
        <button type="button" className={classes.submit} onClick={handleSubmit}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
