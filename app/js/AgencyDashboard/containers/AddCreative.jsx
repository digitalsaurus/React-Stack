import React from 'react'
import { connect } from 'react-redux'
import { addCreative } from '../actions'

let AddCreative = ({ dispatch }) => {
  return (
    <a href="#add-person" className="addItem" onClick={e => {
        e.preventDefault()
        dispatch(addCreative())
      }}>
      Add +
    </a>
  )
}

AddCreative = connect()(AddCreative)

export default AddCreative
