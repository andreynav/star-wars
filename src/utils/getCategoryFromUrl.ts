export const getCategoryFromUrl = (url: string) => {
  const regex = /\/([\w-]+)\/\d+\/$/
  const match = regex.exec(url)
  return match ? match[1] : ''
}
