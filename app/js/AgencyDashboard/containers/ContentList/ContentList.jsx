import { connect } from 'react-redux'
import { addCreative, editItem, deleteCreative } from '../actions'
import ContentList from '../components/ContentList'

const mapStateToProps = (state, type) => {
  return {
    items: state.creatives
  }
}

const mapDispatchToProps = (dispatch) => {
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
