function removeHttp(url) {
  return url.replace(/^https?:\/\//, '');
}

export default removeHttp;
