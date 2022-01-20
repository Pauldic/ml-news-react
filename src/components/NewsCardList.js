import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import BigCardPost from 'components/SinglePost/BigCard';
import MediumPostCard from 'components/SinglePost/MediumCard';
import Loader from 'components/Loader';

const NewsCardList = ({ newsData, onFetchMore, keyword }) => {
  return (
    newsData && (
      <NewsCardWrapper>
        <InfiniteScroll
          dataLength={newsData?.length || 0}
          next={onFetchMore}
          hasMore={true}
          loader={<Loader />}
        >
          {newsData &&
            newsData.map((news, index) => {
              switch (index % 5) {
                case 0:
                case 2:
                  return (
                    <BigCardPost post={news} key={index} keyword={keyword} />
                  );
                default:
                  return (
                    <MediumPostCard post={news} key={index} keyword={keyword} />
                  );
              }
            })}
        </InfiniteScroll>
      </NewsCardWrapper>
    )
  );
};

const NewsCardWrapper = styled.div`
  padding: 10px 8px 0;
  transition: 0.75s ease;

  h5 {
    margin-top: 20px;
  }

  h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -1px;
  }
`;

export default NewsCardList;
