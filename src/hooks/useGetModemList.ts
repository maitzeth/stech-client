import { useQuery } from 'react-query';
import { getModemsList } from '@/services/modems';

export const useGetModemList = () => {
  const { data, error, isLoading } = useQuery('modems', getModemsList);

  // TO FIX
  const errorMsg = error as unknown as { message: string };

  return {
    data,
    errorMessage: errorMsg?.message,
    isLoading
  };
};
