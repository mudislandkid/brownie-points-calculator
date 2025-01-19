export const durationUnits = [
  { value: 'minutes', label: 'Minutes', multiplier: 1/1440 }, // 1/24/60 of a day
  { value: 'hours', label: 'Hours', multiplier: 1/24 }, // 1/24 of a day
  { value: 'days', label: 'Days', multiplier: 0.8 },
  { value: 'weeks', label: 'Weeks', multiplier: 4 },
];

export const genderMultiplier = {
  male: {
    owe_partner: 1.15,
    owe_me: 1.1,
  }
};

export const kidMultiplier = 0.1;
export const stressMultiplier = 0.002; 