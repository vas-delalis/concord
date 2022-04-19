import styled from 'styled-components';
import { useState, useEffect } from "react";
import { SearchIcon } from '@heroicons/react/solid';
import { Modal, Button } from "components/elements";
import { getActivities } from "../api/getActivities";

const SearchBar = styled.div`
  border-bottom: 2px solid var(--gray-700);
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  input {
    border: none;
    font-size: 16px;
    color: var(--gray-800);
    padding: 12px;
    width: 100%;
  }

  input::placeholder {
    color: var(--gray-600);
  }

  input:focus {
    outline: none;
  }

  svg {
    height: 24px;
    color: var(--gray-700);
    margin-left: 8px;
  }
`

const ActivityList = styled.div`
  height: 280px;
  margin-bottom: 16px;
`

const Activity = styled.article`
  color: var(--gray-900);
  padding: 16px 24px;
`

export const ActivitySearch = ({ isOpen, close }) => {
  const [query, setQuery] = useState('');
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(getActivities(query));
  }, [query]);

  return (<Modal isOpen={isOpen} close={close}>
    <SearchBar>
      <SearchIcon />
      <input type="text" placeholder="Search activities" spellCheck="false" value={query} onChange={e => setQuery(e.target.value)} />
    </SearchBar>
    <ActivityList>
      {activities.slice(0, 5).map(activity => (
        <Activity key={activity}>{activity}</Activity>
      ))}
    </ActivityList>

    <Button variant="primary" width="full">
      See groups
    </Button>
  </Modal>)
};