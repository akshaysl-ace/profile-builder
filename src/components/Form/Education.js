import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Form from './Form'
import React from "react";
import Typography from '@mui/material/Typography';

function Education(){
    return(
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
            <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. */}
                <Form />
            </Typography>
            
        </AccordionDetails>
    </Accordion>
    )
}
export default Education;