const creative = (state, action) => {
  switch (action.type) {
    case 'ADD_CREATIVE':
      return {
        id: action.id,
        title: action.title
      }
    default:
      return state
  }
}

export default creative
