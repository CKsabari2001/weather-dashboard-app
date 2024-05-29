export default function getSunRiseTime(timeInSec: number) {
  try {
    const unixTimestamp = timeInSec; // Sunrise time, in seconds
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
