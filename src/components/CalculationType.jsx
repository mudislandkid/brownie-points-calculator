import { Box, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export function CalculationType({ value, onChange }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        I want to calculate:
      </Typography>
      <RadioGroup
        row
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiFormControlLabel-root': {
            mr: 4,
          },
        }}
      >
        <FormControlLabel 
          value="owe_me" 
          control={<Radio />} 
          label="What my partner owes me" 
        />
        <FormControlLabel 
          value="owe_partner"
          control={<Radio />} 
          label="What I owe my partner" 
        />
      </RadioGroup>
    </Box>
  );
} 