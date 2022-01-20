import { useSelector } from 'react-redux';
import SettingSection from 'components/SettingSection';
import DarkModeSelector from 'components/DarkModeSelector';
import styled from 'styled-components';
import { selectors as authSelector } from 'redux/authSlice';

const settingItems = [
  { name: 'My Posts', address: '/profile/user-posts' },
  { name: 'Customize Interests', address: '/customize-interests' },
  { name: 'Terms and Conditions', address: '/profile' },
];

const Profile = () => {
  const { userinfo, profileinfo } = useSelector(authSelector.getUserInfo);

  const { first_name, last_name } = profileinfo;

  return (
    <ProfileWrapper>
      <ProfileHeader>
        {profileinfo && `${first_name} ${last_name}`}
      </ProfileHeader>
      <ProfileSubHeader>{userinfo ? userinfo.email : null}</ProfileSubHeader>
      <ProfileContent>
        <DarkModeSelector />
        {settingItems.map((arr) => (
          <SettingSection
            key={arr.address}
            name={arr.name}
            link={arr.address}
          />
        ))}
      </ProfileContent>
    </ProfileWrapper>
  );
};
const ProfileHeader = styled.h3`
  padding-top: 10px;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.primaryText};
`;

const ProfileSubHeader = styled.h5`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.secondaryText};
`;

const ProfileContent = styled.div`
  margin-top: 15px;
`;

const ProfileWrapper = styled.div`
  padding: 50px 10px 0;
`;

export default Profile;
