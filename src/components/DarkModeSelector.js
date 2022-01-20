import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleThemeState, selectors as uiSelector } from "redux/uiSlice";
import styled from "styled-components";

const DarkModeSelector = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(uiSelector.getTheme);

  const handleThemeChange = () => {
    dispatch(toogleThemeState());
  };

  return (
    <SettingSectionStyle>
      <p>Dark Mode</p>
      <label className="switch">
        <input
          name="darkmode"
          type="checkbox"
          checked={theme !== "light"}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
    </SettingSectionStyle>
  );
};

const SettingSectionStyle = styled.label`
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
  padding: 18px 15px;
  margin: 8px 0px;
  align-items: center;
  border-radius: 8px;

  p {
    margin: 0;
  }

  label {
    margin-bottom: 0;
  }
`;

export default DarkModeSelector;
