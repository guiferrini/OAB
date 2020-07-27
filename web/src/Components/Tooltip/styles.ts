import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background: #ff0000; /*vermelho*/
    padding: 1px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #F0F0F5; /*claro, qse branco*/
    margin-right: 5px;
    /* width: 180px;
    height: 18px; */
    /* opacity: 0; */
    transition: opacity 0.4s;
    /* visibility: hidden; */
    /* position: absolute; */
    /* bottom: 100%;
    left: 50%;
    transform: translateX(-80%); */

    /*seta indicando o erro*/
    /* &::before{ 
      content: '';
      border-style: solid;
      border-color: #ff0000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 79%;
      transform: translateX(-50%);
    } */
  }
  /* &:hover span{
    opacity: 1;
    visibility: visible;  
  } */
`;