import { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import 'react-slidedown/lib/slidedown.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getNewsByTag,
  getPopularTopics,
  selectors as newsSelector,
} from 'redux/newsSlice';
import SearchInputBox from 'components/search/SearchInputBox';
import CloseButton from 'components/search/CloseButton';
import TopicsItem from 'components/search/TopicsItem';
import NewsCardList from 'components/NewsCardList';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const queries = useQuery();
  const query = queries.get('q');

  const { items: popKeywords } = useSelector(newsSelector.getPopularTopics);
  const {
    newsbytag: { items: newsData, next: nextUrl },
  } = useSelector(newsSelector.getNews);

  const [topics, setTopics] = useState([]);
  const [tagInputValue, setInputTags] = useState(query || '');
  const [searchWord, setSearchWord] = useState(query || '');

  const fetchMoreData = useCallback(
    async (tag, nextUrl) => {
      dispatch(getNewsByTag({ tag, nextUrl }));
    },
    [dispatch]
  );

  const handleTagSelect = useCallback(
    (tag) => {
      setInputTags(tag);
      setSearchWord(tag);
      fetchMoreData(tag, '');
    },
    [fetchMoreData]
  );

  const handleConfirmClick = useCallback(
    (key) => {
      if (!key) return;
      console.log(key);
      handleTagSelect(key);
    },
    [handleTagSelect]
  );

  const handleSearchChange = useCallback(
    (key) => {
      setInputTags(key);
      const lowerKey = key.toLowerCase();
      setTopics(
        popKeywords.filter((item) => {
          const res = ('' + item).toLowerCase().startsWith(lowerKey);
          return res;
        })
      );
      setSearchWord('');
    },
    [popKeywords]
  );

  useEffect(() => {
    dispatch(getPopularTopics());
  }, [dispatch]);

  useEffect(() => {
    setTopics(popKeywords);
  }, [popKeywords]);

  useEffect(() => {
    if (query) {
      handleTagSelect(query);
    }
  }, [query, handleTagSelect]);

  return (
    <SearchPage>
      <SearchPageHeader>
        <SearchInputBox
          onChange={handleSearchChange}
          onConfirm={handleConfirmClick}
          value={tagInputValue}
        />
        <CloseButton onClick={history.goBack} />
      </SearchPageHeader>
      <SearchPageContent>
        {/* popular keyword */}
        {!searchWord && (
          <PopularTopicWrapper>
            <h3>Popular Topics ({topics && topics.length})</h3>
            <TopicsItemsWrapper>
              {topics.map((tag) => (
                <TopicsItem
                  key={tag}
                  topic={tag}
                  onClick={() => handleTagSelect(tag)}
                />
              ))}
            </TopicsItemsWrapper>
          </PopularTopicWrapper>
        )}
        {searchWord && (
          <NewsCardList
            newsData={newsData}
            onFetchMore={() => fetchMoreData(searchWord, nextUrl)}
            keyword={searchWord}
          />
        )}
      </SearchPageContent>
    </SearchPage>
  );
};

const SearchPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const SearchPageContent = styled.div``;
const SearchPage = styled.div`
  padding: 10px 0;
  input {
    color: ${({ theme }) => theme.primaryText};
  }
  color: ${({ theme }) => theme.primaryText};
  p {
    color: ${({ theme }) => theme.tertiaryText};
  }
  h3 {
    padding-top: 30px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.primaryText};
  }
  .popular-topics {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    background: ${({ theme }) => theme.secondaryBackground};
    box-shadow: ${({ theme }) => theme.secondaryShadow};
    margin: 5px 0px;
    margin-right: 5px;
  }
`;

const TopicsItemsWrapper = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 0px;
  display: flex;
  flex-wrap: wrap;
`;

const PopularTopicWrapper = styled.div`
  padding: 0 10px;
`;

export default Search;
