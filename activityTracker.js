// Example weekly activity data

const myWeek = [
  { day: "Monday", activity: "running", category: "physical", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "morning" },
  { day: "Tuesday", activity: "coding", category: "creative", hoursSpent: 3, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Wednesday", activity: "meeting friends", category: "social", hoursSpent: 2, enjoyment: 7, timeOfDay: "evening" },
  { day: "Thursday", activity: "reading", category: "creative", hoursSpent: 1, enjoyment: 6, timeOfDay: "afternoon" },
  { day: "Friday", activity: "cooking", category: "creative", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening" },
  { day: "Saturday", activity: "hiking", category: "physical", hoursSpent: 2.5, enjoyment: 9, timeOfDay: "morning" },
  { day: "Sunday", activity: "watching movies", category: "social", hoursSpent: 3, enjoyment: 6, timeOfDay: "evening" }
];

// Predictions
// 1. The highest enjoyment activity will likely be 'coding' on Tuesday or 'hiking' on Saturday.
// 2. 'Creative' will likely dominate the week due to the nature of activities like coding, cooking, and reading.
// 3. Evenings will likely be the most frequent time for social activities.

// Total hours spent on physical activities
function totalPhysicalHours(week) {
  return week
    .filter(entry => entry.category === "physical")  // Filter for physical activities
    .reduce((total, entry) => total + entry.hoursSpent, 0);  // Sum the hours
}

console.log("Total hours spent on physical activities:", totalPhysicalHours(myWeek));
// Average enjoyment by time of day
function averageEnjoymentByTimeOfDay(week, timeOfDay) {
  const filteredActivities = week.filter(entry => entry.timeOfDay === timeOfDay);
  const totalEnjoyment = filteredActivities.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return totalEnjoyment / filteredActivities.length;
}

console.log("Average enjoyment in the evening:", averageEnjoymentByTimeOfDay(myWeek, "evening"));
// Most common category
function mostCommonCategory(week) {
  const categories = week.map(entry => entry.category);  // Map categories to an array
  return categories.reduce((mostCommon, category) => {
    mostCommon[category] = (mostCommon[category] || 0) + 1; // Count each category
    return mostCommon;
  }, {});
}

console.log("Most common activity category:", mostCommonCategory(myWeek));
// Low-effort, high-enjoyment activities
function lowEffortHighEnjoyment(week) {
  return week.filter(entry => entry.hoursSpent < 2 && entry.enjoyment > 7);
}

console.log("Low-effort, high-enjoyment activities:", lowEffortHighEnjoyment(myWeek));
