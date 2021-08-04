const parseStatus = (status: number) => {
  if (status === -1) {
    return 'offline';
  }
  if (status === 0) {
    return 'online';
  }
  if (status === 1) {
    return 'busy';
  }
  if (status === 2) {
    return 'away';
  }
  return 'offline';
};

export default { parseStatus };
