let creativeIndex = 2
export const addCreative = (title) => {
  return {
    type: 'ADD_CREATIVE',
    id: creativeIndex++,
    title
  }
}
