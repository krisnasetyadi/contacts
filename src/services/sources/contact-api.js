/* eslint-disable import/no-anonymous-default-export */
import RequestHandler from '../request-handler';
import ENDPOINT from '../../config/request-endpoint-contact';

class ContactApi extends RequestHandler {
  constructor() {
    super(ENDPOINT.CONTACT);
  }
}

export default new ContactApi();
