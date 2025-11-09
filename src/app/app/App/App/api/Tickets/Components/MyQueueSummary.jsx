'use client';
export default function MyQueueSummary({ tickets, onRemove, onClear }) {
  return (
    <div className="border rounded-2xl p-4 bg-gray-50">
      <h3 className="font-semibold mb-2">My Queue ({tickets.length})</h3>
      {tickets.length === 0 ? (
        <p className="text-sm text-gray-500">No tickets in queue.</p>
      ) : (
        <ul className="space-y-1">
          {tickets.map(t => (
            <li key={t.id} className="flex justify-between items-center">
              <span>{t.title}</span>
              <button onClick={() => onRemove(t.id)} className="text-red-600 text-sm">Remove</button>
            </li>
          ))}
        </ul>
      )}
      {tickets.length > 0 && (
        <button onClick={onClear} className="mt-3 bg-red-600 text-white px-3 py-1 rounded">
          Clear Queue
        </button>
      )}
    </div>
  );
}
