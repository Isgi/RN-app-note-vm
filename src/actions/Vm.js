import axios from 'axios';
import {
  REQUEST_VMS,
  RECEIVE_VMS,
  RECEIVED_FAILED_VMS,
  CREATE_VM,
  CREATED_VM,
  CREATED_FAILED_VM
} from './types';

requestVms = () => {
  return {
    type : REQUEST_VMS,
    vms : null,
    status : 'creating'
  }
}
receiveVms = (data) => {
  return {
    type : RECEIVE_VMS,
    vms : data,
    status : 'success'
  }
}
receivedFailedVms = (data) => {
  return {
    type : RECEIVED_FAILED_VMS,
    vms : data,
    status : 'failed'
  }
}

createVm = () => {
  return {
    type : CREATE_VM,
    status : 'creating'
  }
}
createdVm = () => {
  return {
    type : CREATED_VM,
    status : 'success'
  }
}
createdFailedVm = () => {
  return {
    type : CREATED_FAILED_VM,
    status : 'failed'
  }
}
export const fetchListVm = () => {
  return dispatch => {
    dispatch(requestVms())
    return axios.get('http://localhost:8000/api/v1/vm')
        .then((response) => {
          dispatch(receiveVms(response.data))
        })
        .catch((error) => {
          console.log(error);
          dispatch(receivedFailedVms(error))
        });
  }
}

export const newVm = (param) => {
  return dispatch => {
    console.log(dispatch);
    dispatch(createVm())
    return axios.post('http://localhost:8000/api/v1/vm', param)
        .then((response) => {
          dispatch(createdVm())
          dispatch({type:'VmList'})
        })
        .catch((error) => {
          console.log(error);
          dispatch(createdFailedVm())
        });
  }
}
