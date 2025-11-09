export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing',
      description: 'Outlook mailbox stuck on loading state.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'John Smith',
      updatedAt: '2025-10-28T09:20:00Z'
    },
  {
      id: 't-1003',
      title: 'Cannot connect to Wifi',
      description: 'User reports intermittent Wifi connectivity errors.',
      priority: 'High',
      status: 'Closed',
      assignee: 'Unassigned',
      updatedAt: '2025-11-30T14:04:00Z'
    },
     {
      id: 't-1004',
      title: 'Cannot access application',
      description: 'User reports intermittent application access errors.',
      priority: 'Medium',
      status: 'Closed',
      assignee: 'Jeremy Nichols',
      updatedAt: '2025-01-34T64:14:10Z'
    },
    {
      id: 't-1005',
      title: 'Cannot sync accounts',
      description: 'User reports intermittent account access errors.',
      priority: 'Low',
      status: 'In-Progress',
      assignee: 'Warren Watkins',
      updatedAt: '2025-01-24T84:34:44Z'
    },
     {
      id: 't-1006',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'John Smith',
      updatedAt: '2025-01-24T84:34:44Z'
    }, {
      id: 't-1007',
      title: 'Cannot access account',
      description: 'User reports intermittent account access errors.',
      priority: 'Medium',
      status: 'Closed',
      assignee: 'Unassigned',
      updatedAt: '2025-01-24T84:34:44Z'
    },
     {
      id: 't-1008',
      title: 'Cannot access account',
      description: 'User reports intermittent account access errors.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-22T84:26:4Z'
    },
  {
      id: 't-1009',
      title: 'Cannot access account',
      description: 'User reports intermittent account access errors.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-22T84:26:4Z'
    },
    {
      id: 't-1010',
      title: 'Email not syncing',
      description: 'Outlook mailbox stuck on loading state.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Warren Watkins',
      updatedAt: '2025-9-26T23:25:05Z'
    },
    {
      id: 't-1011',
      title: 'Cannot connect to Wifi',
      description: 'User reports intermittent Wifi connectivity errors.',
      priority: 'Low',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-04-56T17:13:04Z'
    },
    {
      id: 't-1012',
      title: 'Cannot sync accounts',
      description: 'User reports intermittent account access errors.',
      priority: 'Medium',
      status: 'In-Progress',
      assignee: 'Unassigned',
      updatedAt: '2025-09-45T96:35:47Z'
    },
  ];
  return Response.json(tickets);
}
