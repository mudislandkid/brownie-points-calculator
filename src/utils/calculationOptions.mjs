// Move all the options objects here (activities, noticeOptions, etc.)
export const activities = {
  // Activities when calculating what I owe my partner
  owe_partner: {
    // Gender-neutral options
    weekend_away: { label: "Weekend Away with Friends 🎉", basePoints: 12, category: "Social" },
    
    // Gender-specific activities
    holiday: { 
      male_label: "Lads Trip Abroad 🏖️", 
      female_label: "Girls Trip Abroad 🌴",
      basePoints: 25,
      category: "Social" 
    },
    night_out: { 
      male_label: "Boys Night Out & Club 🍻", 
      female_label: "Girls Night Out & Dancing 💃", 
      basePoints: 8,
      category: "Social" 
    },
    sports_event: { 
      male_label: "Premier League Match Day ⚽", 
      female_label: "Luxury Spa Weekend 💆‍♀️", 
      basePoints: 12,
      category: "Social" 
    },
    gaming_event: { 
      male_label: "Gaming Convention Weekend 🎮", 
      female_label: "Shopping City Break 🛍️", 
      basePoints: 15,
      category: "Social" 
    },
    hobby_day: { 
      male_label: "Golf Tournament Day ⛳", 
      female_label: "Day at Beauty Salon 💅", 
      basePoints: 10, 
      category: "Social" 
    },
    outdoor_activity: { 
      male_label: "Fishing Trip with Mates 🎣", 
      female_label: "Yoga Retreat Weekend 🧘‍♀️", 
      basePoints: 15, 
      category: "Social" 
    },
    evening_event: { 
      male_label: "Poker Tournament Night 🃏", 
      female_label: "Wine & Paint Night 🎨", 
      basePoints: 8, 
      category: "Social" 
    },
    sports_trip: { 
      male_label: "Away Match Road Trip 🚗", 
      female_label: "Musical Theatre Trip 🎭", 
      basePoints: 20,
      category: "Social" 
    },
    weekend_event: { 
      male_label: "Car Show Weekend 🚗", 
      female_label: "Craft Fair Weekend 🎨", 
      basePoints: 12, 
      category: "Social" 
    },
    adventure: { 
      male_label: "Paintball Tournament 🎯", 
      female_label: "Pottery Workshop 🏺", 
      basePoints: 15, 
      category: "Social" 
    },
    convention: { 
      male_label: "Comic Con Weekend 🦸‍♂️", 
      female_label: "Fashion Show Event 👗", 
      basePoints: 20, 
      category: "Social" 
    },
    sports_watching: { 
      male_label: "Champions League Final 🏆", 
      female_label: "Dance Show Night 💃", 
      basePoints: 18, 
      category: "Social" 
    },
    day_out: { 
      male_label: "Track Day Experience 🏎️", 
      female_label: "Afternoon Tea Party 🫖", 
      basePoints: 15, 
      category: "Social" 
    },
    hobby_weekend: { 
      male_label: "Mountain Biking Weekend 🚵", 
      female_label: "Baking Masterclass 🧁", 
      basePoints: 20, 
      category: "Social" 
    },
    entertainment: { 
      male_label: "Fantasy Draft Party 🏈", 
      female_label: "Book Club Retreat 📚", 
      basePoints: 12, 
      category: "Social" 
    },
    group_activity: { 
      male_label: "Pub Crawl with Boys 🍺", 
      female_label: "Cocktail Making Class 🍸", 
      basePoints: 15, 
      category: "Social" 
    },
    tech_event: { 
      male_label: "LAN Party Marathon 💻", 
      female_label: "Instagram Photo Shoot 📸", 
      basePoints: 12, 
      category: "Social" 
    },
    extreme_sport: { 
      male_label: "Skydiving Day 🪂", 
      female_label: "Rock Climbing Day 🧗‍♀️", 
      basePoints: 25, 
      category: "Social" 
    },
    seasonal_event: { 
      male_label: "Beer Festival Weekend 🍺", 
      female_label: "Food Festival Weekend 🍷", 
      basePoints: 20, 
      category: "Social" 
    },
    camping: { 
      male_label: "Camping with the Boys 🏕️", 
      female_label: "Glamping Weekend 🌟", 
      basePoints: 18, 
      category: "Social" 
    },
  },
  
  // Activities when calculating what partner owes me
  owe_me: {
    // Gender-neutral options
    solo_parenting: { label: "Solo Parenting Weekend 👶", basePoints: 20, category: "Family" },
    
    // Gender-specific activities
    diy_project: { 
      male_label: "Building Garden Deck 🔨", 
      female_label: "Room Makeover Project 🎨", 
      basePoints: 25,
      category: "House" 
    },
    maintenance: { 
      male_label: "Full Car Service 🚗", 
      female_label: "Wardrobe Organization 👔", 
      basePoints: 15,
      category: "House" 
    },
    cleaning: { 
      male_label: "Garage Deep Clean 🧹", 
      female_label: "House Deep Clean ✨", 
      basePoints: 18,
      category: "House" 
    },
    cooking: { 
      male_label: "BBQ Party for Family 🍖", 
      female_label: "Dinner Party Hosting 🍽️", 
      basePoints: 15, 
      category: "House" 
    },
    admin_work: { 
      male_label: "Tax Return Filing 📊", 
      female_label: "Family Calendar Planning 📅", 
      basePoints: 20, 
      category: "Admin" 
    },
    garden: { 
      male_label: "Garden Landscaping 🌳", 
      female_label: "Garden Planting 🌺", 
      basePoints: 22, 
      category: "House" 
    },
    tech_support: { 
      male_label: "Home Network Setup 💻", 
      female_label: "Photo Album Creating 📸", 
      basePoints: 15, 
      category: "House" 
    },
    shopping: { 
      male_label: "Hardware Store Run 🔧", 
      female_label: "Weekly Meal Planning 🛒", 
      basePoints: 25, 
      category: "House" 
    },
    pet_care: { 
      male_label: "Dog Training Week 🐕", 
      female_label: "Pet Grooming Day 🐱", 
      basePoints: 18, 
      category: "Family" 
    },
    vehicle: { 
      male_label: "Car Wash & Wax 🚘", 
      female_label: "School Run Week 🚗", 
      basePoints: 30, 
      category: "House" 
    },
    party: { 
      male_label: "Kids Party Setup 🎈", 
      female_label: "Birthday Party Planning 🎂", 
      basePoints: 20, 
      category: "Family" 
    },
    repairs: { 
      male_label: "Fix All House Issues 🔧", 
      female_label: "Mend All Clothes 🧵", 
      basePoints: 25, 
      category: "House" 
    },
    organization: { 
      male_label: "Tool Shed Organizing 🔨", 
      female_label: "Kitchen Reorganizing 🍳", 
      basePoints: 15, 
      category: "House" 
    },
    errands: { 
      male_label: "All Weekend Errands 🚗", 
      female_label: "All Gift Shopping 🎁", 
      basePoints: 12, 
      category: "Family" 
    },
    planning: { 
      male_label: "Holiday Planning 🏖️", 
      female_label: "Christmas Planning 🎄", 
      basePoints: 20, 
      category: "Family" 
    },
    social: { 
      male_label: "Host Sports Night 🏈", 
      female_label: "Host Coffee Morning ☕", 
      basePoints: 25, 
      category: "Family" 
    },
    paperwork: { 
      male_label: "Sort Insurance Papers 📄", 
      female_label: "Organize Family Files 📁", 
      basePoints: 15, 
      category: "Admin" 
    },
    seasonal: { 
      male_label: "Christmas Lights Setup 🎄", 
      female_label: "Seasonal Decorating 🎀", 
      basePoints: 18, 
      category: "House" 
    },
    storage: { 
      male_label: "Attic Organization 📦", 
      female_label: "Closet Clear Out 👕", 
      basePoints: 22, 
      category: "House" 
    },
    childcare: { 
      male_label: "Sports Day Coaching ⚽", 
      female_label: "School Project Help 📚", 
      basePoints: 15, 
      category: "Family" 
    },
  },
};

