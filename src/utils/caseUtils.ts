
export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'bg-[#F2FCE2] text-green-700';
    case 'in-progress':
      return 'bg-[#FEF7CD] text-orange-700';
    case 'closed':
      return 'bg-[#FFDEE2] text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority.toLowerCase()) {
    case 'high':
      return 'bg-[#FFDEE2] text-red-700';
    case 'medium':
      return 'bg-[#FEF7CD] text-orange-700';
    case 'low':
      return 'bg-[#F2FCE2] text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const getTagColor = (tag: string) => {
  return 'bg-white text-black border-black hover:bg-gray-50';
};
