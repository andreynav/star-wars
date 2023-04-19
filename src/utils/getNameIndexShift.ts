export const getNameIndexShift = (sliceArgs: number[]): number => {
  return sliceArgs[0] === 3 ? 3 : 0
}
