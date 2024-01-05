const calculateYears = (start: string, end: string): number => {
  const _start = new Date(start).getTime();
  const _end = new Date(end).getTime();
  return Math.round(((_end - _start) / 31536000000 + Number.EPSILON) * 10) / 10;
};

export const experienceData = [
  {
    place: 'Falabella',
    position: 'Business Intelligence Developer',
    range: 'Mar 2022 - Dec 2023 ',
    years: calculateYears('2022-03-15', '2023-12-06'),
    url: 'https://www.falabella.com/',
    description: ['lala', 'loloo', 'lilil'],
  },
  {
    place: 'Books and bits',
    position: 'Data Engineer',
    range: 'Nov 2018 - Mar 2022',
    years: 0,
    url: 'https://www.booksandbits.cl/',
    description: ['lala', 'loloo', 'lilil'],
  },
];
