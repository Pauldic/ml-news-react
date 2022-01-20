import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedNews, selectors as newsSelector } from 'redux/newsSlice';
import { selectors as authSelector } from 'redux/authSlice';

const useSimilar = (id, showSimilar) => {
  const dispatch = useDispatch();
  const [similar, setSimilar] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);

  const { auth } = useSelector(authSelector.getAuth);
  const authSimilar = useSelector(newsSelector.authSimilar(id));
  const guestSimilar = useSelector(newsSelector.guestSimilar(id));

  useEffect(() => {
    if (auth && !authSimilar.length && showSimilar) {
      dispatch(getRelatedNews({ id })).then(({ payload }) => {
        if (payload.status === 200) {
          setFetchDone(true);
        }
      });
    }
  }, [auth, dispatch, id, showSimilar]);

  useEffect(() => {
    if (auth) {
      setSimilar(authSimilar);
    } else {
      setSimilar(guestSimilar);
    }
  }, [auth, showSimilar, fetchDone]);

  return { similar, done: fetchDone };
};

export default useSimilar;
