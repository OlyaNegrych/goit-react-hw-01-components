import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 30px;
  width: 330px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
`;

export const OnlineStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const FriendPhoto = styled.img`
width: 60px;
margin-right: 15px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
