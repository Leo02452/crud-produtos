import ApiClient from '../../providers/api-client.provider';

const endpoint = 'products';

export const getAllProducts = async () => {
  const { data } = await ApiClient.get(`${endpoint}`);
  return data;
};

