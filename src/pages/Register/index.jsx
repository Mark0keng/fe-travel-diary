import { Box, FormLabel, TextField } from '@mui/material';
import { useState } from 'react';
import { encryptPayload } from '@utils/encryptPayload';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './style.module.scss';
import { register } from './actions';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      dispatch(
        register(
          {
            fullname: encryptPayload(fullname),
            email: encryptPayload(email),
            password: encryptPayload(password),
          },
          () => {
            navigate('/login');
          }
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.cardRegister} width={{ xs: '70vw', sm: '60vw', md: '50vw', lg: '40vw', xl: '30vw' }}>
        <h2>Register</h2>

        <FormLabel style={{ display: 'block' }}>Full Name</FormLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />

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
          id="outlined-basic"
          variant="outlined"
          size="small"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="button" className={classes.registerBtn} onClick={handleSubmit}>
          Register
        </button>
      </Box>
    </Box>
  );
};

export default Register;
