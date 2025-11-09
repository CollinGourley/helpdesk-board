'use client';
export default function PriorityFilter({ value, onChange }) {
  const options = ['All', 'Low', 'Medium', 'High', 'Critical'];
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
