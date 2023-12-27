const year = now.getFullYear(); // Get the current year as a four-digit number (e.g., 2023)
const month = now.getMonth(); // Get the current month as a number (0-11; 0 represents January, 11 represents December)
const date = now.getDate(); // Get the current day as a number (1-31)
const dayOfWeek = now.getDay(); // Get the current day of the week as a number (0-6; 0 represents Sunday, 6 represents Saturday)
const hours = now.getHours(); // Get the current hour (0-23)
const minutes = now.getMinutes(); // Get the current minute (0-59)
const seconds = now.getSeconds(); // Get the current second (0-59)
const milliseconds = now.getMilliseconds(); // Get the current millisecond (0-999)
const timeInMillis = now.getTime(); // Get the current time in milliseconds since January 1, 1970


console.log('Year:', year);
console.log('Month:', month);
console.log('Date:', date);
console.log('Day of Week:', dayOfWeek);
console.log('Hours:', hours);
console.log('Minutes:', minutes);
console.log('Seconds:', seconds);
console.log('Milliseconds:', milliseconds);
console.log('Time in milliseconds since January 1, 1970:', timeInMillis);