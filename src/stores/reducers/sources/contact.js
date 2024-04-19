import { SUCCESS, REQUEST, FAILURE } from '../../actions/action-type';
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT_DETAIL,
  GET_CONTACT_LIST,
  UPDATE_CONTACT,
} from '../../constants/sources/contact-constant';

const initialState = {
  loading: false,
};

const handleRequest = () => ({ loading: true })

const handleSuccess = () =>({ loading: false })

const handleFailure = () =>({ loading: false })

export default function contactReducers (state = initialState, action) {
  const { type, payload } = action;
  console.log('payload', payload)

  switch (type) {
    case REQUEST(GET_CONTACT_LIST):
    case REQUEST(GET_CONTACT_DETAIL):
    case REQUEST(UPDATE_CONTACT):
    case REQUEST(CREATE_CONTACT):
    case REQUEST(DELETE_CONTACT):
      return handleRequest();

    case SUCCESS(GET_CONTACT_LIST):
      return handleSuccess()
    case SUCCESS(GET_CONTACT_DETAIL):
    case SUCCESS(CREATE_CONTACT):
    case SUCCESS(UPDATE_CONTACT):
    case SUCCESS(DELETE_CONTACT):
      return handleSuccess()
    case FAILURE(GET_CONTACT_LIST):
    case FAILURE(GET_CONTACT_DETAIL):
    case FAILURE(CREATE_CONTACT):
    case FAILURE(UPDATE_CONTACT):
    case FAILURE(DELETE_CONTACT):
        return handleFailure() 
    default:
      return state;
  }
}
