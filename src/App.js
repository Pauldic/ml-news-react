import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  getCurrentUser,
  getCurrentProfile,
  selectors as authSelector,
} from 'redux/authSlice';
import Layout from 'layouts';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  const dispatch = useDispatch();
  const [fetchUser, setFetchUser] = useState(false);
  const [fetchProfile, setFetchProfile] = useState(false);
  const { token, auth } = useSelector(authSelector.getAuth);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
    setFetchUser(true);
  }, [dispatch, token]);

  useEffect(() => {
    if (token && auth) {
      dispatch(getCurrentProfile());
    }
    setFetchProfile(true);
  }, [auth, dispatch, token]);

  return (
    <>
      <Router>{fetchProfile && fetchUser && <Layout />}</Router>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
