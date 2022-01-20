import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "redux/userSlice";
import styled from "styled-components";
import { selectors as authSelector } from "redux/authSlice";
import SettingHeader from "components/SettingHeader";

const ChangeName = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const { profileinfo } = useSelector(authSelector.getProfile);

  const onSubmit = (data) => {
    const nameData = { ...data, ...profileinfo };

    dispatch(updateProfile({ data: nameData })).then((res) => {
      if (res.payload && res.payload.status === 201) {
        history.goBack();
      }
    });
  };

  return (
    <SettingPageStyle>
      <div style={{ position: "relative", height: "calc(100vh - 10px)" }}>
        <SettingHeader title='Change Names' />
        <div style={{ marginTop: "15px" }}>
          <form>
            <label
              style={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              First Name
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='first_name'
                ref={register()}
                style={{
                  height: "45px",
                  borderRadius: "8px",
                  border: "none",
                }}
                className='form-control'
              />
            </div>

            <label
              style={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              Last Name
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='last_name'
                ref={register()}
                style={{
                  height: "45px",
                  borderRadius: "8px",
                  border: "none",
                }}
                className='form-control'
              />
            </div>
          </form>
        </div>
        <FooterButton onClick={handleSubmit(onSubmit)}>Save</FooterButton>
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

  textarea:focus,
  input:focus {
    box-shadow: none;
  }
`;

const FooterButton = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  bottom: 10px;
  color: white;
  background: #266dd1;
  text-align: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  padding: 12px 0;
  box-shadow: 0px 20px 41px rgba(116, 144, 181, 0.1);
`;

export default ChangeName;
