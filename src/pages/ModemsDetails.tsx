import { useEffect } from 'react';
import { useGetModemById } from '@/hooks/useGetModemById';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ROUTES } from '@/routes/routes';
import { Badge, Button, ScreenLoading } from '@/components';
import { FaArrowLeft } from "react-icons/fa6";
import { formatDate } from '@/utils/dates';

const ModemsDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, errorMessage, isLoading } = useGetModemById(params.id as string);
  
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: 'top-center'
      });
      navigate(ROUTES.home);
    }
  }, [errorMessage, navigate]);

  if (isLoading) {
    return (
      <div className="py-96 flex items-center justify-center">
        <ScreenLoading />
      </div>
    );
  }

  if (data) {
    return (
      <div className="space-y-10">
        <header className="flex justify-between">
          <div className="flex gap-4">
            <Button type="router" to={ROUTES.home} aria-label="Go home" className="flex items-center">
              <FaArrowLeft className="text-white text-lg" aria-label="left arrow icon" />
            </Button>
          </div>
          <div className="flex gap-4">
            <Button type="router" to="/">
              Edit Modem
            </Button>
            <Button type="button" variant="danger">
              Delete
            </Button>
          </div>
        </header>
        <hr />
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
      </div>
    );
  }
  
  return null;
}

export default ModemsDetails;
