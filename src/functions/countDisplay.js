function countDisplay(count) {
  if (count >= 1e5) {
    return `${Math.floor(count / 1e3)}k`;
  }
  if (count >= 1e3) {
    return `${(Math.floor(count / 1e2) / 10).toFixed(1)}k`;
  }
  return count;
}

export default countDisplay;
