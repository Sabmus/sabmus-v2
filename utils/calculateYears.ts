const calculateYears = (start: string, end: string): string => {
  const _start = new Date(start).getTime();
  const _end = new Date(end).getTime();
  const years = Math.round(((_end - _start) / 31536000000 + Number.EPSILON) * 10) / 10;
  // const month = Math.floor((years * 12) % 12);

  // return `${Math.floor(years)} year, ${month} month`;
  if (years % 1 === 0) {
    return `${years} year`;
  }

  return `${years} years`;
};

export default calculateYears;
