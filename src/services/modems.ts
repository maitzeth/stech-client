import { AxiosResponse, axiosClient } from '@/services/http';
import { ModemRequest, ModemResponse } from '@/types/modems';
import { handleError } from '@/utils/common';

export const getModemsList = async () => {
  try {
    const response: AxiosResponse<ModemResponse[]> = await axiosClient.get('/cableModems');
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const getModemById = async (id: string) => {
  try {
    const response: AxiosResponse<ModemResponse> = await axiosClient.get(`/cableModems/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const createModem = async (data: ModemRequest) => {
  try {
    const response: AxiosResponse<ModemResponse> = await axiosClient.post(`/cableModems`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const updateModem = async (data: ModemRequest) => {
  try {
    const response: AxiosResponse<ModemResponse> = await axiosClient.put(`/cableModems/${data.id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export const deleteModem = async (modemId: string) => {
  try {
    const response: AxiosResponse<undefined> = await axiosClient.delete(`/cableModems/${modemId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}
