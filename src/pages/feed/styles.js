import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 24px;
`;

export const TitleHighlight = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #fff7;
  margin-bottom: 24px;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const UserInfoName = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  margin-top: 8px;
`;

export const UserInfoPercentual = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #fff7;
  margin-top: 8px;
`;
