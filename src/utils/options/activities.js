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