export const noticeOptions = {
  none: { 
    male_label: "Had to ask multiple times 😤",
    female_label: "They had to drop major hints 💅",
    multiplier_owe_partner: 1.2,
    multiplier_owe_me: 0.8  // Slow response = fewer points
  },
  last_minute: { 
    male_label: "Did it after nagging 🙄",
    female_label: "Did it after constant reminders 📝",
    multiplier_owe_partner: 1.1,
    multiplier_owe_me: 0.9  // Delayed response = fewer points
  },
  some: { 
    male_label: "Did it when asked once 👍",
    female_label: "Did it when mentioned once 👌",
    multiplier_owe_partner: 1.0,
    multiplier_owe_me: 1.0  // Neutral response
  },
  plenty: { 
    male_label: "Did it without being asked! 🌟",
    female_label: "Noticed it needed doing! ✨",
    multiplier_owe_partner: 0.9,
    multiplier_owe_me: 1.2  // Proactive response = more points!
  },
};

export const timingOptions = {
  perfect: { 
    male_to_female: "Instead of her me-time 👌",
    female_to_male: "Instead of his gaming time 🎮",
    female_owes_male: "Instead of his gaming time 🎮",
    male_owes_female: "Instead of her me-time 👌",
    multiplier: 0.9 
  },
  good: { 
    male_to_female: "While she's managing the kids 👨‍👩‍👧",
    female_to_male: "While he's managing the kids 👨‍👩‍👧",
    female_owes_male: "While he was managing the kids 👨‍👩‍👧",
    male_owes_female: "While she was managing the kids 👨‍👩‍👧",
    multiplier: 1.0 
  },
  inconvenient: { 
    male_to_female: "During her yoga session 🧘‍♀️",
    female_to_male: "During his football match ⚽",
    female_owes_male: "During his football match ⚽",
    male_owes_female: "During her yoga session 🧘‍♀️",
    multiplier: 1.1 
  },
  bad: { 
    male_to_female: "Made her cancel her plans 😫",
    female_to_male: "Made him cancel his plans 🎮",
    female_owes_male: "Made him cancel his plans 🎮",
    male_owes_female: "Made her cancel her plans 😫",
    multiplier: 1.2 
  },
  worst: { 
    male_to_female: "Right in the middle of her spa day 😤",
    female_to_male: "Right in the middle of his big game 🏆",
    female_owes_male: "Right in the middle of his big game 🏆",
    male_owes_female: "Right in the middle of her spa day 😤",
    multiplier: 1.3 
  },
};

