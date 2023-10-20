import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import React from 'react'
import PersonalDetails from '../PersonalDetails';

export default function ResumeBuilder() {
    return (
        <Grid container spacing={2} margin="20px" alignContent="center">
            <Grid xs={6}>
                <PersonalDetails />
            </Grid>
            <Grid xs={6}>Second Section</Grid>
        </Grid>
    )
}
