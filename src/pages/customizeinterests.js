import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import SettingHeader from "components/SettingHeader";
import {
  updateUserInterests,
  moreTopics,
  getInterests,
  selectors as userSelector,
} from "redux/userSlice";
import Logo from "images/LOGO/logo.svg";

const ChangeEmail = () => {
  const dispatch = useDispatch();
  const { following, suggest } = useSelector(userSelector.getInterests);

  useEffect(() => {
    dispatch(getInterests());
  }, [dispatch]);

  useEffect(() => {
    dispatch(moreTopics());
  }, [dispatch]);

  const handleUnfollow = (index) => {
    const interest = following[index];
    dispatch(
      updateUserInterests({
        data: { remove_user_interests: [interest] },
        name: interest,
        actiontype: "remove",
      })
    );
  };
  const handleFollow = (index) => {
    const interest = suggest[index];
    dispatch(
      updateUserInterests({
        data: { add_user_interests: [interest] },
        name: interest,
        actiontype: "add",
      })
    );
  };

  return (
    <SettingPageStyle>
      <SettingHeader title='Customize interests' />
      <div style={{ marginTop: "15px" }}>
        <SectionTitle>Following</SectionTitle>
        <div className='list-group'>
          {following.length === 0 ? (
            <NoFollowing>
              You don't follow any Topic. Please follow your favorite Topic to
              read your favorite news.
            </NoFollowing>
          ) : (
            <form>
              {following.map((interest, index) => (
                <ItemStyle key={index}>
                  <ItemLabel className='list-group-item'>
                    <ItemFlex>
                      <ItemFlexImg>
                        <img src={Logo} alt={interest} />
                      </ItemFlexImg>
                      <ItemFlexText>
                        <h6 title={interest}>
                          {interest.length > 20 ? (
                            <>{interest.substr(0, 20)}..</>
                          ) : (
                            interest
                          )}
                        </h6>
                        {/* <p>51 article</p> */}
                      </ItemFlexText>
                      <ItemFlexInput>
                        <input
                          onChange={() => handleUnfollow(index)}
                          name={interest}
                          type='checkbox'
                          checked={true}
                        />
                      </ItemFlexInput>
                    </ItemFlex>
                  </ItemLabel>
                </ItemStyle>
              ))}
            </form>
          )}
        </div>
        <SectionTitle>More topics</SectionTitle>
        <div className='list-group'>
          <form>
            {suggest.map((interest, index) => (
              <ItemStyle key={index}>
                <ItemLabel className='list-group-item'>
                  <ItemFlex>
                    <ItemFlexImg>
                      <img src={Logo} alt={interest} />
                    </ItemFlexImg>
                    <ItemFlexText>
                      <h6 title={interest}>
                        {interest.length > 20 ? (
                          <>{interest.substr(0, 20)}..</>
                        ) : (
                          interest
                        )}
                      </h6>
                      {/* <p>51 article</p> */}
                    </ItemFlexText>
                    <ItemFlexInput>
                      <input
                        onChange={() => handleFollow(index)}
                        name={interest}
                        type='checkbox'
                        checked={false}
                      />
                    </ItemFlexInput>
                  </ItemFlex>
                </ItemLabel>
              </ItemStyle>
            ))}
          </form>
        </div>
      </div>
    </SettingPageStyle>
  );
};

const SettingPageStyle = styled.div`
  background-color: ${({ theme }) => theme.backgroundImage};
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
`;

const SectionTitle = styled.h4`
  margin-top: 5px;
  font-weight: 500;
`;

const ItemStyle = styled.div`
  border-radius: 8px !important;
  padding: 0;
  background-color: ${({ theme }) => theme.primaryBackground};
`;

const ItemLabel = styled.label`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryBackground};
  box-shadow: ${({ theme }) => theme.interestsBoxShadow};
  padding: 10px;
  cursor: pointer;
  user-select: none;
`;

const ItemFlex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ItemFlexImg = styled.div`
  width: 22%;

  img {
    border-radius: 8px;
    height: 55px;
    width: 55px;
    object-fit: cover;
  }
`;

const ItemFlexText = styled.div`
  width: 75%;
  h6 {
    padding: 0;
    margin: 0;
    font-weight: bolder;
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 13px;
    color: gray;
  }
`;

const ItemFlexInput = styled.div`
  width: 12%;
  margin-top: 8px;

  input {
    transition-duration: 0.3s;
    background-color: red;
  }

  input[type="checkbox"] {
    zoom: 2;
  }
`;

const NoFollowing = styled.p`
  text-align: center;
  font-size: 13px;
  margin: 20px auto;
  color: gray;
`;

export default ChangeEmail;