export const compensationOptions = [
  { 
    value: "chores",
    male_to_female: "Do all the cleaning for a month 🧹",
    female_to_male: "Won't ask him to do anymore DIY project for a month 🔨",
    female_owes_male: "She promised to fix everything 🔧",
    male_owes_female: "He promised to deep clean 🧹",
    modifier: -5 
  },
  { 
    value: "massage",
    male_to_female: "I'll give her a spa treatment 💆‍♀️",
    female_to_male: "I'll give him a back rub 💆‍♂️",
    female_owes_male: "She promised a back rub 💆‍♂️",
    male_owes_female: "He promised a spa treatment 💆‍♀️",
    modifier: -8 
  },
  { 
    value: "treats",
    male_to_female: "I'll get her chocolates & wine 🍫",  // Male owing female
    female_to_male: "I'll get him beer & takeaway 🍺",  // Female owing male
    female_owes_male: "She promised beer & takeaway 🍺",  // Female owes male
    male_owes_female: "He promised chocolates & wine 🍫",  // Male owes female
    modifier: -3 
  },
  { 
    value: "gift",
    male_to_female: "I'll buy her that thing she wants 🛍️",
    female_to_male: "I'll get him that game he wants 🎮",
    female_owes_male: "She promised to buy that thing he wants 🎮",
    male_owes_female: "He promised to buy that thing she wants 🛍️",
    modifier: -15 
  },
  {
    value: "watch_together",
    male_to_female: "I'll watch rom-coms without complaining 🎬",
    female_to_male: "I'll watch sports without complaining 📺",
    female_owes_male: "She'll watch his matches with him 📺",
    male_owes_female: "He'll watch her shows with her 🎬",
    modifier: -7
  },
  {
    value: "activity_support",
    male_to_female: "I'll be Instagram boyfriend for a month 📸",
    female_to_male: "I'll be golf caddy for a day ⛳",
    female_owes_male: "She'll be his golf caddy ⛳",
    male_owes_female: "He'll be her Instagram photographer 📸",
    modifier: -6
  },
  {
    value: "social_media",
    male_to_female: "I'll learn all the makeup brands 💄",
    female_to_male: "I'll join your fantasy league 🏆",
    female_owes_male: "She'll join his fantasy league 🏆",
    male_owes_female: "He'll learn all the makeup brands 💄",
    modifier: -7
  }
];

