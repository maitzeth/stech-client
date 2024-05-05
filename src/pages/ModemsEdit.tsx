import { ModemForm } from '@/components/shared/ModemForm';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';
import { ModemRequest, ModemResponse } from '@/types/modems';
import { useCreateModem } from '@/hooks/useCreateModem';

const ModemsEdit = () => {
  const { mutateAsync, errorMessage } = useCreateModem();

  const handleSubmit = async (values: ModemRequest): Promise<ModemResponse | Error | undefined> => {
    try {
      const response = await mutateAsync(values);
      return response;
    } catch (error) {
      return error as Error;
    }
  };

  return (
    <PageLayout
      leftContent={
        <BackButton />
      }
      title="Edit Modem"
    >
      <div className="max-w-[680px] mx-auto pb-10">
        <ModemForm
          errorMessage={errorMessage}
          onSubmitForm={handleSubmit}
        />
      </div>
    </PageLayout>
  )
};

export default ModemsEdit;
