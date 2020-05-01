import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Api request', () => {
  beforeEach(async () => {
    apiMock.reset();
  });
  it('Faz o Get com sucesso', async () => {
    apiMock.onGet('users').reply(200, { login: 'carlossuds' });

    const response = await api.get('users');

    expect(response.data.login).toBe('carlossuds');
  });

  it('Get deu ErroUser', async () => {
    apiMock.onGet('users').reply(400);

    try {
      await api.get('users');
    } catch (err) {
      console.log(err);
      expect(err.response.status).toBe(400);
    }
  });

  it('Faz o Get de Repos com sucesso', async () => {
    apiMock.onGet('users/carlossuds/repos').reply(200, { login: 'carlossuds' });

    const response = await api.get('users/carlossuds/repos');

    expect(response.data.login).toBe('carlossuds');
  });

  it('Get deu ErroRepos', async () => {
    apiMock.onGet('users/carlossuds/repos').reply(400);

    try {
      await api.get('users/carlossuds/repos');
    } catch (err) {
      console.log(err);
      expect(err.response.status).toBe(400);
    }
  });
});
