import React, { useState, useEffect } from "react";
import { HashRouter as Router } from 'react-router-dom';

import { fetchTickets } from "./api/api";
import Header from "./components/Column";
import Board from "./components/kanbanBoard";
import { groupBy, sortTickets } from "./utils/dataUtils";
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [groupByKey, setGroupByKey] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  // Load preferences from localStorage on initial render
  useEffect(() => {
    const savedGroupByKey = localStorage.getItem("groupByKey");
    const savedSortBy = localStorage.getItem("sortBy");

    if (savedGroupByKey) setGroupByKey(savedGroupByKey);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  // Fetch tickets once on mount
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTickets();
      if (data) setTickets(data.tickets);
    };
    getData();
  }, []);

  // Group and sort tickets whenever dependencies change
  useEffect(() => {
    const sortedTickets = sortTickets([...tickets], sortBy);
    setGroupedTickets(groupBy(sortedTickets, groupByKey));
  }, [tickets, groupByKey, sortBy]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("groupByKey", groupByKey);
    localStorage.setItem("sortBy", sortBy);
  }, [groupByKey, sortBy]);

  return (
    <div className="App">
      <Header
        onGroupingChange={setGroupByKey}
        onSortingChange={setSortBy}
      />
      <Board groupedTickets={groupedTickets} />
    </div>
  );
};

export default App;
