import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CommonHeader = ({ left, right, title, ...rest }) => {
  return (
    <PageHeader>
      <PageHeaderLeft>
        {left && (
          <Link to={left.address}>
            {left.iconSrc && <LeftIconImg src={left.iconSrc} alt='icon' />}
            {left.iconClass && <LeftAwesomeIcon className={left.iconClass} />}
          </Link>
        )}
      </PageHeaderLeft>
      <PageHeaderTitle>
        <p>{title}</p>
      </PageHeaderTitle>
      <PageHeaderRight>
        {right && (
          <Link to={right.address}>
            {right.iconSrc && <RightIconImg src={right.iconSrc} alt='icon' />}
          </Link>
        )}
      </PageHeaderRight>
    </PageHeader>
  );
};

const LeftIconImg = styled.img`
  height: 30px;
`;
const LeftAwesomeIcon = styled.i`
  color: white;
  &:hover {
    color: #40a9ff;
  }
`;

const RightIconImg = styled.img`
  display: flex;
  align-items: center;
  float: right;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondaryBackground};
  padding: 8px 8px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.headerShadow};
`;

const PageHeader = styled.div`
  max-width: 480px;
  position: fixed;
  top: 0;
  z-index: 3;
  padding: 13px 10px;
  display: flex;
  align-items: center;
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: ${({ theme }) => theme.backTransparent};
  backdrop-filter: blur(80px);
  margin-bottom: 10px;
`;

const PageHeaderLeft = styled.div`
  width: 15%;
  i {
    cursor: pointer;
    padding: 5px 10px;
  }
`;

const PageHeaderTitle = styled.div`
  width: 70%;
  height: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: bolder;
    color: ${({ theme }) => theme.primaryText};
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
  }
`;

const PageHeaderRight = styled.div`
  width: 15%;
`;

export default CommonHeader;
