import {
  REQUEST_VMS,
  RECEIVE_VMS,
  RECEIVED_FAILED_VMS,
  CREATE_VM,
  CREATED_VM,
  CREATED_FAILED_VM
} from '../actions/types';

const INITIAL = {
  loading : true
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case REQUEST_VMS:
      return { ...INITIAL};
    case RECEIVE_VMS:
      return { ...INITIAL, loading: false, vms: action.vms };
    case RECEIVED_FAILED_VMS :
      return { ...INITIAL, loading: false };
    case CREATE_VM:
      return { ...INITIAL};
    case CREATED_VM:
      return { ...INITIAL, loading: false };
    case CREATED_FAILED_VM:
      return { ...INITIAL, loading: false };
    default:
      return state
  }
}
