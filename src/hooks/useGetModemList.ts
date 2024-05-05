import { useQuery } from 'react-query';
import { getModemsList } from '@/services/modems';

export const useGetModemList = (querySearch?: string) => {
  const { data, error, isLoading } = useQuery(['modems', querySearch], () => getModemsList(querySearch));

  const errorMsg = error as unknown as { message: string };

  return {
    data,
    errorMessage: errorMsg?.message,
    isLoading
  };
};
