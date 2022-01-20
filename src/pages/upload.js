import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPost, selectors as newsSelector } from 'redux/newsSlice';
import { selectors as uiSelector } from 'redux/uiSlice';
import 'antd/dist/antd.css';
import { Upload, Button } from 'antd';

const PostPage = () => {
  const { theme } = useSelector(uiSelector.getTheme);
  const [hour, setHour] = useState(12);
  const [postContent, setPostContent] = useState(
    'asdfasdfasdf#asdfasdfasdf#test,test1,test2'
  );
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleClick = useCallback((e) => {
    setHour(+e.target.value.substr(0, 2));
  }, []);

  const submitForm = useCallback(() => {
    console.log(hour, postContent, image);
    const subContents = postContent.split('#');
    if (subContents.length < 3) {
      alert('input form is not valid');
      return;
    }
    const [title, content, category] = subContents;

    dispatch(uploadPost({ hour, title, content, category, image }));
  }, [hour, postContent, image, dispatch]);

  const uploadImageChnage = useCallback((info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      setImage(info.file.response.url);
    }
  }, []);
  const handleTextAreaChange = useCallback((e) => {
    setPostContent(e.target.value);
  }, []);

  const uploadImageProps = useMemo(
    () => ({
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      showUploadList: false,
      onChange: uploadImageChnage,
    }),
    []
  );

  return (
    <UploadWrapper>
      <Label>Post time</Label>
      <GridGap>
        <PostHour
          type='button'
          onClick={handleClick}
          value='12 hours'
          isSelected={hour === 12}
          theme={theme}
        />
        <PostHour
          type='button'
          onClick={handleClick}
          value='24 hours'
          isSelected={hour === 24}
          theme={theme}
        />
        <PostHour
          type='button'
          onClick={handleClick}
          value='72 hours'
          isSelected={hour === 72}
          theme={theme}
        />
      </GridGap>
      <Label style={{ marginTop: '40px' }}>Text / Link</Label>
      <TextAreaContent
        value={postContent}
        onChange={handleTextAreaChange}
        placeholder='Write text/ insert link here...&#x0a;Use #’s to categorise your post.'
      />
      <Label style={{ marginTop: '25px' }}>Image</Label>

      <Upload {...uploadImageProps}>
        <Button block>Upload image...</Button>
      </Upload>

      <UploadButton onClick={submitForm}> Create</UploadButton>
    </UploadWrapper>
  );
};

export default PostPage;

const TextAreaContent = styled.textarea`
  border-radius: 8px;
  padding: 13px 12px;
  width: 100%;
  height: 137px;
  box-shadow: 0px 20px 41px 0px rgba(116, 144, 181, 0.17);
`;
const Label = styled.p``;
const UploadWrapper = styled.div`
  font-size: 12px;
  padding: 100px 27px 0;
  transition: 0.75s ease;
  p {
    margin-bottom: 7px;
    color: ${({ theme }) => theme.pText};
  }
  textarea {
    border: none;
    outline: unset;
    color: ${({ theme }) => theme.postText};
    background-color: ${({ theme }) => theme.textArea};
  }
  input {
    color: ${({ theme }) => theme.postHourColor};
  }
  .ant-upload {
    width: 100%;
    box-shadow: 0px 10px 31px 0px rgba(116, 144, 181, 0.17);
  }
  .ant-btn {
    font-size: 12px;
    border-radius: 8px;
    padding: 15px;
    height: auto;
    text-align: left;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.textArea};
    color: gray;
  }
`;

const GridGap = styled.div`
  display: grid;
  gap: 27px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const PostHour = styled.input`
  padding: 14px 0;
  border: none;
  border-radius: 8px;
  background: ${(p) =>
    p.theme == 'light'
      ? p.isSelected
        ? '#B8C2FE'
        : '#FFFFFF'
      : p.isSelected
      ? '#666E99'
      : '#2D3036'} !important;
  box-shadow: 0px 10px 31px 0px rgba(116, 144, 181, 0.17) !important;
`;

const UploadButton = styled.button`
  padding: 17px;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  border-radius: 8px;
  background: #266dd1;
  border: none;
  color: white;
  text-align: center;
`;
