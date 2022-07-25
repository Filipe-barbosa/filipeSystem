import { AxiosHttpClient } from './axios-http-client';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const url = faker.internet.url();
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe('AxiosHttpCLiente', () => {
  test('Should call axios with correct URl and Verb', async () => {
    const sut = makeSut();
    await sut.post({ url });
    expect(mockedAxios.post).toBeCalledWith(url);
  });
});
