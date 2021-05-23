import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from '.'

const createStore = () => reduxCreateStore(rootReducer)

const ReduxWrapper = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}

ReduxWrapper.propTypes = {
  element: PropTypes.node.isRequired
}

export default ReduxWrapper
