import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingNews, selectors as newsSelector } from 'redux/newsSlice';
import NewsCardList from 'components/NewsCardList';
import styled from 'styled-components';

const Trending = () => {
  const dispatch = useDispatch();

  const {
    trending: { items, next },
  } = useSelector(newsSelector.getNews);

  const fetchMoreData = useCallback(async () => {
    dispatch(getTrendingNews(next));
  }, [dispatch, next]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <TrendingContainer>
      <NewsCardList newsData={items} onFetchMore={fetchMoreData} />
    </TrendingContainer>
  );
};

export default Trending;

const TrendingContainer = styled.div`
  padding-top: 60px;
`;
