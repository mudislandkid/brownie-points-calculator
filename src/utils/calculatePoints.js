import * as options from './calculationOptions';

export const calculatePoints = (values) => {
  if (!values.activity || !values.gender) return 0;

  const activity = options.activities[values.calculationType][values.activity];
  if (!activity) return 0;

  let points = Math.abs(activity.basePoints);

  // Apply duration multiplier
  const durationUnit = options.durationUnits.find(unit => unit.value === values.durationUnit);
  if (durationUnit) {
    points *= values.duration * durationUnit.multiplier;
  }

  // Apply notice/response time multiplier
  if (values.noticeGiven) {
    switch (values.noticeGiven) {
      case 'none':
        points *= 1.3;  // No notice = 30% more points
        break;
      case 'last_minute':
        points *= 1.2;  // Last minute = 20% more points
        break;
      case 'some':
        points *= 0.9;  // Some notice = 10% discount
        break;
      case 'plenty':
        points *= 0.8;  // Plenty of notice = 20% discount
        break;
      default:
        break;
    }
  }

  // Apply gender multiplier
  if (values.gender === 'male') {
    points *= options.genderMultiplier.male[values.calculationType];
  }

  // Apply kids multiplier
  points *= (1 + (values.numKids * options.kidMultiplier));

  // Apply stress multiplier
  points *= (1 + (values.partnerStress * options.stressMultiplier));

  // Apply mood level modifier
  points *= (1 + ((10 - values.moodLevel) * 0.1));

  // Apply timing multiplier
  if (values.timing && options.timingOptions[values.timing]) {
    points *= options.timingOptions[values.timing].multiplier;
  }

  // Apply seasonal multiplier
  const seasonalFactor = options.seasonalFactors.find(factor => factor.value === values.seasonalMultiplier);
  if (seasonalFactor) {
    points *= seasonalFactor.multiplier;
  }

  // Apply excuse quality modifier
  if (values.excuseQuality && options.excuseQuality[values.excuseQuality]) {
    points += options.excuseQuality[values.excuseQuality].modifier;
  }

  // Apply previous offenses modifier
  const previousOffense = options.previousOffensesList.find(offense => offense.value === values.previousOffenses);
  if (previousOffense) {
    points += previousOffense.modifier;
  }

  // Apply compensation modifier
  const compensation = options.compensationOptions.find(comp => comp.value === values.compensation);
  if (compensation) {
    points += compensation.modifier;
  }

  // Apply bribery modifier
  const bribery = options.briberyAttempts.find(attempt => attempt.value === values.bribery);
  if (bribery) {
    points += bribery.modifier;
  }

  // Apply past deeds modifier
  const pastDeed = options.pastGoodDeeds.find(deed => deed.value === values.pastDeeds);
  if (pastDeed) {
    points += pastDeed.modifier;
  }

  // Apply request timing multiplier
  const requestTiming = options.requestTimingOptions.find(timing => timing.value === values.requestTiming);
  if (requestTiming) {
    points *= requestTiming.multiplier;
  }

  // Apply hunger level modifier
  points *= (1 + (values.hungerLevel * 0.1));

  // Apply puppy eyes modifier
  points *= (1 - (values.puppyEyes * 0.05));

  // Round to nearest whole number
  return Math.round(points);
}; 