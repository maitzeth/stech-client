import { useMutation } from 'react-query';
import { deleteModem } from '@/services/modems';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const useMutateModem = () => {
  const { data, error, isLoading, mutateAsync } = useMutation(deleteModem);

  const errorMsg = error as unknown as { message: string };

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg.message, {
        position: 'top-center'
      });
    }
  }, [errorMsg]);

  return {
    mutateAsync,
    data,
    errorMessage: errorMsg?.message,
    isLoading,
  }
};
