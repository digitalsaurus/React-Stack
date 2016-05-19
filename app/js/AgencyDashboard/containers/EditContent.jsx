import React from 'react'
import { connect } from 'react-redux'
import { cancelEdit } from '../actions'

// const mapStateToProps = (state) => {
//   return {
//     items: state.creatives
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddCreativeClick: (Title) => {
//       dispatch(addCreative(Title))
//     },
//     onDeleteClick: (Id) => {
//       dispatch(deleteCreative(Id))
//     }
//   }
// }

let EditControls = ({ dispatch, Id }) => {
  return (
    <div className="cornerButtons">
        <button type="submit" className="btn-default">Save</button>
        <a className="btn-default cancel" onClick={e => {
            e.preventDefault()
            dispatch(cancelEdit(Id))
          }}>
          Cancel
        </a>
    </div>
  )
}

EditControls = connect()(EditControls)

export default EditControls
