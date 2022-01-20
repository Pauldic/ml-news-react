import { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SettingHeader from "components/SettingHeader";
import { updateProfileState, selectors as authSelector } from "redux/authSlice";
import { updateProfile } from "redux/userSlice";

const defaultProfileValue = {
  avatar_url: "http://www.gravatar.com/avatar",
  interests: {},
  liked: [],
  unliked: [],
};

const CreateProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { complate, profileinfo } = useSelector(authSelector.getProfile);

  const { register, handleSubmit } = useForm({
    defaultValues: useMemo(() => profileinfo, [profileinfo]),
  });

  useEffect(() => {
    if (complate) {
      history.push("/");
    }
  }, [complate, history]);

  const onSubmit = (formdatas) => {
    dispatch(
      updateProfile({
        data: { ...defaultProfileValue, ...formdatas },
      })
    ).then((res) => {
      if (res.payload && res.payload.status === 201) {
        dispatch(updateProfileState(res.payload.data));
      }
    });
  };

  return (
    <SettingPageStyle>
      <div style={{ position: "relative", height: "calc(100vh - 10px)" }}>
        <SettingHeader title='Create Profile' />
        <div style={{ marginTop: "15px" }}>
          <form>
            <InputLabel>First Name</InputLabel>
            <div className='input-group'>
              <InputField
                className='form-control'
                type='text'
                name='first_name'
                ref={register()}
              />
            </div>
            <InputLabelExtend>Last Name</InputLabelExtend>
            <div className='input-group'>
              <InputField
                className='form-control'
                type='text'
                name='last_name'
                ref={register()}
              />
            </div>
            <InputLabelExtend>Country</InputLabelExtend>
            <div className='input-group'>
              <InputField
                className='form-control'
                type='text'
                name='country'
                ref={register()}
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
  background-color: ${({ theme }) => theme.backgroundImage};
  padding: 10px;
  height: 100vh;
`;

const FooterButton = styled.div`
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

const InputLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.primaryText};
`;

const InputLabelExtend = styled(InputLabel)`
  margin-top: 10px;
`;

const InputField = styled.input`
  border: none;
  height: 45px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(116 144 181 / 17%) 0px 20px 41px;
  border-radius: 8px;
`;

export default CreateProfile;
