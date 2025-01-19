export const excuseQuality = {
  rehearsed: { 
    male_to_female: "My friend is going through a breakup 💔",
    female_to_male: "My friend needs gaming support 🎮",
    female_owes_male: "She showed me her shopping powerpoint 🛍️",
    male_owes_female: "He showed me his game schedule powerpoint 🎮",
    modifier: 10  // Pretty weak excuse
  },
  creative: { 
    male_to_female: "My friend is having a really hard time 😢",
    female_to_male: "Something about a rare gaming drop 🎮",
    female_owes_male: "She had some story about a sale 🛍️",
    male_owes_female: "He had some gaming tournament excuse 🎮",
    modifier: 5   // Also not great
  },
  weak: { 
    male_to_female: "Someone needs emotional support 🫂",
    female_to_male: "Something about match tickets 🎟️",
    female_owes_male: "She mentioned something about friends 🫂",
    male_owes_female: "He just said it was important 🤔",
    modifier: -8  // Valid reason for being there for someone
  },
  none: { 
    male_to_female: "My friend is really struggling mentally 🤗",
    female_to_male: "It's a really important match 🏆",
    female_owes_male: "She just showed me her to-do list 📝",
    male_owes_female: "He just showed me his game stats 📊",
    modifier: -15  // Mental health support is important
  },
  elaborate: {
    male_to_female: "Complex story about friend's marriage 💍",
    female_to_male: "Detailed story about tournament rankings 🏆",
    female_owes_male: "She had a whole presentation ready 📊",
    male_owes_female: "He had a spreadsheet prepared 📈",
    modifier: 15   // Too detailed to be believable
  },
  guilt_trip: {
    male_to_female: "My friend just got divorced 😔",
    female_to_male: "My team really needs me 🎮",
    female_owes_male: "She said her friends are counting on her 👯‍♀️",
    male_owes_female: "He said his team can't do it without him 🎮",
    modifier: 12   // Using serious issues as excuses isn't cool
  }
}; 