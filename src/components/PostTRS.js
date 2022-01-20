import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { likedNews, unlikedNews } from 'redux/newsSlice';
import {
  selectors as authSelector,
  updateLikedArray,
  updateUnlikedArray,
} from 'redux/authSlice';
import { setAuthCardState, setLikedIdState } from 'redux/uiSlice';
import { selectors as uiSelector } from 'redux/uiSlice';
import LightUpVote from 'images/objects/light-icons/upvote-u.svg';
import LightDownVote from 'images/objects/light-icons/downvote-u.svg';
import DarkUpVote from 'images/objects/dark-icons/upvote-u.svg';
import DarkDownVote from 'images/objects/dark-icons/downvote-u.svg';
import LightShare from 'images/objects/light-icons/share-button.svg';
import DarkShare from 'images/objects/dark-icons/share.svg';
import LikedPost from 'images/objects/light-icons/upote-f.svg';
import UnlikedPost from 'images/objects/light-icons/downvote-f.svg';

const PostTRS = ({
  newsTags,
  id,
  url,
  liked,
  unliked,
  setUpdateReact,
  currentIndex = 0,
  setReactUpdate,
}) => {
  const dispatch = useDispatch();

  const { auth } = useSelector(authSelector.getAuth);
  const { liked: likedCheck, unliked: unlikedCheck } = useSelector(
    authSelector.getLikedUnliked(id)
  );
  const { theme } = useSelector(uiSelector.getTheme);

  const handleLiked = () => {
    if (auth) {
      if (currentIndex === 0) {
        dispatch(likedNews({ id }));
        dispatch(setLikedIdState(id));
        dispatch(updateLikedArray(id));
      } else {
        dispatch(likedNews({ id })).then(({ payload }) => {
          const { status, data, id } = payload;
          console.log(data);
          if (status === 201 || status === 208) {
            setReactUpdate({ data, id });
            console.log('this is liked array');
          }
          if (status === 201) {
            console.log('this is liked array');
            dispatch(updateLikedArray(id));
          }
        });
      }
    } else if (!auth) {
      dispatch(setAuthCardState(true));
    }
  };

  const handleUnliked = () => {
    if (auth) {
      if (currentIndex === 0) {
        dispatch(unlikedNews({ id }));
        dispatch(updateUnlikedArray(id));
      } else {
        dispatch(unlikedNews({ id })).then(({ payload }) => {
          const { status, data, id } = payload;
          if (status === 201 || status === 208) {
            setReactUpdate({ data, id });
          }
          if (status === 201) {
            dispatch(updateUnlikedArray(id));
          }
        });
      }
    } else if (!auth) {
      dispatch(setAuthCardState(true));
    }
  };

  return (
    <div className='d-flex justify-content-between'>
      <div
        className='col-7'
        style={{
          width: '200px',
          height: '32px',
          flexWrap: 'wrap',
          padding: '0',
        }}
      >
        {newsTags.map((tag) => (
          <TagItemContainer key={tag}>
            <TagItem to={`/search?q=${tag}`}>
              {tag.length > 12 ? <>{tag.substr(0, 12)}..</> : tag}
            </TagItem>
          </TagItemContainer>
        ))}
      </div>
      <div
        className='col-4 d-flex justify-content-between'
        style={{ padding: '0' }}
      >
        <Reactions>
          <img
            className='up-vote'
            onClick={handleLiked}
            src={
              likedCheck
                ? LikedPost
                : theme === 'light'
                ? LightUpVote
                : DarkUpVote
            }
            alt='Up Vote'
          ></img>
          <span>{liked + unliked}</span>
        </Reactions>
        <ShareButton>
          <img
            src={theme === 'light' ? LightShare : DarkShare}
            alt='share'
          ></img>
        </ShareButton>
      </div>
    </div>
  );
};
const TagItemContainer = styled.div`
  margin-right: 7px;
  margin-bottom: 20px;
  display: inline-block !important;
`;
const TagItem = styled(Link)`
  cursor: pointer;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.TagText} !important;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 10px !important;
  line-height: 16px !important;
  box-shadow: ${({ theme }) => theme.secondaryShadow};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  z-index: 10;
`;

const NewsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding-left: 7px;
  padding-right: 7px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  box-shadow: ${({ theme }) => theme.secondaryShadow};
`;

// const SmileButton = styled(NewsButton)`
//   margin-left: auto;
//   float: left;

// `;

// const SadButton = styled(NewsButton)`
//   margin-left: 2%;
//   float: right;
//   span {
//     margin-left: 5px;
//     font-size: 13px;
//   }
// `;

const Reactions = styled(NewsButton)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  text-align: center;

  .up-vote {
    float: left;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.likeUnlikeColor};
  }

  .down-vote {
    float: right;
  }

  img {
    cursor: pointer;
    width: 18px;
  }
`;

const ShareButton = styled(NewsButton)`
  margin-left: 7px;
  border-radius: 50%;
  width: 32px;
`;

export default PostTRS;
