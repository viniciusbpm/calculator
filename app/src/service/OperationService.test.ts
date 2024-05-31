import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import operationService from './OperationService';

let mock = new MockAdapter(axios);

describe('operationService', () => {
  beforeEach(() => {
    mock.reset();
  });

  it('should return data when send is called', async () => {
    const response = { result: 'success' };

    mock.onPost('api').reply(200, response);

    const data = await operationService.send('operation');
    expect(data).toEqual(response);
  });

  it('should return error when send is called and request fails', async () => {
    mock.onPost('api').networkError();

    const error = await operationService.send('operation');
    expect(error).toEqual(expect.anything());
  });
});
