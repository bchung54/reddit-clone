function timeAgoDisplay(timestamp) {
  const present = new Date();
  const timeElapsed = present.getTime() - timestamp.getTime();
  if (timeElapsed < 6e4) {
    return 'just now';
  }
  if (timeElapsed < 3.6e6) {
    const minutesElapsed = Math.floor(timeElapsed / 6e4);
    return minutesElapsed === 1
      ? '1 minute ago'
      : `${minutesElapsed} minutes ago`;
  }
  if (timeElapsed < 8.64e7) {
    const hoursElapsed = Math.floor(timeElapsed / 3.6e6);
    return hoursElapsed === 1 ? '1 hour ago' : `${hoursElapsed} hours ago`;
  }
  if (timeElapsed < 2.592e9) {
    const daysElapsed = Math.floor(timeElapsed / 8.64e7);
    return daysElapsed === 1 ? '1 day ago' : `${daysElapsed} days ago`;
  }
  const yearsElapsed = present.getFullYear() - timestamp.getFullYear();
  const monthsElapsed =
    present.getMonth() - timestamp.getMonth() + 12 * yearsElapsed;
  if (yearsElapsed < 1) {
    return monthsElapsed === 1 ? '1 month ago' : `${monthsElapsed} months ago`;
  }
  return yearsElapsed === 1 ? '1 year ago' : `${yearsElapsed} years ago`;
}

export default timeAgoDisplay;
