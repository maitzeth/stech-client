import { ScreenLoading } from '@/components';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';
import { useGetModemById } from '@/hooks/useGetModemById';
import { useParams } from 'react-router-dom';
import { ModemForm } from '@/components/shared/ModemForm';
import { ModemRequest, ModemResponse } from '@/types/modems';
import { useMutateModem } from '@/hooks/useMutateModem';

const ModemsEdit = () => {
  const { mutateAsync } = useMutateModem(true);
  const params = useParams();
  const modemId = params.id as string;

  const { data, isLoading } = useGetModemById(modemId);

  if (isLoading) {
    return (
      <div className="py-96 flex items-center justify-center">
        <ScreenLoading />
      </div>
    );
  }

  const handleSubmit = async (values: ModemRequest): Promise<ModemResponse | Error | undefined> => {
    try {
      const response = await mutateAsync({
        ...values,
        id: modemId,
      });
      return response;
    } catch (error) {
      return error as Error;
    }
  }

  return (
    <PageLayout
      leftContent={
        <BackButton isGoBack />
      }
      title="Edit Modem"
    >
      <div className="max-w-[680px] mx-auto pb-10">
        <ModemForm
          data={data}
          onSubmitForm={handleSubmit}
        />
      </div>
    </PageLayout>
  )
};

export default ModemsEdit;
