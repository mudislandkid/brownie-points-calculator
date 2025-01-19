import React from 'react';
import { 
  Slider, 
  Checkbox, 
  FormControlLabel, 
  TextField,
  Box,
  FormControl,
  FormHelperText,
  Select,
  MenuItem
} from '@mui/material';
import { FormField } from './FormField';

export function FormInput({ type, label, tooltip, value, onChange, options, inputProps, sx, ...props }) {
  const renderInput = () => {
    switch (type) {
      case 'number':
        return (
          <TextField
            type="number"
            fullWidth
            value={value}
            onChange={onChange}
            inputProps={{
              min: 1,
              ...inputProps
            }}
            sx={{
              '& input': {
                height: '24px',
                padding: '12px',
                ...sx
              },
            }}
            {...props}
          />
        );

      case 'select':
        return (
          <FormControl fullWidth>
            <Select
              value={value || (props.multiple ? [] : '')}
              onChange={onChange}
              multiple={props.multiple}
              label={label}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    zIndex: 9999,
                    backgroundColor: '#2d1f47',
                    '& .MuiMenuItem-root': {
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      padding: '12px 16px',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#B39374',
                      },
                      '&.Mui-selected': {
                        backgroundColor: '#C4A484',
                        '&:hover': {
                          backgroundColor: '#B39374',
                        },
                      },
                    },
                  },
                },
                disableAutoFocusItem: true,
                closeMenuOnSelect: !props.multiple
              }}
              sx={{ 
                height: '56px',
                '& .MuiSelect-select': {
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                },
                ...sx
              }}
            >
              {options.map(option => (
                <MenuItem 
                  key={option.value} 
                  value={option.value}
                  sx={{
                    minHeight: 'unset',
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {tooltip && <FormHelperText>{tooltip}</FormHelperText>}
          </FormControl>
        );

      case 'multiSelect':
        return (
          <FormControl fullWidth>
            <Select
              multiple
              value={value || []}
              onChange={onChange}
              label={label}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 300,
                    zIndex: 9999,
                    backgroundColor: '#2d1f47',
                    '& .MuiMenuItem-root': {
                      whiteSpace: 'normal',
                      wordBreak: 'break-word',
                      padding: '12px 16px',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#B39374',
                      },
                      '&.Mui-selected': {
                        backgroundColor: '#C4A484',
                        '&:hover': {
                          backgroundColor: '#B39374',
                        },
                      },
                    },
                  },
                },
                autoClose: false,
              }}
              sx={{ 
                minHeight: '56px',
                '& .MuiSelect-select': {
                  whiteSpace: 'normal',
                  padding: '12px 16px',
                },
              }}
              renderValue={(selected) => {
                const selectedLabels = selected.map(val => 
                  options.find(opt => opt.value === val)?.label || ''
                );
                return selectedLabels.join(', ');
              }}
            >
              {options.map(({ value: optValue, label }) => (
                <MenuItem 
                  key={optValue} 
                  value={optValue}
                  sx={{
                    minHeight: 'unset',
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );

      case 'slider':
        return (
          <Box sx={{ mt: 2, mb: 4 }}>
            <Slider
              value={value}
              onChange={onChange}
              valueLabelDisplay="auto"
              sx={{
                '& .MuiSlider-markLabel': {
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                  mt: 1,
                  '&[data-index="0"]': {
                    transform: 'translateX(0%)',
                  },
                  '&[data-index="1"]': {
                    transform: 'translateX(-50%)',
                  },
                  '&[data-index="2"]': {
                    transform: 'translateX(-100%)',
                  },
                },
                '& .MuiSlider-valueLabel': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  padding: '4px 8px',
                  fontSize: '0.75rem',
                },
                '& .MuiSlider-track': {
                  height: 4,
                },
                '& .MuiSlider-rail': {
                  height: 4,
                  opacity: 0.3,
                },
                '& .MuiSlider-thumb': {
                  width: 16,
                  height: 16,
                },
              }}
              {...props}
            />
          </Box>
        );

      case 'checkbox':
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={value}
                onChange={onChange}
                sx={{ '&.Mui-checked': { color: '#C4A484' } }}
              />
            }
            label={label}
            sx={{
              '& .MuiFormControlLabel-label': {
                fontSize: '0.875rem',
              },
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <FormField label={label} tooltip={tooltip}>
      {renderInput()}
    </FormField>
  );
} 