import styled from 'styled-components';
// import { shade } from 'polished';

export const Container = styled.button`
  background: #ff0000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #FFFFFF;
  width: 100%;
  font-weight: 700;
  margin-top: 6px;
  transition: background-color 0.2s;
  
  &:hover{
    opacity: 0.8; 
  }
`;