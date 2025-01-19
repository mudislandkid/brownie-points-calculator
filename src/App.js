import React, { useState, useMemo } from 'react';
import { Container, Card, Grid, Button, Box, Typography } from '@mui/material';
import { ThemeProvider } from './components/ThemeProvider';
import { CalculationType } from './components/CalculationType';
import { FormFields } from './components/FormFields';
import { PointsResult } from './components/PointsResult';
import { calculatePoints } from './utils/calculatePoints';

function App() {
  const [formValues, setFormValues] = useState({
    calculationType: 'owe_partner',
    gender: '',
    activity: '',
    noticeGiven: '',
    timing: '',
    duration: 1,
    durationUnit: 'days',
    numKids: 0,
    compensation: [],
    previousOffenses: [],
    partnerStress: 0,
    seasonalMultiplier: [],
    sweetenDeal: false,
    moodLevel: 0,
    excuseQuality: '',
    puppyEyes: 0,
    bribery: [],
    hungerLevel: 0,
    pastDeeds: [],
    requestTiming: '',
  });

  const points = useMemo(() => {
    // Show null (prompt message) if we don't have the minimum required fields
    if (!formValues.calculationType || !formValues.gender) {
      return null;
    }
    
    // Show 0 if we have type and gender but no activity yet
    if (!formValues.activity) {
      return 0;
    }

    // Calculate actual points once we have all required fields
    return calculatePoints(formValues);
  }, [formValues]);

  const handleChange = (field, value) => {
    setFormValues(prev => {
      const newValues = {
        ...prev,
        [field]: value
      };

      // Reset all fields when calculation type changes
      if (field === 'calculationType') {
        return {
          calculationType: value,
          gender: '',
          activity: '',
          noticeGiven: '',
          timing: '',
          duration: 1,
          durationUnit: 'days',
          numKids: 0,
          compensation: [],
          previousOffenses: [],
          partnerStress: 0,
          seasonalMultiplier: [],
          sweetenDeal: false,
          moodLevel: 0,
          excuseQuality: '',
          puppyEyes: 0,
          bribery: [],
          hungerLevel: 0,
          pastDeeds: [],
          requestTiming: '',
        };
      }

      // Reset most fields when gender changes
      if (field === 'gender') {
        return {
          ...prev,
          gender: value,
          activity: '',
          noticeGiven: '',
          timing: '',
          duration: 1,
          durationUnit: 'days',
          numKids: 0,
          compensation: [],
          previousOffenses: [],
          partnerStress: 0,
          seasonalMultiplier: [],
          sweetenDeal: false,
          moodLevel: 0,
          excuseQuality: '',
          puppyEyes: 0,
          bribery: [],
          hungerLevel: 0,
          pastDeeds: [],
          requestTiming: '',
        };
      }

      return newValues;
    });
  };

  return (
    <ThemeProvider>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1429 0%, #2d1f47 100%)',
        py: 4,
        pb: '300px',
      }}>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Relationship Brownie Points
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Calculate your relationship credit score ✨
          </Typography>

          <Card sx={{ 
            p: 4, 
            borderRadius: 4,
            mb: 8,
          }}>
            <CalculationType 
              value={formValues.calculationType}
              onChange={(e) => handleChange('calculationType', e.target.value)}
            />
            
            <FormFields 
              values={formValues}
              onChange={handleChange}
            />
          </Card>
        </Container>

        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            marginBottom: '-18px',
          }}
        >
          <PointsResult 
            points={points} 
            gender={formValues.gender}
            calculationType={formValues.calculationType}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 