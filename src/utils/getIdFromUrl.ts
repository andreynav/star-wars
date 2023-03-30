export const getIdFromUrl = (url: string) => {
  const regex = /\/(\d+)\/$/
  const match = regex.exec(url)
  return match ? match[1] : ''
}
