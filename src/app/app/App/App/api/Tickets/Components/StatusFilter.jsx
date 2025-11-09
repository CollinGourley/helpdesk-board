'use client';
export default function StatusFilter({ value, onChange }) {
  const options = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border p-2 rounded-lg"
    >
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  );
}
