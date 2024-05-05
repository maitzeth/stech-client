import { useGetModemById } from '@/hooks/useGetModemById';
import { useParams } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { Badge, Button, ScreenLoading } from '@/components';
import { formatDate } from '@/utils/dates';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';

const ModemsDetails = () => {
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

  if (data) {
    return (
      <PageLayout
        leftContent={
          <BackButton />
        }
        rightContent={
          <>
            <Button type="router" to={`${ROUTES.modems}/edit/${modemId}`}>
              Edit Modem
            </Button>
            <Button type="button" variant="danger">
              Delete
            </Button>
          </>
        }
      >
        <section className="space-y-10">
          <div className="flex gap-4 justify-between flex-col lg:flex-row">
            <div className="flex gap-4">
              <h1 className="text-4xl font-bold">{data.name}</h1>
              <Badge type="status" status={data.status} />
            </div>
            <div>
              {data.tags.map((tag, index) => {
                return <Badge type="default" key={`tag-element-${index}`} text={tag} />;
              })}
            </div>
          </div>
          <div className="rounded-xl p-4 bg-gray-200 space-y-20">
            <p className="text-base">{data.description}</p>
            <div className="flex text-sm justify-end text-gray-500 gap-2">
              <p>Valid since:</p>
              <p>{formatDate(new Date(data.validSince))}</p>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }
  
  return null;
}

export default ModemsDetails;
