import { setLogin, setToken } from '@containers/Client/actions';
import React from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
  };
  return (
    <div>
      <h3>App</h3>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default App;
