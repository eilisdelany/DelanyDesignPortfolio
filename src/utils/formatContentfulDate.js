export default contentfulDate =>
  contentfulDate
    .split('-')
    .reverse()
    .join('.')
