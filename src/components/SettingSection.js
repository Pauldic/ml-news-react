import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SettingSection = ({ name, link }) => {
  return (
    <SettingSectionStyle to={link}>
      <p>{name}</p>
      <i className='fas fa-chevron-right' />
    </SettingSectionStyle>
  );
};

const SettingSectionStyle = styled(Link)`
  box-shadow: 0px 20px 41px rgba(116, 144, 181, 0.1);
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.settingsText};
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  cursor: pointer;
  justify-content: space-between;
  padding: 25px 15px;
  margin: 8px 0px;
  align-items: center;
  border-radius: 8px;

  p {
    margin: 0;
  }
`;

export default SettingSection;
