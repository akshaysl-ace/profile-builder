import { Button, Container, Grid, Item } from '@mui/material'
import React from 'react'
import ForumItem from './ForumItem'

const ForumHome = () => {
  const forumData = [
    {
      date: '28 Oct, 2023',
      title: 'Title Title Title Title',
      author: 'John Doe',
      content: `This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`,
      tags: ['React', 'Node'],
    },
    {
      date: '28 Oct, 2023',
      title: 'Title Title Title Title',
      author: 'John Doe',
      content: `This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`,
      tags: ['React', 'Redux'],
    },
    {
      date: '28 Oct, 2023',
      title: 'Title Title Title Title',
      author: 'John Doe',
      content: `This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`,
      tags: ['Java', 'AWS'],
    },
    {
      date: '28 Oct, 2023',
      title: 'Title Title Title Title',
      author: 'John Doe',
      content: `This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`,
      tags: ['React', 'Java'],
    },
    {
      date: '28 Oct, 2023',
      title: 'Title Title Title Title',
      author: 'John Doe',
      content: `This is the te content\n This is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\nThis is the te content\n`,
    },
  ]

  return (
    <Container>
      <Grid item lg={12} style={{ textAlign: 'right' }}>
        <Button color='primary' variant='contained'>
          Add Experience
        </Button>
      </Grid>
      <br />
      <Grid container spacing={2}>
        {forumData.map((item, key) => (
          <Grid key={key} item xs={12} lg={4} md={6} sm={12}>
            <ForumItem
              date={item.date}
              title={item.title}
              author={item.author}
              content={item.content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ForumHome
