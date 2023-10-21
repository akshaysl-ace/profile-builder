import * as React from 'react'

import Additional from "./Form/Additional";
import Certification from "./Form/Certification";
import Education from "./Form/Education";
import Experience from "./Form/Experience";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PersonalDetail from "./Form/PersonalDetail";
import Project from "./Form/Project";
import Skillset from "./Form/Skillset";

// import PersonalDetails from './PersonalDetails';



export default function ResumeBuilder() {
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
            <Grid xs={6}>Second Section</Grid>
        </Grid>
    )
}
