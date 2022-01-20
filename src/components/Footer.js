import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectors as uiSelector } from "redux/uiSlice";
import { selectors as authSelector } from "redux/authSlice";
import styled from "styled-components";
import { setLikedIdState, setAuthCardState } from "redux/uiSlice";
import LightHomeIcon from "images/objects/light-icons/light-nav-bar/group-1537.svg";
import LightTrendingIcon from "images/objects/light-icons/light-nav-bar/vector.svg";
import LightUserIcon from "images/objects/light-icons/light-nav-bar/group-1539.svg";
import LightHomeIconActive from "images/objects/light-icons/light-nav-bar/group-1542.svg";
import LightTrendingIconActive from "images/objects/light-icons/light-nav-bar/vector-1.svg";
import LightUserIconActive from "images/objects/light-icons/light-nav-bar/group-1540.svg";

import DarkHomeIcon from "images/objects/dark-icons/dark-nav-bar/group-1546.svg";
import DarkTrendingIcon from "images/objects/dark-icons/dark-nav-bar/vector.svg";
import DarkUserIcon from "images/objects/dark-icons/dark-nav-bar/group-1547.svg";
import DarkHomeIconActive from "images/objects/dark-icons/dark-nav-bar/group-1545.svg";
import DarkTrendingIconActive from "images/objects/dark-icons/dark-nav-bar/vector-1.svg";
import DarkUserIconActive from "images/objects/dark-icons/dark-nav-bar/group-1544.svg";

import LightAddIconActive from "images/objects/light-icons/light-add-icon-active.svg";
import DarkAddIconActive from "images/objects/dark-icons/dark-add-icon-active.svg";
import AddIconInactive from "images/objects/add-icon-inactive.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const { theme } = useSelector(uiSelector.getTheme);

  const navLinkArr = [
    {
      link: "/",
      icon: {
        activeIcon:
          theme === "light" ? LightHomeIconActive : DarkHomeIconActive,
        inactiveIcon: theme === "light" ? LightHomeIcon : DarkHomeIcon,
      },
      style: { width: "23px", height: "23px" },
      auth: false,
    },
    {
      link: "/trending",
      icon: {
        activeIcon:
          theme === "light" ? LightTrendingIconActive : DarkTrendingIconActive,
        inactiveIcon: theme === "light" ? LightTrendingIcon : DarkTrendingIcon,
      },
      style: { width: "23px", height: "23px" },
      auth: false,
    },
    // {
    //   link: "/trending-videos",
    //   icon: { light: VideoIcon, dark: VideoIcon },
    //   style: { width: '23px', height: '23px' },
    //   auth: true,
    // },
    {
      link: "/upload",
      icon: {
        activeIcon: theme === "light" ? LightAddIconActive : DarkAddIconActive,
        inactiveIcon: AddIconInactive,
      },
      style: { width: "23px", height: "23px" },
      auth: false,
    },
    {
      link: "/profile",
      icon: {
        activeIcon:
          theme === "light" ? LightUserIconActive : DarkUserIconActive,
        inactiveIcon: theme === "light" ? LightUserIcon : DarkUserIcon,
      },
      style: { width: "23px", height: "23px" },
      auth: true,
    },
  ];

  const dispatch = useDispatch();

  const { auth } = useSelector(authSelector.getAuth);

  const handleLink = (navAuth) => {
    if (!auth && navAuth) {
      dispatch(setAuthCardState(true));
    }
  };

  return (
    <FooterStyle>
      {navLinkArr.map((navlink, index) => (
        <StyledNavLink
          onClick={() => handleLink(navlink.auth)}
          exact
          to={!auth && !navlink.link ? "/" : navlink.link}
          key={index}
        >
          <img
            style={navlink.style}
            src={
              navlink.link === pathname
                ? navlink.icon.activeIcon
                : navlink.icon.inactiveIcon
            }
            alt='nav-item'
          />
        </StyledNavLink>
      ))}
    </FooterStyle>
  );
};

export default Footer;

const StyledNavLink = styled(NavLink)`
  color: #6e6f70;
`;

const Phantom = styled.div`
  display: block;
  padding: 10px;
  height: 60px;
  width: 100%;
`;

const FooterStyle = styled.div`
  background-color: ${({ theme }) => theme.footerBackground};
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  color: rgb(255, 255, 255);
  box-shadow: ${({ theme }) => theme.footerShadow};
  text-align: center;
  padding: 5px;
  position: fixed;
  bottom: 0px;
  height: 42px;
  width: 100%;
  max-width: 480px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
