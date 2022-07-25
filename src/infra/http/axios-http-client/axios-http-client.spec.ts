import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const url = faker.internet.url();
describe('AxiosHttpCLiente', () => {
  test('Should call axios with correct URl', async () => {
    const sut = new AxiosHttpClient();
    await sut.post({ url });
    expect(mockedAxios).toBeCalledWith(url);
  });
});
