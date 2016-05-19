const creative = (state = 'ADD_CREATIVE', action) => {
  switch (action.type) {
    case 'ADD_CREATIVE':
      return {
        AgencyId: action.AgencyId,
        ClientId: action.ClientId,
        CoverImage: action.CoverImage,
        CreativeType: action.CreativeType,
        EmbeddableMedia: action.EmbeddableMedia,
        Id: action.Id,
        IsPrivate: action.IsPrivate,
        PublishedDate: action.PublishedDate,
        RemoteImage: action.RemoteImage,
        ShortDescription: action.ShortDescription,
        Title: action.Title
      }
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
    default:
      return state
  }
}

export default creatives
