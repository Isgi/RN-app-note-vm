import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../AppNavigator';

export default (state, action) => {
  let nextState;
  switch (action.type) {
    case 'VmForm':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'VmForm' }),
        state
      );
      break;
    case 'VmList':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'VmList' }),
        state
      );
      break;
    case 'VmDetail':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'VmDetail', params: action.params }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};