export const previousOffensesList = [
  { 
    value: "similar_month",
    male_to_female: "I've already done this twice this month 🙄",  // Male owing female
    female_to_male: "I've already done this twice this month 😒",  // Female owing male
    female_owes_male: "She's already done this twice this month 😒",  // Female owes male
    male_owes_female: "He's already done this twice this month 🙄",  // Male owes female
    modifier: 15 
  },
  { 
    value: "repeat_offender",
    male_to_female: "I'm a known repeat offender 😤",
    female_to_male: "I'm a known repeat offender 😫",
    female_owes_male: "She's a known repeat offender 😫",
    male_owes_female: "He's a known repeat offender 😤",
    modifier: 15 
  },
  {
    value: "last_minute",
    male_to_female: "I always do this last minute 🙄",
    female_to_male: "I always spring things last minute 😒",
    female_owes_male: "She always springs things last minute 😒",
    male_owes_female: "He always pulls this last minute stuff 🙄",
    modifier: 12
  },
  {
    value: "budget_breaker",
    male_to_female: "I'm already over budget this month 💸",
    female_to_male: "I'm already over budget this month 💳",
    female_owes_male: "She's already maxed out this month 💳",
    male_owes_female: "He's already over budget this month 💸",
    modifier: 18
  },
  {
    value: "friend_priority",
    male_to_female: "I always put the lads first 🍻",
    female_to_male: "I always put my friends first 👯‍♀️",
    female_owes_male: "She always puts the girls first 👯‍♀️",
    male_owes_female: "He always puts the lads first 🍻",
    modifier: 16
  },
  { 
    value: "forgot_makeup",
    male_to_female: "Still owe her for last spa day 💆‍♀️",
    female_to_male: "Still owe him for last match day ⚽",
    female_owes_male: "Still owes him for last football season ⚽",
    male_owes_female: "Still owes her for last shopping trip 🛍️",
    modifier: 10 
  },
  { 
    value: "promised_not",
    male_to_female: "I promised to stop doing this 🤦‍♂️",
    female_to_male: "I promised to stop doing this 🤦‍♀️",
    female_owes_male: "She promised to stop doing this 🤦‍♀️",
    male_owes_female: "He promised to stop doing this 🤦‍♂️",
    modifier: 20 
  }
];

export const seasonalFactors = [
  { 
    value: "birthday_month", 
    male_to_female: "During her birthday month 🎂",  // Male owing female
    female_to_male: "During his birthday month 🎂",  // Female owing male
    female_owes_male: "During his birthday month 🎂",  // Female owes male
    male_owes_female: "During her birthday month 🎂",  // Male owes female
    multiplier: 1.2 
  },
  { 
    value: "valentine", 
    male_to_female: "Right before Valentine's Day 💝",
    female_to_male: "Right before Valentine's Day ❤️",
    female_owes_male: "Right before his Valentine's plans 💝",
    male_owes_female: "Right before her Valentine's plans ❤️",
    multiplier: 1.25 
  },
  { 
    value: "anniversary", 
    male_to_female: "Right before our anniversary 💑",
    female_to_male: "Right before our anniversary 💑",
    female_owes_male: "Right before our anniversary 💑",
    male_owes_female: "Right before our anniversary 💑",
    multiplier: 1.2 
  },
  { 
    value: "christmas", 
    male_to_female: "During her holiday planning 🎄",
    female_to_male: "During his football season finals 🏆",
    female_owes_male: "During his football season finals 🏆",
    male_owes_female: "During her holiday planning 🎄",
    multiplier: 1.25 
  },
  { 
    value: "summer_hols", 
    male_to_female: "During her wedding season plans 👰",
    female_to_male: "During his fantasy league finals 🏆",
    female_owes_male: "During his fantasy league finals 🏆",
    male_owes_female: "During her wedding season plans 👰",
    multiplier: 1.2 
  },
];

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

