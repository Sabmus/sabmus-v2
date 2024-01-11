'use client';

import { useState, useEffect, useRef } from 'react';
import options from '@/lib/srConfig';
import calculateYears from '@/utils/calculateYears';
import ExperienceTransition from '@/components/section/experience/ExperienceTransition';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const revealDiv = useRef(null);

  const experienceData = [
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
      place: 'Books and Bits',
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

  /**
   * https://github.com/jlmakes/scrollreveal/issues/541
   */
  useEffect(() => {
    async function animate() {
      if (revealDiv.current) {
        const sr = (await import('@/lib/sr')).default;
        sr.reveal(revealDiv.current, options());
      }
    }
    animate();
  }, []);

  return (
    <section id="experience">
      <div ref={revealDiv} className="flex flex-col items-center w-5/6 mx-auto tabletL:w-2/3 desktopS:w-1/2">
        <h1 className="title w-full">Experience</h1>

        <div className="flex flex-col w-full gap-7 tabletL:flex-row">
          <div
            role="tablist"
            className="flex flex-row overflow-x-auto snap-proximity snap-x w-full text-nowrap tabletL:flex-col tabletL:max-w-44"
          >
            {experienceData &&
              experienceData.map((data, i) => {
                return (
                  <div key={i} className="relative snap-center px-2 py-1">
                    <button
                      id={`tab-${i}`}
                      role="tab"
                      tabIndex={activeTab === i ? 0 : -1}
                      aria-selected={activeTab === i}
                      aria-controls={`panel-${i}`}
                      onClick={() => setActiveTab(i)}
                      className={`px-4 h-10 rounded-lg duration-200 delay-100 hover:text-special_1 bg-background w-full ${
                        activeTab === i ? 'text-special_1 opacity-100 glowBox border' : 'opacity-40 hover:opacity-60'
                      }`}
                    >
                      <span>{data.place}</span>
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="w-full">
            {experienceData &&
              experienceData.map((experienceData, i) => (
                <ExperienceTransition key={i} experienceData={experienceData} activeTab={activeTab} idx={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
