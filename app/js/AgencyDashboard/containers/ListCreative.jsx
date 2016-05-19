import { connect } from 'react-redux'
import { addCreative, editItem, deleteCreative } from '../actions'
import ContentList from '../components/ContentList'

const mapStateToProps = (state, type) => {
  switch(type) {
    case 'creative':
      return {
        items: state.creatives
      }
    case 'cases':
      return;
    case 'clients':
      return;
    default:
      return {
        items: state.creatives
      }
  }
}

const mapDispatchToProps = (dispatch, type) => {
  console.log(type)
  return {
    onAddCreativeClick: (Title) => {
      dispatch(addCreative(Title))
    },
    onEditClick: (Id) => {
      dispatch(editItem(Id))
    },
    onDeleteClick: (Id) => {
      dispatch(deleteCreative(Id))
    }
  }
}

const CreativeList = connect(mapStateToProps, mapDispatchToProps)(ContentList)

export default CreativeList
