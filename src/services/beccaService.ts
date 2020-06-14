import AxiosService from './AxiosService';
import { IResponseBecca } from '../interfaces/IResponseBecca';
import Tts from 'react-native-tts';

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

export const ask = async ({
  message,
}: {
  message: string;
}): Promise<IResponseBecca> => {
  // const instance = AxiosService.createAxiosInstance();
  // const response = await instance.post('/', {
  //   message
  // });

  // Conversa Inicial
  // if (message === 'Oi') {
  //   return {
  //     type: 0,
  //     text: 'Oi, tudo bem?',
  //   }
  // } else if (message === 'Tudo e você') {
  //   return {
  //     type: 0,
  //     text: 'Tudo bem. Eu sou a Beca. Qual seu nome?',
  //   }
  // } else if (message === 'Adriano') {
  //   return {
  //     type: 0,
  //     text: 'Hoje estou de folga, acabei de voltar de uma viagem longa. Quer saber como eu posso te ajudar?',
  //   }
  // } else if (message === 'Sim') {
  //   return {
  //     type: 0,
  //     text: 'Se estiver sentindo alguma dor pode me falar que vou te indicar um médico.',
  //   }
  // } else if (message === 'Quero') {
  //   return {
  //     type: 0,
  //     text: 'Se estiver sentindo alguma dor pode me falar que vou te indicar um médico.',
  //   }
  // } else if (message === 'Beleza') {
  //   return {
  //     type: 0,
  //     text: 'Posso te ajudar com a inspeção do caminhão... E posso te lembrar todos os documentos que você precisa levar nas viagens.',
  //   }
  // } else if (message === 'O que mais você pode fazer') {
  //   return {
  //     type: 0,
  //     text: 'Quando você for iniciar uma viagem, pode me informar para onde está indo, assim, se tiver algum acidente, engarrafamento ou qualquer problema na pista eu vou te contar. E se você quiser me contar também, vai ser muito bom.',
  //   }
  // } else if (message === 'Pode deixar') {
  //   return {
  //     type: 0,
  //     text: 'Caso queira apenas conversar, estou aqui, tenho muitas histórias das minhas viagens para te contar.',
  //   }
  // }

  // Conversa consulta
  if (message === 'Não estou me sentindo bem') {
    return {
      type: 0,
      text: 'Ah, você não está bem? O que você está sentindo?',
    }
  } else if (message === 'Estou com dor de cabeça') {
    return {
      type: 0,
      text: 'Isso é péssimo. Quanto tempo está sentindo essas dores?',
    }
  } else if (message === 'Dois dias') {
    return {
      type: 0,
      text: 'Você é forte, mas vou te indicar um remédio: Tylenol. Se a dor continuar procure um médico. Posso usar seu GPS?',
    }
  } else if (message === 'Pode sim') {
    return {
      type: 0,
      text: 'Você está próximo a unidade de saúde da CCR. Vou te enviar a localização, vale a pena ir lá, quem sabe você não ganha uma massagem.',
    }
  }

  return {
    type: 0,
    text: 'Não entendi',
  }
};

const speech = (value: string) => {
  Tts.getInitStatus().then(() => {
    Tts.setDefaultRate(0.40);
    Tts.setDefaultLanguage('pt-BR');
    Tts.setDefaultPitch(1.2)
    Tts.speak(value)
    return
  });
}

export default {
  ask,
  speech
};
