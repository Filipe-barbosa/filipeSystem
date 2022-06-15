export class UnexpectedError extends Error {
  constructor() {
    super('Credenciais Algo de errado aconteceu. Tente novamente mais tarde');
    this.name = 'UnexpectedError';
  }
}
