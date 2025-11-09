'use client';
import { useState, useEffect } from 'react';
import TicketList from './TicketList';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});


  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchTickets();
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    const interval = setInterval(() => {
      setTickets(prev => {
        const updated = [...prev];
        const index = Math.floor(Math.random() * updated.length);
        const ticket = { ...updated[index] };

        const fields = ['status', 'priority'];
        const field = fields[Math.floor(Math.random() * fields.length)];

        if (field === 'status') {
          const nextStatus = {
            Open: 'In Progress',
            'In Progress': 'On Hold',
            'On Hold': 'Resolved',
            Resolved: 'Resolved'
          };
          ticket.status = nextStatus[ticket.status] || ticket.status;
        } else {
          const nextPriority = {
            Low: 'Medium',
            Medium: 'High',
            High: 'Critical',
            Critical: 'Critical'
          };
          ticket.priority = nextPriority[ticket.priority] || ticket.priority;
        }
        ticket.updatedAt = new Date().toISOString();
        updated[index] = ticket;
        return updated;
      });
    }, Math.random() * 4000 + 6000);
    return () => clearInterval(interval);
  }, [tickets]);

  const visibleTickets = tickets.filter(t => {
    const matchStatus = filters.status === 'All' || t.status === filters.status;
    const matchPriority = filters.priority === 'All' || t.priority === filters.priority;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchPriority && matchSearch;
  });

  const addToQueue = (id) => setQueue(prev => ({ ...prev, [id]: true }));
  const removeFromQueue = (id) => setQueue(prev => {
    const copy = { ...prev };
    delete copy[id];
    return copy;
  });
  const clearQueue = () => setQueue({});

  if (loading) return <StatusMessage type="loading" />;
  if (error) return <StatusMessage type="error" />;
  if (!visibleTickets.length) return <StatusMessage type="empty" />;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 flex-wrap">
        <StatusFilter value={filters.status} onChange={v => setFilters(f => ({ ...f, status: v }))} />
        <PriorityFilter value={filters.priority} onChange={v => setFilters(f => ({ ...f, priority: v }))} />
        <SearchBox value={search} onChange={setSearch} />
      </div>

      <TicketList tickets={visibleTickets} queue={queue} onAddToQueue={addToQueue} />
      <MyQueueSummary tickets={tickets.filter(t => queue[t.id])} onRemove={removeFromQueue} onClear={clearQueue} />
    </div>
  );
}