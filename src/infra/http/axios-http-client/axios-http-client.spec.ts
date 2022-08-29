import { AxiosHttpClient } from './axios-http-client';
import { HttpPostParams } from '@/data/protocols/http';
import { mockAxios } from '@/infra/test';
import { mockPostRequest } from '@/data/test';
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};
const url = faker.internet.url();
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpCLiente', () => {
  test('Should call axios with correct Values', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toBeCalledWith(request.url, request.body);
  });
  test('Should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(mockPostRequest());
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
