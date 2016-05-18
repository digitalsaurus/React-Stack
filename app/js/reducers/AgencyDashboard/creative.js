const creative = (state = 'ADD_CREATIVE', action) => {
  console.log(action)
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
