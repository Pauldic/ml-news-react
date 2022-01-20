import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


html {
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  font-family: 'DM Sans', sans-serif;
}
  body {
  background-color: ${({ theme }) => theme.body};
  font-family: 'DM Sans', sans-serif;
}


.Apps{
  max-width: 480px;
  margin: 0 auto;
  padding: 0;
  border: none;
  min-height: 100vh;
  background-image: ${({ theme }) => theme.backgroundImage};
  font-family: 'DM Sans', sans-serif;
  transition: all 0.50s linear;
  background-attachment: fixed;
  background-position: 0px 0px;
  background-repeat: repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}


a.my-anchor-css-class{
  margin-top:0px !important;
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
  display: block;
}

.line-breaker{
  display: block;
}

.content-css{
  padding-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryText};
  text-align: justify;
}

input[type=text]:focus {
  background-color: ${({ theme }) => theme.primaryBackground};
}

input[type=password]:focus {
  background-color: ${({ theme }) => theme.primaryBackground};
}

textarea:focus, input:focus{
  box-shadow: none;
}

input:checked + label {
  background-color: ${({ theme }) => theme.primaryBackground};
}

.form-control{
  color: ${({ theme }) => theme.settingsText};
}

.divider {								/* minor cosmetics */
  display: table; 
  font-size: 14px; 
  text-align: center; 
  width: 100%; 						/* divider width */
  margin: 1px auto;	
  margin-top: 40px;				/* spacing above/below */
}
.divider span { display: table-cell; position: relative; }
.divider span:first-child, .divider span:last-child {
  width: 50%;
  top: 11px;							/* adjust vertical align */
  -moz-background-size: 100% 1px; 	/* line width */
  background-size: 100% .5px; 			/* line width */
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
}
.divider span:first-child {				/* color changes in here */
  background-image: #CBD2E1;
  background-image: -webkit-linear-gradient(180deg, #6e6f70, #6e6f70);
  background-image: -moz-linear-gradient(180deg, #6e6f70,#6e6f70);
  background-image: -o-linear-gradient(180deg, #6e6f70, #6e6f70);
  background-image: linear-gradient(90deg, #CBD2E1, #CBD2E1);
}
.divider span:nth-child(2) {
  color: #6e6f70; padding: 0px 10px; width: auto; white-space: nowrap;
}
.divider span:last-child {				/* color changes in here */
  background-image: #CBD2E1;
  background-image: -webkit-linear-gradient(180deg, #6e6f70, #6e6f70);
  background-image: -moz-linear-gradient(180deg, #6e6f70, #6e6f70);
  background-image: -o-linear-gradient(180deg, #6e6f70, #6e6f70);
  background-image: linear-gradient(90deg, #CBD2E1, #CBD2E1);
}

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track, .slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before, .slick-track:after {
  content: "";
  display: table;
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  display: none;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}


.fadeOut{
  display: none;
}
.fadeIn{
  display: block;
}

.react-slidedown {
  transition-duration: .8s;
  transition-timing-function: ease-in-out;
}

/* .react-slidedown.my-dropdown-slidedown {
  transition-duration: .8s;
  transition-timing-function: cubic-bezier(.8, .8, .8, .8);
} */

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
  
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.switchBackground};
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  width: 30px;
  left: 2px;
  top: 50%;
  transform:translate(0, -50%);
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: ${({ theme }) => theme.switchBackground};
}

input:focus + .slider {
  box-shadow: 0 0 1px rgb(102, 102, 102);
}

input:checked + .slider:before {
  -webkit-transform: translate(20px, -50%);
  -ms-transform: translate(20px, -50%);
  transform: translate(20px, -50%);
  background-color: white;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
border-radius: 50%;
height: 25px;
width: 25px;
 }

.slick-dots li {
    position: relative;
    display: inline-block;
    height: 44px;
    margin: 0 20px;
    padding: 0;
    cursor: pointer;
}

.slick-dots li button:before{
  font-size: 0px;
  width: 50.06px;
  height: 2px;
  background: #FFFFFF;
  border-radius: 1px;
}


.slick-dots li.slick-active button:before{
  width: 50.06px;
  height: 2px;
  background: #FFFFFF;
  border-radius: 1px;
}

.similar-news-headline a{
  overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

hr{
  background-color: ${({ theme }) => theme.hrLine};
}

.checkbox {
  margin-top: 20px;
	 display: grid;
	 grid-template-columns: min-content auto;
	 grid-gap: 0.5em;
	 font-size: 1rem;
}
 .checkbox__control {
	 display: inline-grid;
	 width: 22px;
	 height: 21px;
	 border-radius: 0.25em;
	 border: 1px solid ${({ theme }) => theme.checkboxBorderColor};
}
.radio__label{
  font-size: 14px;
  padding-top: 2px;
  font-weight: 500;
}
 .checkbox__control svg {
   color: ${({ theme }) => theme.checkboxBorderColor};
	 transition: transform 0.1s ease-in 25ms;
	 transform: scale(0);
	 transform-origin: bottom left;
}
 .checkbox__input {
	 display: grid;
	 grid-template-areas: "checkbox";
}
 .checkbox__input > * {
	 grid-area: checkbox;
}
 .checkbox__input input {
	 opacity: 0;
	 width: 1em;
	 height: 1em;
}
 .checkbox__input input:checked + .checkbox__control svg {
	 transform: scale(1);
}
.checkbox__input input:checked + .checkbox__control {
	 transform: scale(1);
   background-color: ${({ theme }) => theme.checkboxBackgroundColor};
}
 .checkbox__input input:disabled + .checkbox__control {
	 color: var(--disabled);
}

.LinesEllipsis{
  padding-top: 5px;
  padding-left: 2px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.primaryText};
  overflow: hidden;

  :hover {
    text-decoration: none;
  }
}

`;

export default GlobalStyle;
