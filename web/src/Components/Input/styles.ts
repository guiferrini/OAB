import styled, { css } from 'styled-components';

interface ContainerProps{
  isError: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* margin-bottom: 6px;
  padding: 5px;
  color: black;
  border-radius: 8px;
  text-align: center;
  border: 2px solid black;
  
  /* height: 20px; */
  /* display: flex; */
  align-items: center;
  
  width: 300px; 
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  /* border: transparent; */
  
  input{
    border: transparent;
    border-bottom: 2px solid black;
    flex: 1;
    padding: 5px;
    /* border: 0; */
  }
  svg{
    margin-right: 10px;
  }
  ${props => props.isError && css`
  border-color: #bd0000;
  color: #bd0000;
  /* border-bottom: 2px solid #bd0000; */
  /* box-shadow: 1px 1px 1px #bd0000; */
  `}

  .icon_input {
    display: flex;
    align-items: center;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  margin-right: 10px;
  /* background: blue; */
`;