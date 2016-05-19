import { connect } from 'react-redux'
import { addCreative, deleteCreative } from '../../actions/AgencyDashboard'
import ContentList from '../../components/AgencyDashboard/ContentList'

const mapStateToProps = (state) => {
  return {
    items: state.creatives
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCreativeClick: (Title) => {
      dispatch(addCreative(Title))
    },
    onDeleteClick: (Id) => {
      dispatch(deleteCreative(Id))
    }
  }
}

const CreativeList = connect(mapStateToProps, mapDispatchToProps)(ContentList)

export default CreativeList
