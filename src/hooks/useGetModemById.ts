import { useQuery } from 'react-query';
import { getModemById } from '@/services/modems';

export const useGetModemById = (id: string) => {
  const { data, error, isLoading } = useQuery(['modems', id], () => getModemById(id));

  const errorMsg = error as unknown as { message: string };

  return {
    data,
    errorMessage: errorMsg?.message,
    isLoading,
  }
};
