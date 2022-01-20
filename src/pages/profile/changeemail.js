import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import SettingHeader from "components/SettingHeader";

const ChangeEmail = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const handleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <SettingPageStyle>
      <div style={{ position: "relative", height: "calc(100vh - 10px)" }}>
        <SettingHeader title='Change Email' />
        <div style={{ marginTop: "15px" }}>
          <form>
            <label
              style={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              Your password
            </label>
            <div className='input-group'>
              <input
                style={{
                  height: "45px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  border: "none",
                  outline: "none",
                }}
                className='form-control'
                // ref={register()}
                type={showPassword ? "text" : "password"}
                name='password'
              />
              <div className='input-group-append'>
                <span
                  className='input-group-text'
                  style={{
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    color: "#959CAB",
                  }}
                >
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
            </div>
            <label
              style={{
                marginTop: "10px",
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              New e-mail
            </label>
            <div className='input-group'>
              <input
                type='text'
                name='email'
                ref={register()}
                className='form-control'
                style={{
                  border: "none",
                  height: "45px",
                  borderRadius: "8px",
                }}
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

  textarea:focus,
  input:focus {
    box-shadow: none;
  }

  label {
    color: ${({ theme }) => theme.primaryText};
  }

  .input-group-text {
    background-color: ${({ theme }) => theme.primaryBackground};
    border: none;
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

export default ChangeEmail;
