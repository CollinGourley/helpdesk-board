'use client';
export default function StatusMessage({ type }) {
  const messages = {
    loading: 'Loading…',
    error: 'Unable to load tickets.',
    empty: 'No tickets match your filters.'
  };
  return (
    <p className="text-center text-gray-600 py-6">{messages[type] || ''}</p>
  );
}
