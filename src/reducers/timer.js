const initialState = {
  runningTime: 0,
  isRunning: false,
  trails: [],
}

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        runningTime: state.runningTime + 1,
        isRunning: true,
      }
    case 'STOP_TIMER':
      return {
        ...state,
        isRunning: false,
      }
    case 'MARK_TIMER':
      return {
        ...state,
        trails: state.trails.concat([state.runningTime]),
      }
    case 'RESET_TIMER':
      return {
        ...state,
        runningTime: 0,
        isRunning: false,
        trails: [],
      }
    default:
      return state;
  }
}