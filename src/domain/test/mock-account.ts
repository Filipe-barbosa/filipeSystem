import { stringify } from "querystring";
import { AuthenticationParams } from "@/domain/usecases/authentication";
import { AccountModel } from "../models/account-models";

import { faker } from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.word(),
});