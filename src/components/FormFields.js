import React from 'react';
import { Grid, Box } from '@mui/material';
import { FormInput } from './FormInput';
import * as options from '../utils/calculationOptions';

// Helper function to determine which gender-specific label to use
const getGenderLabel = (values, maleLabel, femaleLabel) => {
  const isMale = values.gender === 'male';
  
  // Always show opposite gender's options
  return isMale ? femaleLabel : maleLabel;
};

const getNoticeLabel = (calculationType) => {
  return calculationType === 'owe_partner' 
    ? "Notice Given 📅" 
    : "Response Time ⏱️";
};

const getNoticeOptions = (calculationType, gender) => {
  if (calculationType === 'owe_partner') {
    // When owing partner, show opposite gender's perspective
    return [
      { 
        value: 'none', 
        label: gender === 'male'
          ? "No warning for her girls night 😬"
          : "No warning for his game night 😬"
      },
      { 
        value: 'last_minute',
        label: gender === 'male'
          ? "Last minute spa cancellation 🙄"
          : "Last minute match cancellation 🙄"
      },
      { 
        value: 'some',
        label: gender === 'male'
          ? "Gave her decent notice 👍"
          : "Gave him decent notice 👍"
      },
      { 
        value: 'plenty',
        label: gender === 'male'
          ? "Planned around her schedule! ⭐"
          : "Planned around his schedule! ⭐"
      }
    ];
  } else {
    // Options for 'owe_me'
    return [
      { 
        value: 'none',
        label: gender === 'male' 
          ? "She had to be asked multiple times 😤"
          : "He had to be asked multiple times 😤"
      },
      { 
        value: 'last_minute',
        label: gender === 'male'
          ? "She did it after nagging 🙄"
          : "He did it after nagging 🙄"
      },
      { 
        value: 'some',
        label: gender === 'male'
          ? "She did it when asked once 👍"
          : "He did it when asked once 👍"
      },
      { 
        value: 'plenty',
        label: gender === 'male'
          ? "She did it without being asked! 🌟"
          : "He did it without being asked! 🌟"
      }
    ];
  }
};

const getTimingLabel = (values, option) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    // What I owe partner
    return isMale ? option.male_to_female : option.female_to_male;
  } else {
    // What partner owes me
    return isMale ? option.female_owes_male : option.male_owes_female;
  }
};

const getPreviousOffensesLabel = (values, offense) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    // What I owe partner
    return isMale ? offense.male_to_female : offense.female_to_male;
  } else {
    // What partner owes me
    return isMale ? offense.female_owes_male : offense.male_owes_female;
  }
};

const getSeasonalLabel = (values, factor) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    // What I owe partner
    return isMale ? factor.male_to_female : factor.female_to_male;
  } else {
    // What partner owes me
    return isMale ? factor.female_owes_male : factor.male_owes_female;
  }
};

const getRequestTimingLabel = (values, option) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    // What I owe partner
    return isMale ? option.male_to_female : option.female_to_male;
  } else {
    // What partner owes me
    return isMale ? option.female_owes_male : option.male_owes_female;
  }
};

const getCompensationLabel = (values, option) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    // What I owe partner
    return isMale ? option.male_to_female : option.female_to_male;
  } else {
    // What partner owes me
    return isMale ? option.female_owes_male : option.male_owes_female;
  }
};

const getExcuseQualityLabel = (values, excuse) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    return isMale ? excuse.male_to_female : excuse.female_to_male;
  } else {
    return isMale ? excuse.female_owes_male : excuse.male_owes_female;
  }
};

const getBriberyLabel = (values, attempt) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    return isMale ? attempt.male_to_female : attempt.female_to_male;
  } else {
    return isMale ? attempt.female_owes_male : attempt.male_owes_female;
  }
};

const getPastDeedLabel = (values, deed) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  
  if (isOwingPartner) {
    return isMale ? deed.male_to_female : deed.female_to_male;
  } else {
    return isMale ? deed.female_owes_male : deed.male_owes_female;
  }
};

