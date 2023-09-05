import React from 'react'
import './Box.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Password() {
  return (
    <div className='main'>
        <h1>Random Password Generator</h1>
        {/* <form>
        <label>Enter your name:
        <input type="text" />
        </label>
        </form> */}
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      {/* <TextField
          id="outlined"
          type="number"
          placeholder="Length of the password"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <input type="number" />
        <div className='Button'>
        <Button variant="contained">Generate</Button>
        </div>
      </div>
      <div className='Copy'>
        {/* <ContentCopyIcon/> */}
      </div>
    </Box>
    </div>
  )
}

export default Password