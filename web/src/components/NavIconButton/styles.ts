import styled from 'styled-components';

interface imgType{
  src: () => string | string;
}

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  user-select: none;
  height: 22px;
  width: 22px;
  margin-top: auto;
  margin-bottom: auto;

  img {
    user-select: none;
  }

  & + button{
    margin-left: 1rem;
  }
`;