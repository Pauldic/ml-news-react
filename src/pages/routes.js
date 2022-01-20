import SignIn from 'pages/signin';
import SignUp from 'pages/signup';
import Profile from 'pages/profile/profile';
import Feed from 'pages/feed';
import Trending from 'pages/trending';
import Upload from 'pages/upload';
import VideoTrending from 'pages/videotrend';
import CreateProfile from 'pages/createprofile';
import CustomizeInterests from 'pages/customizeinterests';
import ProfileSetting from 'pages/profile/profilesetting';
import ProfileChangeName from 'pages/profile/changename';
import ProfileChangeEmail from 'pages/profile/changeemail';
import ProfileChangePassword from 'pages/profile/changepassword';
import Search from 'pages/search';
import TagSearch from 'pages/searchbytag';
import MyPosts from 'pages/mypost';
import Settings from 'images/account-settings/settings.svg';

export const Pages = [
  {
    exact: true,
    name: 'Feed',
    path: '/',
    component: Feed,
    auth: false,
    layout: true,
    meta: {
      text: 'Home Feed',
      link: '/search',
    },
    header: true,
  },
  {
    exact: true,
    name: 'Signin',
    path: '/signin',
    component: SignIn,
    auth: false,
    layout: false,
  },
  {
    exact: true,
    name: 'Signup',
    path: '/signup',
    component: SignUp,
    auth: false,
    layout: false,
  },
  {
    exact: true,
    name: 'Create Profile',
    path: '/create-profile',
    component: CreateProfile,
    auth: false,
    layout: false,
  },
  {
    exact: true,
    name: 'Profile',
    path: '/profile',
    component: Profile,
    auth: true,
    layout: true,
    meta: {
      text: 'My Profile',
      link: 'profile/settings',
      icon: Settings,
      showSearch: false,
    },
    header: true,
  },
  {
    exact: true,
    name: 'user-posts',
    path: '/profile/user-posts',
    component: MyPosts,
    auth: true,
    layout: false,
  },
  {
    exact: true,
    name: 'Search',
    path: '/search',
    component: Search,
    auth: false,
    layout: true,
    header: false,
  },
  {
    exact: true,
    name: 'Tag Search',
    path: '/tag',
    component: TagSearch,
    auth: false,
    layout: true,
    header: false,
  },
  {
    exact: true,
    name: 'Trending',
    path: '/trending',
    component: Trending,
    auth: false,
    layout: true,
    meta: {
      text: 'Trending',
      link: '/search',
    },
    header: true,
  },
  {
    exact: true,
    name: 'Upload',
    path: '/upload',
    component: Upload,
    auth: false,
    layout: true,
    meta: {
      text: 'Create',
      link: '/search',
    },
    header: true,
  },
  {
    exact: true,
    name: 'Trending Videos',
    path: '/trending-videos',
    component: VideoTrending,
    auth: false,
    layout: true,
    header: true,
  },
  {
    exact: true,
    name: 'Customize interests',
    path: '/customize-interests',
    component: CustomizeInterests,
    auth: true,
    layout: false,
  },
  {
    exact: true,
    name: 'Profile Settings',
    path: '/profile/settings',
    component: ProfileSetting,
    auth: true,
    layout: false,
  },
  {
    exact: true,
    name: 'Profile Name Change',
    path: '/profile/settings/name',
    component: ProfileChangeName,
    auth: true,
    layout: false,
  },
  {
    exact: true,
    name: 'Profile Email Change',
    path: '/profile/settings/email',
    component: ProfileChangeEmail,
    auth: true,
    layout: false,
  },
  {
    exact: true,
    name: 'Profile Password Change',
    path: '/profile/settings/password',
    component: ProfileChangePassword,
    auth: true,
    layout: false,
  },
];
