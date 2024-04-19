import {
    CREATE_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT_LIST,
    GET_CONTACT_DETAIL,
    UPDATE_CONTACT,
  } from '../../constants/sources/contact-constant';
  
  import { FAILURE, REQUEST, SUCCESS } from '../action-type';
  
  /**
   * @param {object} payload
   * @returns {{  payload, type: string }}
   * @constructor
   */
  
  export function getContactListRequest(payload) {
    return {
      type: REQUEST(GET_CONTACT_LIST),
      payload,
    };
  }
  export function getContactListSuccess(payload) {
    return {
      type: SUCCESS(GET_CONTACT_LIST),
      payload,
    };
  }
  
  export function getContactListFailure(payload) {
    return {
      type: FAILURE(GET_CONTACT_LIST),
      payload,
    };
  }
  
/**
   * @param {object} payload
   * @returns {{  payload, type: string }}
   * @constructor
*/
  
  export function getContactDetailRequest(payload) {
      return {
        type: REQUEST(GET_CONTACT_DETAIL),
        payload,
      };
    }
  export function getContactDetailSuccess(payload) {
    return {
      type: SUCCESS(GET_CONTACT_DETAIL),
      payload,
    };
  }
  
  export function getContactDetailFailure(payload) {
    return {
      type: FAILURE(GET_CONTACT_DETAIL),
      payload,
    };
  }
  
  
  /**
   * @param {object} payload
   * @returns {{  payload, type: string }}
   * @constructor
   */
  
  export function updateContactRequest(payload) {
    return {
      type: REQUEST(UPDATE_CONTACT),
      payload,
    };
  }

  export function updateContactSuccess(payload) {
    return {
      type: SUCCESS(UPDATE_CONTACT),
      payload,
    };
  }

  export function updateContactFailure(payload) {
    return {
      type: FAILURE(UPDATE_CONTACT),
      payload,
    };
  }
  
  /**
   * @param {object} payload
   * @returns {{ payload, type: string }}
   * @constructor
   */
  
  export function createContactRequest(payload) {
    return {
      type: REQUEST(CREATE_CONTACT),
      payload,
    };
  }
  export function createContactSuccess(payload) {
    return {
      type: SUCCESS(CREATE_CONTACT),
      payload,
    };
  }

  export function createContactFailure(payload) {
    return {
      type: FAILURE(CREATE_CONTACT),
      payload,
    };
  }
  
  /**
   * @param {object} payload
   * @returns {{ payload, type: string }}
   * @constructor
   */
  
  export function removeContactRequest(payload) {
    return {
      type: REQUEST(DELETE_CONTACT),
      payload,
    };
  }

  export function removeContactSuccess(payload) {
    return {
      type: SUCCESS(DELETE_CONTACT),
      payload,
    };
  }

  export function removeContactFailure(payload) {
    return {
      type: FAILURE(DELETE_CONTACT),
      payload,
    };
  }
