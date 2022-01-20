import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedNews, selectors as newsSelector } from 'redux/newsSlice';

const useSimilarArticle = () => {
  const dispatch = useDispatch();
  const {
    relatednews: { items: articles },
  } = useSelector(newsSelector.getNews);

  const getSimilarArticle = useCallback(
    (id) => {
      const newArticle = articles.find((news) => news.id === id);
      return newArticle && newArticle.datas?.length > 0
        ? newArticle.datas[0]
        : null;
    },
    [articles]
  );

  const fetchSimilarArticle = useCallback(
    (id, ids) => {
      const similar = getSimilarArticle(id);
      if (!similar) {
        dispatch(getRelatedNews({ id, history: ids }));
      }
    },
    [dispatch, getSimilarArticle]
  );

  return [articles, fetchSimilarArticle, getSimilarArticle];
};

export default useSimilarArticle;
