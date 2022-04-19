import { useState, useEffect } from "react";
import { Modal, Button } from "components/elements";
import { getActivities } from "../api/getActivities";

export const ActivitySearch = ({ isOpen, close }) => {
  const [query, setQuery] = useState('');
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(getActivities(query));
  }, [query]);

  return (<Modal isOpen={isOpen} close={close}>
    <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
    { activities.map(activity => (
      <div key={activity}>{activity}</div>
    )) }
    <Button variant="primary" width="full">
      See groups
    </Button>
  </Modal>)
};