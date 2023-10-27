import * as React from 'react'

import Additional from "./Form/Additional";
import Certification from "./Form/Certification";
import Education from "./Form/Education";
import Experience from "./Form/Experience";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PersonalDetail from "./Form/PersonalDetail";
import Project from "./Form/Project";
import Skillset from "./Form/Skillset";
import Preview from './Preview';

// import PersonalDetails from './PersonalDetails';



export default function ResumeBuilder() {
    const data = {
        name: 'John Doe',
        address: '123 Main St, City, Country',
        email: 'johndoe@email.com',
        phone: '123-456-7890',
        summary: 'A highly motivated and detail-oriented software developer with a passion for creating web applications.',
        education: [
          {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University XYZ',
            startDate: '2017',
            endDate: '2021',
          },
          {
            degree: 'Master of Science in Software Engineering',
            institution: 'Graduate School of Engineering',
            startDate: '2022',
            endDate: '2024',
          },
        ],
        experience: [
          {
            title: 'Software Developer',
            company: 'TechCorp Inc.',
            startDate: '2021',
            endDate: '2022',
            description: 'Developed web applications using React and Node.js.',
          },
          {
            title: 'Frontend Engineer',
            company: 'WebTech Solutions',
            startDate: '2022',
            endDate: 'Present',
            description: 'Collaborated with a team to create user-friendly interfaces.',
          },
        ],
      };
    return (
        <Grid container spacing={2} margin="20px" alignContent="center">
            <Grid xs={6}>
            <PersonalDetail />
            <Education />
            <Experience/>
            <Skillset />
            <Project />
            <Certification />
            <Additional />
            </Grid>
            <Grid xs={6}><Preview data={data}></Preview></Grid>
        </Grid>
    )
}
