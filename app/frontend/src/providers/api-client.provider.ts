import axios from 'axios';

import ApiConfig from '../constants/api.constant';

const TwelveSeconds = 12000; // 12000ms => 12s

const ApiClient = axios.create({
  baseURL: ApiConfig.baseUrl,
  timeout: TwelveSeconds,
});

export default ApiClient;
