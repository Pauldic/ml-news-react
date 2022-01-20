import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from 'components/Footer';
import { getUserPosts, selectors as newsSelector } from 'redux/newsSlice';
import styled from 'styled-components';
import SettingHeader from 'components/SettingHeader';
import { useScrollToUp } from 'hooks/useScrolldown';

import NewsCardList from 'components/NewsCardList';

const MyPosts = () => {
  const dispatch = useDispatch();

  const {
    userPosts: { items, next, count },
  } = useSelector(newsSelector.getPosts);

  useScrollToUp();

  const fetchMoreData = useCallback(async () => {
    dispatch(getUserPosts({ next }));
  }, [dispatch, next]);

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <PostsWrapper>
      <PostsContainer>
        <SettingHeader title='My Posts' address='/profile' />
        <PostsContent>
          <NewsCardList newsData={items} onFetchMore={fetchMoreData} />;
        </PostsContent>
      </PostsContainer>
      <Footer />
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div``;
const PostsContainer = styled.div`
  transition: 0.75s ease;
`;
const PostsContent = styled.div`
  padding: 50px 0 0;
`;

export default MyPosts;
