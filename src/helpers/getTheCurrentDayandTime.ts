export default function GetTheCurrentDayAndTime() {
  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let todayInName = "";
  for (let i = 0; i < days.length; i++) {
    if (day === i) {
      todayInName = days[i];
    }
  }

  return {
    time: `${hours}:${minutes}`,
    todayInName: todayInName,
  };
}
