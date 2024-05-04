import { Badge, SearchInput, BrokenPage } from '@/components';
import { ModemsRenderer } from '@/components/ModemsList';
import { useGetModemList } from '@/hooks/useGetModemList';

const ModemsList = () => {
  const { data, errorMessage, isLoading } = useGetModemList();

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex gap-8 order-2 lg:order-0">
          <p className="text-2xl font-bold">Query:</p>
          <div className="flex gap-2">
            <Badge type="default" text="Text" />
            <Badge type="default" text="Larger text" onClick={() => {}} />
            <Badge type="default" text="Text" />
          </div>
        </div>
        <div className="lg:order-2 mb-6 lg:mb-0">
          <SearchInput onSubmit={() => {}} value="" onChange={e => e} />
        </div>
      </div>
      <hr />
      {errorMessage ? (
        <BrokenPage message={errorMessage} /> 
      ) : (
        <ModemsRenderer data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default ModemsList;
