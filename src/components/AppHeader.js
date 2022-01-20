import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectors as uiSelector } from 'redux/uiSlice';
import Logo from 'images/LOGO/logo.svg';
import SearchIconWhite from 'images/junggl-icons-homepage/search/search-icon-white.svg';
import SearchIconGray from 'images/junggl-icons-homepage/search/search-icon-gray.svg';
import CommonHeader from 'components/shared/CommonHeader';

const AppHeader = ({
  meta: {
    logoSrc = Logo,
    text,
    link = '/',
    icon = SearchIconWhite,
    showSearch,
  },
}) => {
  const { theme } = useSelector(uiSelector.getTheme);
  return (
    <CommonHeader
      left={{ address: '/', iconSrc: logoSrc }}
      right={{
        address: link,
        iconSrc: showSearch
          ? theme === 'light'
            ? SearchIconWhite
            : SearchIconGray
          : icon,
      }}
      title={text}
    />
  );
};

export default AppHeader;
