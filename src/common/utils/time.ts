export const timeToSeconds = (_time: string) => {
  const [hours = '0', minutes = '0', seconds = '0'] = _time.split(':');
  const hoursToSeconds = Number(hours) * 60 * 60;
  const minutesToSeconds = Number(minutes) * 60;
  return hoursToSeconds + minutesToSeconds + Number(seconds);
};
