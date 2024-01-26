import { Alert, Box, FormLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { encryptPayload } from '@utils/encryptPayload';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import { login } from './actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      const dataUser = {
        email: encryptPayload(email),
        password: encryptPayload(password),
      };
      dispatch(
        login(dataUser, () => {
          navigate('/');
        })
      );
    } catch (err) {
      console.log(error);
      setError(err.response.data.message);
    }
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.cardRegister} width={{ xs: '70vw', sm: '60vw', md: '50vw', lg: '40vw', xl: '30vw' }}>
        <h2>Login</h2>
        {error && <Alert severity="error">{error}</Alert>}
        <FormLabel style={{ display: 'block' }}>Email</FormLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel style={{ display: 'block' }}>Password</FormLabel>
        <TextField
          type="password"
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="button" className={classes.registerBtn} onClick={handleSubmit}>
          Login
        </button>
        <Box gap={5}>
          <span className={classes.noAccount}>Dont Have Account? Click</span>{' '}
          <span
            className={classes.linkRegister}
            onClick={() => {
              navigate('/register');
            }}
          >
            Here
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
