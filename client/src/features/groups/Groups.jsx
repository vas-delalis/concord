import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { PlusSmIcon } from '@heroicons/react/solid';
import { Button } from 'components/elements';

const TopSection = styled.div`
  background: linear-gradient(90deg, var(--primary-500) 0%, #A982DE 100%);
  padding: 16px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledPlusIcon = styled(PlusSmIcon)`
  width: 20px;
  margin-right: 0px;
`

const StyledButton = styled(Button)`
  padding-left: 8px;
`

export const Groups = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.getAll('activity'));

  return (
    <TopSection>
      Overwatch
      <StyledButton variant="white" size="small">
        <StyledPlusIcon />
        Create
      </StyledButton>
    </TopSection>
  );
};