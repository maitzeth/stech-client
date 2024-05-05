import { ScreenLoading } from '@/components';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';
import { useGetModemById } from '@/hooks/useGetModemById';
import { useParams } from 'react-router-dom';

const ModemsEdit = () => {
  const params = useParams();
  const modemId = params.id as string;

  const { data, isLoading } = useGetModemById(modemId);
  console.log(data, isLoading);

  if (isLoading) {
    return (
      <div className="py-96 flex items-center justify-center">
        <ScreenLoading />
      </div>
    );
  }

  return (
    <PageLayout
      leftContent={
        <BackButton />
      }
      title="Edit Modem"
    >
      <div className="max-w-[680px] mx-auto pb-10">
        {/* <ModemForm
          errorMessage={errorMessage}
          onSubmitForm={handleSubmit}
        /> */}
      </div>
    </PageLayout>
  )
};

export default ModemsEdit;
