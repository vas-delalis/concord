import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
`

const Nav = styled.nav`
  border-top: 1px solid var(--gray-200);
  height: 50px;
  display: flex;
  justify-content: space-evenly;
`

export const MainLayout = ({ children }) => (
  <StyledLayout>
    <Main>
      {children}
    </Main>  
    <Nav>
      <p>a</p>
      <p>b</p>
      <p>c</p>
      <p>d</p>
      <p>e</p>
    </Nav>
  </StyledLayout>
);