import { useMutation } from 'react-query';
import { createModem } from '@/services/modems';

export const useCreateModem = () => {
  const { data, error, isLoading, mutateAsync } = useMutation(createModem);

  const errorMsg = error as unknown as { message: string };

  return {
    mutateAsync,
    data,
    errorMessage: errorMsg?.message,
    isLoading,
  }
};
