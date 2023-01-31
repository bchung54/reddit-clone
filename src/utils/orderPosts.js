function orderPosts(posts, sortBy) {
  const epoch = new Date('1970-01-01T00:00:00');
  const copyList = [...posts];
  switch (sortBy) {
    case 'hot':
      copyList.sort((a, b) => {
        const scoreA = Math.log10(a.votes) + (a.timestamp - epoch) / 4.5e4;
        const scoreB = Math.log10(b.votes) + (b.timestamp - epoch) / 4.5e4;
        return scoreB - scoreA;
      });
      break;
    case 'top':
      copyList.sort((a, b) => {
        return b.votes - a.votes;
      });
      break;
    case 'new':
      copyList.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      break;
    case 'rising':
      copyList.sort((a, b) => {
        const scoreA = a.votes + Math.log10(a.timestamp - epoch);
        const scoreB = b.votes + Math.log10(b.timestamp - epoch);
        return scoreB - scoreA;
      });
      break;
    default:
  }
  return copyList;
}

export default orderPosts;
