import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import BigCardPost from 'components/SinglePost/BigCard';
import MediumPostCard from 'components/SinglePost/MediumCard';
import SliderCard from 'components/SliderCard';
import AuthCard from 'components/AuthCard';
import Loader from 'components/Loader';
import { getFeedNews, selectors as newsSelector } from 'redux/newsSlice';
import { selectors as authSelector } from 'redux/authSlice';
import styled from 'styled-components';

const Feed = () => {
  const dispatch = useDispatch();
  const [showAuthCard, setShowAuthCard] = useState(false);
  const {
    news: { items, next },
  } = useSelector(newsSelector.getNews);
  const { auth } = useSelector(authSelector.getAuth);
  const gridNews = useSelector(newsSelector.getNewsGrid);

  const fetchMoreData = useCallback(() => {
    dispatch(getFeedNews(next));
  }, [dispatch, next]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (!auth && items.length >= 2) {
      setShowAuthCard(true);
    }
  }, [auth, items.length]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <FeedWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        scrollThreshold={0.8}
        loader={<Loader />}
        style={{ overflow: 'visible' }}
      >
        {gridNews.map((data, index) => {
          if (data.type === 'bigcard') {
            return <BigCardPost post={data.news[0]} key={index} />;
          } else if (data.type === 'mediumcard') {
            return <MediumPostCard post={data.news[0]} key={index} />;
          } else if (data.type === 'slidercard') {
            return <SliderCard post={data.news} key={index} />;
          } else return null;
        })}
      </InfiniteScroll>
      {showAuthCard && <AuthCard />}
    </FeedWrapper>
  );
};

const FeedWrapper = styled.div`
  padding: 50px 10px 0;
  transition: 0.75s ease;

  h5 {
    margin-top: 20px;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -1px;
  }
`;

export default Feed;
