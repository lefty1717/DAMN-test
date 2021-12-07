import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FoodKindSelecter() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">請選擇食物類別</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="請選擇食材類別"
          onChange={handleChange}
        >
          <MenuItem value={10}>肉類</MenuItem>
          <MenuItem value={20}>蔬菜類</MenuItem>
          <MenuItem value={30}>海鮮類</MenuItem>
          <MenuItem value={40}>豆類</MenuItem>
          <MenuItem value={50}>水果類</MenuItem>
          <MenuItem value={60}>奶類</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
