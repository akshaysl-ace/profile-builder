import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from '@mui/material'
import React, { useState } from 'react'
import Textarea from '@mui/joy/Textarea'
import Autocomplete from '@mui/material/Autocomplete'

const tagsData = [
  { title: 'React' },
  { title: 'Node' },
  { title: 'Redux' },
  { title: 'Other' },
]

const ForumAdd = () => {
  const [tags, setTags] = useState([])
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setError(false)
    setLoading(true)
    if (title.trim().length === 0 || details.trim().length === 0) {
      setError(true)
      setLoading(false)
    } else {
      setLoading(false)
    }
    console.log(title, details, tags)
  }

  return (
    <Container>
      <Grid item lg={12}>
        <h4>SHARE YOUR EXPERIENCE</h4>
        {error && (
          <>
            <Alert severity='error'>All fields are required!</Alert>
            <br />
          </>
        )}
        <TextField
          required
          label='Title'
          placeholder='Enter title'
          value={title}
          size='small'
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <Textarea
          minRows={5}
          placeholder='Enter brief about your experience..'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />{' '}
        <br />
        <Autocomplete
          multiple
          id='tags-standard'
          options={tagsData}
          getOptionLabel={(option) => option.title}
          value={tags}
          onChange={(event, newValue) => {
            setTags(newValue)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='standard'
              label='Multiple values'
              placeholder='Favorites'
            />
          )}
        />
        <br />
        <Button
          startIcon={loading ? <CircularProgress size={20} /> : null}
          variant='contained'
          onClick={handleSubmit}
          disabled={loading}
        >
          Submit
        </Button>
      </Grid>
    </Container>
  )
}

export default ForumAdd
