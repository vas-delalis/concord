import styled from 'styled-components';
import {
  SearchIcon,
} from '@heroicons/react/outline';

const Hero = styled.section`
  background: linear-gradient(90deg, var(--primary-500) 0%, hsl(255, 70%, 70%) 100%);
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100px;
  height: 40px;
  width: 100%;
  box-shadow: var(--shadow-double);
  font-weight: 500;
  font-size: 16px;
  color: var(--primary-800);
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSearchIcon = styled(SearchIcon)`
  width: 16px;
  margin-right: 4px;
`

const LFGButton = styled.button`
  margin-top: 32px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  height: 35px;
  padding: 0px 16px;
  font-weight: 400;
  font-size: 16px;
`

export const Home = () => (
  <Hero>
    <SearchButton>
      <StyledSearchIcon />
      What would you like to do?
    </SearchButton>
    <LFGButton>I'm feeling lucky</LFGButton>
  </Hero>
)