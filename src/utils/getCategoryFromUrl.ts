export const getCategoryFromUrl = (url: string) => {
  // const regex = /\/([a-zA-Z0-9_-]+)\/\d+\/$/
  const regex = /\/([\w-]+)\/\d+\/$/
  const match = regex.exec(url)
  return match ? match[1] : ''
}
