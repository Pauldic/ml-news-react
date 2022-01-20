import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CommonHeader from './shared/CommonHeader';

const SettingHeader = ({ address, icon = 'fas fa-chevron-left', title }) => {
  return (
    <CommonHeader
      left={{ address, iconClass: icon }}
      title={title}
      right={null}
    />
  );
};

export default SettingHeader;
