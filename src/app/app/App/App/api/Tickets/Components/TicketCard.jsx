'use client';
export default function TicketCard({ ticket, inQueue, onAdd }) {
  return (
    <div className="border rounded-2xl p-4 shadow bg-white flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-1">{ticket.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
        <p className="text-sm"><strong>Priority:</strong> {ticket.priority}</p>
        <p className="text-sm"><strong>Status:</strong> {ticket.status}</p>
        <p className="text-sm"><strong>Assignee:</strong> {ticket.assignee}</p>
        <p className="text-xs text-gray-400 mt-1">Updated {new Date(ticket.updatedAt).toLocaleString()}</p>
      </div>
      <button
        onClick={onAdd}
        disabled={inQueue}
        className={`mt-3 py-1 px-3 rounded ${inQueue ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
      >
        {inQueue ? 'In My Queue' : 'Add to My Queue'}
      </button>
    </div>
  );
}