export const briberyAttempts = [
  { 
    value: "coffee_week",
    male_to_female: "I'll make her coffee & treats daily ☕",
    female_to_male: "I'll make him breakfast all week 🍳",
    female_owes_male: "She promised daily coffee & treats ☕",
    male_owes_female: "He offered to make breakfast all week 🍳",
    modifier: -5 
  },
  { 
    value: "foot_massage",
    male_to_female: "I'll watch all her shows with her 📺",
    female_to_male: "I'll watch the whole match series 📺",
    female_owes_male: "She'll watch the whole match series 📺",
    male_owes_female: "He'll be Instagram boyfriend all month 📸",
    modifier: -8 
  },
  { 
    value: "chores_month",
    male_to_female: "I'll do all cleaning for a month 🧹",
    female_to_male: "I'll handle all DIY projects 🔨",
    female_owes_male: "She'll handle all DIY projects 🔨",
    male_owes_female: "He'll do all cleaning for a month 🧹",
    modifier: -15 
  },
  { 
    value: "vacation_plan",
    male_to_female: "I'll organize a spa retreat 💆‍♀️",
    female_to_male: "I'll plan a gaming weekend 🎮",
    female_owes_male: "She'll plan a gaming weekend 🎮",
    male_owes_female: "He'll organize a spa retreat 💆‍♀️",
    modifier: -10 
  },
  {
    value: "social_media",
    male_to_female: "I'll learn all the makeup brands 💄",
    female_to_male: "I'll join your fantasy league 🏆",
    female_owes_male: "She'll join your fantasy league 🏆",
    male_owes_female: "He'll learn all the makeup brands 💄",
    modifier: -7
  },
  {
    value: "hobby_support",
    male_to_female: "I'll attend yoga classes 🧘‍♂️",
    female_to_male: "I'll learn the offside rule ⚽",
    female_owes_male: "She'll learn the offside rule ⚽",
    male_owes_female: "He'll attend yoga classes 🧘‍♂️",
    modifier: -12
  }
];

export const pastGoodDeeds = [
  {
    value: "nothing",
    male_to_female: "I didn't even try to make it up to her 😒",
    female_to_male: "I didn't even try to make it up to him 😤",
    female_owes_male: "She didn't even try to make it up to him 😒",
    male_owes_female: "He didn't even try to make it up to her 😤",
    modifier: 3
  },
  {
    value: "made_worse",
    male_to_female: "I showed all my mates the photos 📸",
    female_to_male: "I bragged about it on social media 📱",
    female_owes_male: "She bragged about it on social media 📱",
    male_owes_female: "He showed all his mates the photos 📸",
    modifier: 4
  },
  {
    value: "attitude",
    male_to_female: "I said she was being dramatic 🙄",
    female_to_male: "I said he was overreacting 🙄",
    female_owes_male: "She said he was being dramatic about it 🙄",
    male_owes_female: "He said she was overreacting 🙄",
    modifier: 5
  },
  { 
    value: "surprise_meal",
    male_to_female: "I made her breakfast in bed ☕",
    female_to_male: "I cooked him a fancy dinner 🍝",
    female_owes_male: "She made him breakfast in bed ☕",
    male_owes_female: "He cooked her a fancy dinner 🍝",
    modifier: -2
  },
  { 
    value: "parenting",
    male_to_female: "I took the kids for the weekend 👶",
    female_to_male: "I handled all school runs 🚗",
    female_owes_male: "She took the kids for the weekend 👶",
    male_owes_female: "He handled all school runs 🚗",
    modifier: -5
  },
  { 
    value: "thoughtful",
    male_to_female: "I let her have a spa day 💆‍♀️",
    female_to_male: "I let him watch the match in peace 📺",
    female_owes_male: "She let him watch the match in peace 📺",
    male_owes_female: "He let her have a spa day 💆‍♀️",
    modifier: -3
  },
  { 
    value: "support",
    male_to_female: "I went shopping with her all day 🛍️",
    female_to_male: "I came to his football game ⚽",
    female_owes_male: "She came to his football game ⚽",
    male_owes_female: "He went shopping with her all day 🛍️",
    modifier: -4
  },
  {
    value: "extra_effort",
    male_to_female: "I reorganized her closet perfectly 👕",
    female_to_male: "I organized his gaming setup 🎮",
    female_owes_male: "She organized his gaming setup 🎮",
    male_owes_female: "He reorganized her closet perfectly 👕",
    modifier: -4
  },
  {
    value: "special_day",
    male_to_female: "I arranged a girls night out 💃",
    female_to_male: "I planned a surprise lads day 🍻",
    female_owes_male: "She planned a surprise lads day 🍻",
    male_owes_female: "He arranged a girls night out 💃",
    modifier: -3
  }
];

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