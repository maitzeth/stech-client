import { getModemById } from '@/services/modems';
import { useQuery } from 'react-query';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

export const useGetModemById = (id: string) => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery(['modems', id], () => getModemById(id));
  const errorMsg = error as unknown as { message: string };

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg.message, {
        position: 'top-center'
      });

      navigate(ROUTES.home);
    }
  }, [errorMsg, navigate]);

  return {
    data,
    errorMessage: errorMsg?.message,
    isLoading,
  }
};
