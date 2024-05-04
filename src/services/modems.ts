import { AxiosResponse, axiosClient } from '@/services/http';
import { ModemResponse } from '@/types/modems';
import { handleError } from '@/utils/common';

export const getModemsList = async () => {
  try {
    const response: AxiosResponse<ModemResponse[]> = await axiosClient.get('/cableModems');
    return response.data;
  } catch (error) {
    handleError(error);
  }
}