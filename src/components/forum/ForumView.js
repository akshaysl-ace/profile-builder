import { Button, Chip, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowBack from '@mui/icons-material/ArrowBack'

const ForumView = (props) => {
  const handleTagClick = (tag) => {
    console.log('Tag Clicked', tag)
  }

  return (
    <Container>
      <Grid item lg={12} style={{ textAlign: 'right' }}>
        <Button color='primary' variant='plain' startDecorator={<ArrowBack />}>
          Back to Forum
        </Button>
      </Grid>
      <br />
      <Grid item lg={12}>
        <Typography
          noWrap
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
        >
          {props.date}
        </Typography>
        <Typography variant='h3' component='div'>
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          by {props.author}
        </Typography>
        <br />
        {props.tags && (
          <div style={{ display: 'flex', gap: '5px' }}>
            {props.tags.map((tag) => (
              <Chip label={tag} key={tag} onClick={() => handleTagClick(tag)} />
            ))}
            <br />
            <br />
          </div>
        )}
        <Typography variant='body1' style={{ whiteSpace: 'pre' }}>
          {props.content}
        </Typography>
      </Grid>
    </Container>
  )
}

export default ForumView
