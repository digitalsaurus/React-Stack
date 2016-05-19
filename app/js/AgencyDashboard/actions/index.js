let creativeIndex = 1
export const addCreative = () => {
  return {
    type: 'ADD_CREATIVE',
    Id: creativeIndex++,
    view: 'EDIT'
  }
}

export const deleteCreative = (Id) => {
  return {
    type: 'DELETE_CREATIVE',
    DeleteId: Id
  }
}

export const editItem = (Id) => {
  return {
    type: 'CHANGE_VIEW',
    view: 'EDIT',
    Id
  }
}

export const cancelEdit = (Id) => {
  return {
    type: 'CHANGE_VIEW',
    view: 'SHOW',
    Id
  }
}

export const cancelFormat = (Id) => {
  return {
    type: 'CHANGE_VIEW',
    view: 'EDIT'
  }
}
