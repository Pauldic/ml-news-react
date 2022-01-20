import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BigCardPost from 'components/SinglePost/BigCard';
import MediumCardPost from 'components/SinglePost/MediumCard';
import { getNewsByTag, selectors as newsSelector } from 'redux/newsSlice';
import SearchMagnifyer from 'images/junggl-icons-homepage/search/search-icon-white.svg';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  const searchquery = useLocation().search;
  const tag = new URLSearchParams(searchquery).get('q');

  useEffect(() => {
    if (tag) dispatch(getNewsByTag({ tag }));
  }, [dispatch, tag]);

  const {
    newsbytag: { items, loading },
  } = useSelector(newsSelector.getNews);

  return (
    <>
      <SearchByTag>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              height='30px'
              src={SearchMagnifyer}
              style={{ paddingRight: '3px' }}
              alt=''
            ></img>
            <input
              placeholder='Search'
              style={{
                width: '200px',
                fontSize: '23px',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
              }}
            />
          </div>
          <CloseButton>
            <span onClick={() => goBack()}>Close</span>
          </CloseButton>
        </div>

        {loading === 'idle' &&
          items.map((news, index) => {
            const arrMod = index % 6;
            if (arrMod === 0 || arrMod === 3 || arrMod === 5)
              return <MediumCardPost post={news} key={index} />;
            else if (arrMod === 1 || arrMod === 2 || arrMod === 4)
              return <BigCardPost post={news} key={index} />;
            return null;
          })}
      </SearchByTag>
    </>
  );
};

const CloseButton = styled.p`
  float: right;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgb(38, 109, 209);
  cursor: pointer;
  margin: 0;
  padding: 0;

  .cross-button {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    width: 24px;
    height: 25px;
    padding-left: 7px;
    padding-bottom: 3px;
    padding-right: 8px;
    padding-right: 8px;
    text-align: center;
    color: ${({ theme }) => theme.tertiaryText};
    background: ${({ theme }) => theme.cancelBackground};
    border-radius: 40px;
  }

  .verticle-line {
    width: 0px;
    padding-left: 5px;
    padding-right: 5px;
    height: 25px;
    color: ${({ theme }) => theme.verticalLine};
    font-weight: lighter;
  }
`;

const SearchByTag = styled.div`
  padding: 10px;
  input {
    color: ${({ theme }) => theme.primaryText};
  }
`;

export default SearchResults;
