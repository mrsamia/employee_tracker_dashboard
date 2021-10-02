import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SelectMUI from '@mui/material/Select';

export default function Select() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employee type</InputLabel>
        <SelectMUI
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Employee type"
          onChange={handleChange}
        >
          <MenuItem value={1}>Admins</MenuItem>
          <MenuItem value={2}>Managers</MenuItem>
          <MenuItem value={3}>HR</MenuItem>
        </SelectMUI>
      </FormControl>
    </Box>
  );
}