const creative = (state = 'ADD_CREATIVE', action) => {
  switch (action.type) {
    case 'ADD_CREATIVE':
      return {
        Id: action.Id,
        Title: action.Title,
        ShortDescription: action.ShortDescription,
        EmbeddableMedia: action.EmbeddableMedia,
        CoverImage: action.CoverImage,
        RemoteImage: action.RemoteImage,
        CreativeType: action.CreativeType,
        AgencyId: action.AgencyId,
        ClientId: action.ClientId,
        PublishedDate: action.PublishedDate,
        IsPrivate: action.IsPrivate,
        view: action.view
      }
    case 'CHANGE_VIEW':
      if(state.Id != action.Id) {
        return state
      }
      return Object.assign({}, state, {
        view: action.view
      })
    default:
      return state
  }
}

const creatives = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CREATIVE':
      return [
        ...state,
        creative(undefined, action)
      ]
    case 'DELETE_CREATIVE':
      return state.filter(i => i.Id !== action.DeleteId)
    case 'CHANGE_VIEW':
      return state.map(c => creative(c, action))
    default:
      return state
  }
}

export default creatives
