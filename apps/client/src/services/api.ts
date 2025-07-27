import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export interface HelloResponse {
  message: string;
  timestamp?: string;
}

export interface HealthResponse {
  status: string;
  timestamp: string;
}

export const apiService = {
  async checkHealth(): Promise<HealthResponse> {
    const response = await apiClient.get<HealthResponse>('/health');
    return response.data;
  },

  async getHello(): Promise<HelloResponse> {
    const response = await apiClient.get<HelloResponse>('/api/hello');
    return response.data;
  },

  async echo(data: any): Promise<any> {
    const response = await apiClient.post('/api/echo', data);
    return response.data;
  },
};
