import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getLogout } from 'redux/authSlice';
import SettingHeader from 'components/SettingHeader';

import SettgingSection from 'components/SettingSection';

const linkArr = [
  { name: 'Change Name', link: '/profile/settings/name' },
  { name: 'Change e-mail', link: '/profile/settings/email' },
  { name: 'Change password', link: '/profile/settings/password' },
];

const headStyle = { paddingTop: '50px' };
const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(getLogout());
  };
  return (
    <SettingPageStyle>
      <SettingHeader title='Profile Settings' address='/profile' />

      <div className='profile-settings' style={headStyle}>
        <div style={{ position: 'relative', height: 'calc(100vh - 80px)' }}>
          <div
            style={{
              marginTop: '15px',
              color: '#505060',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '16px',
            }}
          >
            {linkArr.map((arr, i) => (
              <SettgingSection key={i} name={arr.name} link={arr.link} />
            ))}
          </div>
          <FooterButton onClick={handleLogout}>Sign Out</FooterButton>
        </div>
      </div>
    </SettingPageStyle>
  );
};

const SettingPageStyle = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.backgroundImage};
  input {
    background-color: ${({ theme }) => theme.primaryBackground};
    box-shadow: ${({ theme }) => theme.interestBoxshadow};
  }
  label {
    color: ${({ theme }) => theme.primaryText};
  }
`;

const FooterButton = styled.div`
  position: absolute;
  bottom: 50px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  text-align: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding: 12px 0;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.signoutText};
  box-shadow: 0px 15px 41px rgba(116, 144, 181, 0.15);
  border-radius: 8px;

  .profile-settings {
    background-color: ${({ theme }) => theme.backgroundImage};
  }
`;

export default Profile;
