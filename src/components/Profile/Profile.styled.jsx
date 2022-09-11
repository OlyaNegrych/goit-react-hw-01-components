import styled from '@emotion/styled';

export const ProfileBox = styled.div`
width: 350px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserPhoto = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const UserInfo = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
  color: RGBA(0, 0, 0, 0.53);
`;

export const StatList = styled.ul`
  padding: 5px;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-color: RGBA(0, 0, 0, 0.53);
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 20px;
  width: 50px;
  margin: 0;
  border-radius: 8px;
  background-color: RGBA(0, 0, 0, 0.2);
`;