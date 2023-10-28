import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React from 'react'

const ForumItem = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          noWrap
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
        >
          {props.date}
        </Typography>
        <Typography variant='h5' component='div' noWrap>
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary' noWrap>
          by {props.author}
        </Typography>
        <Typography variant='body2' noWrap>
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Go to Article</Button>
      </CardActions>
    </Card>
  )
}

export default ForumItem
