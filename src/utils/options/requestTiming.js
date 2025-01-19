export const requestTimingOptions = [
  { 
    value: 'perfect', 
    male_to_female: "I asked after making her coffee ☕",
    female_to_male: "I asked after cooking his breakfast 🍳",
    female_owes_male: "She asked after making his coffee ☕",
    male_owes_female: "He asked after cooking her breakfast 🍳",
    multiplier: 0.8
  },
  { 
    value: 'good', 
    male_to_female: "I asked during her TV break 📺",
    female_to_male: "I asked between his matches 🎮",
    female_owes_male: "She asked during commercial break 📺",
    male_owes_female: "He asked between shopping stores 🛍️",
    multiplier: 0.9
  },
  { 
    value: 'neutral', 
    male_to_female: "I asked during normal chat 💬",
    female_to_male: "I asked during casual chat 🗣️",
    female_owes_male: "She asked during normal conversation 💬",
    male_owes_female: "He asked during casual chat 🗣️",
    multiplier: 1.0
  },
  { 
    value: 'bad', 
    male_to_female: "I asked during her spa day 💆‍♀️",
    female_to_male: "I asked during his match 📺",
    female_owes_male: "She asked during his match 📺",
    male_owes_female: "He asked during her spa treatment 💆‍♀️",
    multiplier: 1.2
  },
  { 
    value: 'worst', 
    male_to_female: "I asked before her morning coffee 😠",
    female_to_male: "I asked during his game finals 🎮",
    female_owes_male: "She asked before his morning coffee 😠",
    male_owes_female: "He asked during her phone call 📱",
    multiplier: 1.4
  }
]; 