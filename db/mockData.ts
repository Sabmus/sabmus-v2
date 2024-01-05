const calculateYears = (start: string, end: string): number => {
  const _start = new Date(start).getTime();
  const _end = new Date(end).getTime();
  return Math.round(((_end - _start) / 31536000000 + Number.EPSILON) * 10) / 10;
};

export const experienceData = [
  {
    place: 'Falabella',
    position: 'Business Intelligence Developer',
    range: 'Mar 2022 - Dec 2023',
    years: calculateYears('2022-03-15', '2023-12-06'),
    url: 'https://www.falabella.com/',
    description: [
      'Assistance to various departments to understand their information requirements.',
      'Created visualizations and reports to present data findings to stakeholders.',
      'Query cost optimization in GCP.',
      'Create a fluid communication channel with Asia team.',
    ],
    techs: ['GCP', 'Python', 'SQL'],
  },
  {
    place: 'Books and bits',
    position: 'Data Engineer',
    range: 'Nov 2019 - Mar 2022',
    years: calculateYears('2019-11-04', '2022-03-04'),
    url: 'https://www.booksandbits.cl/',
    description: [
      'Develop and mantain ETL processes using Apache NiFi.',
      'Collaborate with stakeholders to understand their data requirements.',
      'Implement data quality checks to improve data quality.',
      'Automate data tasks using Python and Airflow.',
      'Creation of data visualizations using PowerBi.',
    ],
    techs: ['NiFi', 'Airflow', 'PostgreSQL', 'SSIS', 'Python', 'SQL', 'SQL Server'],
  },
  {
    place: 'Viña Santa Rita',
    position: 'Data Analyst',
    range: 'Aug 2018 - Jul 2019',
    years: calculateYears('2018-08-01', '2019-07-31'),
    url: 'https://www.santarita.com/',
    description: [
      'Assisted in data collection, cleaning, and transformation tasks with Python.',
      'Develop and mantain a webscrapper process with Python to improve data.',
      'Assist several department with data in order to create visualizations.',
    ],
    techs: ['PYthon', 'SQL', 'SQL Server', 'R'],
  },
  {
    place: 'Casino Enjoy',
    position: 'Web developer',
    range: 'Apr 2017 - May 2018',
    years: calculateYears('2017-04-01', '2018-05-31'),
    url: 'https://www.enjoy.cl/#/home',
    description: [
      'Collaborated with development team to create a web platform to manage marketing campaign.',
      'Contributed to the development of data models for web platform.',
      'In charge of managing a game coupon internal system.',
    ],
    techs: ['ASP.NET', 'C#', 'Javascript', 'SQL Server'],
  },
  {
    place: 'ITPartner LTDA',
    position: 'Web developer',
    range: 'Jun 2016 - Mar 2017',
    years: calculateYears('2016-06-01', '2017-03-31'),
    url: 'https://www.itpartner.cl/',
    description: [
      'Full development of web platform using Laravel v5.7 (https://adnbike.itpartner.cl/login).',
      'Database modelling of web platform with MySQL.',
      'Integration with payment APIs.',
      'Assisted in configuration and deployment of web server to host the web platform (CentOs).',
    ],
    techs: ['PHP', 'Laravel', 'MySQL', 'SQL', 'CentOs'],
  },
];
