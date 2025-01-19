// import * as options from './calculationOptions';

const getComment = (values, points) => {
  const isOwingPartner = values.calculationType === 'owe_partner';
  const isMale = values.gender === 'male';
  const absPoints = Math.abs(points);

  // Get severity level based on points and context
  if (absPoints === 0) return "Fill in more details to calculate your score! 🎯";

  // When owing partner, high points are bad
  if (isOwingPartner) {
    if (absPoints >= 100) {
      const partner = isMale ? "her" : "him";
      return `Time to move countries and don't tell ${partner} your new address! 🏃‍♂️✈️`;
    }
    if (absPoints < 10) return "You got off lightly! 😌";
    if (absPoints < 20) return "Could've been worse! 😅";
    if (absPoints < 30) return "That's gonna hurt! 😬";
    if (absPoints < 40) return "Hope it was worth it! 😳";
    if (absPoints < 50) return "You're in the doghouse now! 😱";
    if (absPoints < 60) return "Time to grovel! ⚠️";
    if (absPoints < 70) return "Better start saving up! 💸";
    if (absPoints < 85) return "You'll never hear the end of this! 🙈";
    return "You might want to write a formal apology! 💀";
  }
  
  // When partner owes me, high points are good
  const partner = isMale ? "She" : "He";
  if (absPoints < 10) return `${partner} barely owes you anything 😒`;
  if (absPoints < 20) return `${partner} owes you one! 😌`;
  if (absPoints < 30) return `${partner}'s got some making up to do! 😏`;
  if (absPoints < 40) return `${partner}'s in trouble! 😈`;
  if (absPoints < 50) return `${partner}'s gonna regret this! 😎`;
  if (absPoints < 60) return "Time to cash in those points! 🎯";
  if (absPoints < 70) return "You've hit the jackpot! 🎰";
  if (absPoints < 85) return "You're set for life! 🏆";
  return "You'll never have to do chores again! 👑";
};

export const getScoreComment = (values, points) => {
  if (!values.gender || !points) {
    return "Fill in the details to calculate your brownie points! 🍪";
  }
  return getComment(values, points);
}; 