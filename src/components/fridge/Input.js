import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    
    <Stack spacing={2} sx={{ width: 144, height:28 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        renderInput={(params) => <TextField {...params} label="" />}
      />
    </Stack>
   
  );
}