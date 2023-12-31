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
        profileSummary: 'A highly motivated and detail-oriented software developer with a passion for creating web applications.',
        domain:"s,mc,m,",
        programmingLanguages:"jwhjashjdhj",
        os:"dsnc,m,sm,",
        tools:"kjfskdjc,m",
        hardware:"skcjkmkm,",
        role:"Product Engineer",
        certifications:[
          "shdjfdhkjk",
          "khkjjkjkjlk",
          "kjkjlkjlklk"
        ],
        photoSource:"http://localhost:3000/logo192.png",
        projectExp: [
          {
            projectName: 'Bachelor of Science in Computer Science',
            projectDescription: 'University XYZ',
            role:'Developer',
            technology:'java',
            teamSize:'3',
            startDate: '2017',
            endDate: '2021',
          },
          {
            projectName: 'Bachelor of Science in Computer Science',
            projectDescription: 'University XYZ',
            role:'Developer',
            technology:'java',
            teamSize:'3',
            startDate: '2017',
            endDate: '2021',
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
