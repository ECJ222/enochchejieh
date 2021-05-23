const initialState = {
  pageLoaded: false
}

export const togglePageLoaded = pageLoaded => ({
  type: 'TOGGLE_PAGELOADED',
  pageLoaded
})

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'TOGGLE_PAGELOADED':
      return { ...state, pageLoaded: action.pageLoaded }
    default:
      return state
  }
}
