import { useMutation } from 'react-query';
import { createModem, updateModem } from '@/services/modems';

export const useMutateModem = (isUpdate: boolean = false) => {
  const { data, error, isLoading, mutateAsync } = useMutation(isUpdate ? updateModem : createModem);

  const errorMsg = error as unknown as { message: string };

  return {
    mutateAsync,
    data,
    errorMessage: errorMsg?.message,
    isLoading,
  }
};
