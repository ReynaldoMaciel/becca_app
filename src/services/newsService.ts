import AxiosService from './AxiosService';
import { INews } from '../interfaces/INews';
import { store } from '../store';
import calcPage from '../util/calcPage';

export const getNews = async ({
  page
}: {
  searchText?: string;
  companyId?: string;
  page: number;
}) : Promise<INews[]> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get('/Noticia', {
    params: {
      sortingProp: 'dataCriacao',
      ascending: false,
      ...calcPage({ page, take: 20 })
    }
  });
  return response.data.value;
};

export const getDetailNews = async (postId: string): Promise<INews> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get(`/Noticia/${postId}`);
  return response.data.value;
};

export default {
  getNews,
};
