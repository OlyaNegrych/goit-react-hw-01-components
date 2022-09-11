import styled from '@emotion/styled';

export const Section = styled.section`
  width: 300px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 39px -5px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 20px;
  flex-basis: calc((100% - 0px) / 3);
  margin: 0;
  border-radius: 8px;
`;

export const StatItemText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;