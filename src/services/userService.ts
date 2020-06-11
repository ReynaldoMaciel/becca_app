import AxiosService from './AxiosService';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ userId: string; token: string; refreshToken: string; acceptTherms: boolean }> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.post('/Login', {
    userName: email,
    password: password,
  });
  return {
    userId: response.data.value.id,
    token: response.data.value.token.accessToken,
    refreshToken: response.data.value.token.refreshToken,
    acceptTherms: response.data.value.termoUso,
  };
};

export const register = async ({
  cpf,
  email,
  password,
}: {
  cpf: string;
  email: string;
  password: string;
}): Promise<void> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.post('/Candidato', {
    cpf,
    email,
    senha: password,
  });
  return;
};

export const resetPassword = async ({
  email,
}: {
  email: string;
}): Promise<void> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.post('/Login/senha/resetar', {
    userName: email,
  });
  return;
};

export const changePassword = async ({
  currentPassword,
  newPassword
}: {
  currentPassword: string;
  newPassword: string;
}): Promise<void> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.post('/Login/senha/alterar', {
    senhaAntiga: currentPassword,
    senhaNova: newPassword,
  });
  return;
};

export const checkIfHasAcceptedTerms = async (): Promise<boolean> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get('/Termo');
  return response.data.value.length > 0
};

export default {
  login,
  register,
  resetPassword,
  changePassword,
  checkIfHasAcceptedTerms,
};
