import { DATE_FORMATS } from '@/utils/constants'; 
import { format } from 'date-fns';

export const formatDate = (date: Date) => {
  return format(date, DATE_FORMATS.default);
};  