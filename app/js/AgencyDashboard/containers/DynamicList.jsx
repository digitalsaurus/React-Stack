import { connect } from 'react-redux'
import { addCreative, editItem, deleteCreative } from '../actions'
import ContentList from '../components/ContentList'

import test from '../components/Creative/ShowCreative'

const mapStateToProps = (state, props) => {
  switch(props.type) {
    case 'creative':
      return {
        items: state.creatives,
        type: props.type
      }
    case 'cases':
      return;
    case 'clients':
      return;
    default:
      return {
        items: state.creatives,
        type: props.type
      }
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

const mapComponentToProps = (type) => {
  switch (type) {
    case 'creative':
      return {
        showView: test
      }
    default:
      return {
        showView: test
      }
  }
}

const CreativeList = connect(mapStateToProps, mapDispatchToProps)(ContentList)

export default CreativeList
