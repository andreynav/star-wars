export const convertToTitleCase = (str: string) => {
  str = str.replace(/_/g, ' ')
  if (str === 'episode id') {
    return 'episode'.toUpperCase()
  } else {
    return str.toUpperCase()
  }
}