export function FormFields({ values, onChange }) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label="Your Gender"
          key={`gender-${values.calculationType}`}
          tooltip={values.calculationType === 'owe_partner' 
            ? "Sorry lads, males pay 33% more points! 😅" 
            : "Ladies get a 25% discount on what they're owed! 💅"}
          value={values.gender}
          onChange={(e) => onChange('gender', e.target.value)}
          options={[
            { 
              value: 'male', 
              label: values.calculationType === 'owe_partner' 
                ? 'Male (Sorry lads, 33% male tax added 😅)' 
                : 'Male (Sorry lads, 25% ladies discount! 💅)'
            },
            { 
              value: 'female', 
              label: 'Female (Standard rate)'
            },
          ]}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label="Activity"
          tooltip="Choose what you're planning - each activity has its base point value!"
          value={values.activity}
          onChange={(e) => onChange('activity', e.target.value)}
          options={Object.entries(options.activities[values.calculationType] || {}).map(([key, activity]) => ({
            value: key,
            label: `${activity.category}: ${
              activity.label ||
              (values.gender === 'male' ? activity.male_label : activity.female_label)
            } (${Math.abs(activity.basePoints)} base points)`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label={getNoticeLabel(values.calculationType)}
          tooltip={values.calculationType === 'owe_partner'
            ? "More notice = fewer points. Surprise announcements cost extra!"
            : "Better response = fewer points. Having to ask multiple times costs extra!"}
          value={values.noticeGiven}
          onChange={(e) => onChange('noticeGiven', e.target.value)}
          options={getNoticeOptions(values.calculationType, values.gender).map(option => ({
            value: option.value,
            label: option.label,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label="Timing"
          tooltip={values.calculationType === 'owe_partner'
            ? "When are you planning this? Better timing = fewer points!"
            : "When did they do it? Good timing deserves recognition!"}
          value={values.timing}
          onChange={(e) => onChange('timing', e.target.value)}
          options={Object.entries(options.timingOptions).map(([key, option]) => ({
            value: key,
            label: `${getTimingLabel(values, option)} (${option.multiplier}x points)`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <FormInput
            type="number"
            label="Duration"
            tooltip="How long will this take?"
            value={values.duration}
            onChange={(e) => onChange('duration', Math.max(1, parseInt(e.target.value) || 1))}
            inputProps={{
              min: 1,
              style: { width: '100px' }
            }}
          />
          <FormInput
            type="select"
            label="Unit"
            value={values.durationUnit || 'days'}
            onChange={(e) => onChange('durationUnit', e.target.value)}
            options={options.durationUnits.map(({ value, label }) => ({
              value,
              label,
            }))}
            sx={{ minWidth: '120px' }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="slider"
          label={values.calculationType === 'owe_partner'
            ? "Number of Kids They're Managing 👶"
            : "Number of Kids You Managed 👶"}
          tooltip={values.calculationType === 'owe_partner'
            ? "More kids under their care = more points you'll owe! 👨‍👩‍👧‍👦"
            : "More kids you had to manage = more points they owe! 👨‍👩‍👧‍👦"}
          value={values.numKids}
          onChange={(e, newValue) => onChange('numKids', newValue)}
          min={0}
          max={5}
          marks={[
            { value: 0, label: 'None' },
            { value: 2, label: 'Couple' },
            { value: 5, label: 'Full house!' },
          ]}
          valueLabelDisplay="auto"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="slider"
          label={values.calculationType === 'owe_partner'
            ? `${getGenderLabel(values, "His", "Her")} Stress Level 😰`
            : "Your Stress Level When They Did This 😤"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Higher stress = more points you'll owe! Choose your moment wisely..."
            : "Higher stress = more points they'll owe! They should've known better..."}
          value={values.partnerStress}
          onChange={(e, newValue) => onChange('partnerStress', newValue)}
          marks={[
            { value: 0, label: 'Chilled 😌' },
            { value: 50, label: 'Stressed 😟' },
            { value: 100, label: 'Meltdown! 🤯' },
          ]}
          min={0}
          max={100}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="slider"
          label={values.calculationType === 'owe_partner'
            ? "Your Mood When Asking 😊"
            : "Your Mood When They Asked 😒"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Better mood = fewer points! Try to be cheerful about it!"
            : "Grumpier mood = more points! Were you in a bad mood when they asked?"}
          value={values.moodLevel}
          onChange={(e, newValue) => onChange('moodLevel', newValue)}
          marks={[
            { value: 0, label: 'Furious 😠' },
            { value: 5, label: 'Normal 🙂' },
            { value: 10, label: 'Delightful 😇' },
          ]}
          min={0}
          max={10}
        />
      </Grid>

      <Grid item xs={12}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Compensation You're Offering 🎁"
            : "What They Offered in Return 🤔"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Sweeten the deal to reduce your points debt!"
            : "Did they try to make it up to you?"}
          value={values.compensation}
          onChange={(e) => onChange('compensation', e.target.value)}
          options={options.compensationOptions.map(option => ({
            value: option.value,
            label: `${getCompensationLabel(values, option)} (${Math.abs(option.modifier)} points ${
              values.calculationType === 'owe_partner' ? 'off' : 'extra'
            })`,
          }))}
        />
      </Grid>

      <Grid item xs={12}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Your Previous Offenses 😅"
            : "Their Track Record 🤔"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Past incidents that might count against you..."
            : "Their history of similar behavior..."}
          value={values.previousOffenses}
          onChange={(e) => onChange('previousOffenses', e.target.value)}
          options={Object.values(options.previousOffensesList).map(offense => ({
            value: offense.value,
            label: `${getPreviousOffensesLabel(values, offense)} (+${offense.modifier} points)`,
          }))}
        />
      </Grid>

      <Grid item xs={12}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Special Time of Year? 📅"
            : "When Did This Happen? 📅"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Careful! Some times of year are extra expensive! 📅"
            : "Some seasons deserve extra recognition! 📅"}
          value={values.seasonalMultiplier}
          onChange={(e) => onChange('seasonalMultiplier', e.target.value)}
          options={options.seasonalFactors.map(factor => ({
            value: factor.value,
            label: `${getSeasonalLabel(values, factor)} (${factor.multiplier}x points)`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Your Excuse Quality 🎭"
            : "Their Excuse Quality 🤔"}
          tooltip={values.calculationType === 'owe_partner'
            ? "A good excuse can save you points! 🎭"
            : "How did they try to explain this one? 🤨"}
          value={values.excuseQuality}
          onChange={(e) => onChange('excuseQuality', e.target.value)}
          options={Object.entries(options.excuseQuality).map(([key, excuse]) => ({
            value: key,
            label: `${getExcuseQualityLabel(values, excuse)} (${excuse.modifier} points)`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="slider"
          label={values.calculationType === 'owe_partner'
            ? "Your Puppy Eyes Game 🥺"
            : "Their Guilt Trip Face 😏"}
          tooltip={values.calculationType === 'owe_partner'
            ? "How convincing is your sad face? Better performance = fewer points!"
            : "How hard did they try to make you feel bad? Nice try! 😒"}
          value={values.puppyEyes}
          onChange={(e, newValue) => onChange('puppyEyes', newValue)}
          min={0}
          max={10}
          marks={[
            { 
              value: 0, 
              label: values.calculationType === 'owe_partner'
                ? 'Not even trying 😐' 
                : 'No guilt trip 😌'
            },
            { 
              value: 5, 
              label: values.calculationType === 'owe_partner'
                ? 'Pretty good 🥺' 
                : 'Trying hard 😢'
            },
            { 
              value: 10, 
              label: values.calculationType === 'owe_partner'
                ? 'Oscar worthy 🌟' 
                : 'Full drama 🎭'
            },
          ]}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Your Bribery Attempts 🎁"
            : "Their Peace Offering 🤝"}
          tooltip={values.calculationType === 'owe_partner'
            ? "What are you willing to offer to reduce your points? 🎁"
            : "What did they try to bribe you with? 🤔"}
          value={values.bribery}
          onChange={(e) => onChange('bribery', e.target.value)}
          options={options.briberyAttempts.map(attempt => ({
            value: attempt.value,
            label: `${getBriberyLabel(values, attempt)} (${Math.abs(attempt.modifier)} points ${
              values.calculationType === 'owe_partner' ? 'off' : 'extra'
            })`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="slider"
          label={values.calculationType === 'owe_partner'
            ? `${getGenderLabel(values, "His", "Her")} Hunger Level 🍔`
            : "Your Hunger Level When They Asked 😤"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Never ask when they're hungry! Hangry = more points! 🍔"
            : "Were you hangry when they asked? They should've known better! 😤"}
          value={values.hungerLevel}
          onChange={(e, newValue) => onChange('hungerLevel', newValue)}
          min={0}
          max={10}
          marks={[
            { 
              value: 0, 
              label: values.calculationType === 'owe_partner'
                ? 'Just fed 😊' 
                : 'Well fed 😌'
            },
            { 
              value: 5, 
              label: values.calculationType === 'owe_partner'
                ? 'Getting hungry 😐' 
                : 'Bit peckish 😑'
            },
            { 
              value: 10, 
              label: values.calculationType === 'owe_partner'
                ? 'HANGRY! 🤬' 
                : 'Starving! 😠'
            },
          ]}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "Your Recent Good Deeds 😇"
            : "Nice Things They've Done Recently 💝"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Cash in on your good behavior to reduce points! 😇"
            : "Remember when they were extra nice? Reduce their debt! 💫"}
          value={values.pastDeeds}
          onChange={(e) => onChange('pastDeeds', e.target.value)}
          options={options.pastGoodDeeds.map(deed => ({
            value: deed.value,
            label: `${getPastDeedLabel(values, deed)} (${Math.abs(deed.modifier)} points ${
              values.calculationType === 'owe_partner' 
                ? 'off' 
                : deed.modifier > 0 
                  ? 'extra' 
                  : 'off'
            })`,
          }))}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormInput
          type="select"
          label={values.calculationType === 'owe_partner'
            ? "When Are You Asking? ⏰"
            : "When Did They Ask? 😒"}
          tooltip={values.calculationType === 'owe_partner'
            ? "Choose your moment wisely! Bad timing = more points!"
            : "Did they pick their moment well? Bad timing = more points!"}
          value={values.requestTiming}
          onChange={(e) => onChange('requestTiming', e.target.value)}
          options={options.requestTimingOptions.map(option => ({
            value: option.value,
            label: `${getRequestTimingLabel(values, option)} (${option.multiplier}x points)`,
          }))}
        />
      </Grid>
    </Grid>
  );
} 