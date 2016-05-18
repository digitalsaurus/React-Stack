import { connect } from 'react-redux'

const getCreatives = (creatives) => {
  return creatives
}

const mapStateToProps = (state) => {
  return {
    creatives: getCreatives(state.creatives)
  }
}
