import styled from 'styled-components';
import {
  SearchIcon,
} from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useDisclosure } from 'hooks/useDisclosure';
import { Button } from 'components/elements';
import { ActivitySearch } from 'features/activities';

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
  height: 48px;
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
  width: 18px;
  margin-right: 6px;
`

const LFGLink = styled(Link)`
  margin-top: 32px; 
`

export const Home = () => {
  const { open, close, isOpen } = useDisclosure();

  return (
    <>
      <ActivitySearch isOpen={isOpen} close={close} />
      <Hero>
        <SearchButton onClick={open}>
          <StyledSearchIcon />
          What would you like to do?
        </SearchButton>
        <LFGLink to="lfg">
          <Button variant="transparent" width="small">
            I'm feeling lucky
          </Button>
        </LFGLink>
      </Hero>
    </>
  )
}