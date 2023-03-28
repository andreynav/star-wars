export const getPersonImageIndex = (page: number, index: number) => {
  if (page === 1) {
    return index + 1
  } else if (page === 2) {
    // there is error in API, so I need to handle it this way
    if (index > 5) return index + 12
    return index + 11
  } else {
    return index + page * 10 - 10 + 2
  }
}
