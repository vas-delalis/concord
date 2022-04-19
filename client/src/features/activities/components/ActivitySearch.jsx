import styled from 'styled-components';
import { useState, useEffect } from "react";
import { SearchIcon } from '@heroicons/react/solid';
import { Modal, Button } from "components/elements";
import { getActivities } from "../api/getActivities";

const SearchBar = styled.div`
  border-bottom: 2px solid var(--gray-700);
  padding: 10px 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  input {
    border: none;
    font-size: 16px;
    color: var(--gray-800);
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
    margin-right: 16px;
  }
`

const ActivityList = styled.div`
  height: 250px;
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
      {activities.map(activity => (
        <div key={activity}>{activity}</div>
      ))}
    </ActivityList>

    <Button variant="primary" width="full">
      See groups
    </Button>
  </Modal>)
};