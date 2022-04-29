import styled from 'styled-components';
import polished from 'polished';

const HeaderSidePadding = 5;

export const Container = styled.header`
  position: fixed;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(90px);
  padding: 0 ${HeaderSidePadding}rem;
  height: 4.625rem;
  border-bottom: solid 2px rgba(0, 0, 0, 0.04);
  width: 100%;
  top: 0.5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: calc(100% - ${HeaderSidePadding * 2}rem);
`;

export const Nav = styled.nav`
  display: flex;
  ul{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
  }

  ul + button {
    margin-left: 0.5rem;
  }
`;