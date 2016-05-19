let creativeIndex = 1
export const addCreative = () => {
  return {
    type: 'ADD_CREATIVE',
    Id: creativeIndex++
  }
}

export const deleteCreative = (Id) => {
  return {
    type: 'DELETE_CREATIVE',
    DeleteId: Id
  }
}
