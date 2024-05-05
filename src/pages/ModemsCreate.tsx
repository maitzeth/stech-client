import { ModemForm } from '@/components/shared/ModemForm';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';
import { ModemRequest, ModemResponse } from '@/types/modems';
import { useMutateModem } from '@/hooks/useMutateModem';

const ModemsCreate = () => {
  const { mutateAsync } = useMutateModem();

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
      title="Add a new Modem"
    >
      <div className="max-w-[680px] mx-auto pb-10">
        <ModemForm onSubmitForm={handleSubmit} />
      </div>
    </PageLayout>
  )
};

export default ModemsCreate;
