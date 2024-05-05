import { Badge, InputSearch, BrokenPage } from '@/components';
import { ModemsRenderer } from '@/components/modules/ModemsList';
import { useGetModemList } from '@/hooks/useGetModemList';
import { useState } from "react"
import { useQueryParamsState } from '@/hooks/useQueryParamsState';

const ModemsList = () => {
  const [paramValue, setParamValue] = useQueryParamsState<string>('q', '');
  const [searchValue, setSearchValue] = useState('');
  const { data, errorMessage, isLoading } = useGetModemList(paramValue);

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="flex gap-8 order-2 lg:order-0">
          {paramValue && (
            <>
              <p className="text-2xl font-bold">Query:</p>
              <div className="flex gap-2">
                <Badge type="default" text={paramValue} onClick={() => setParamValue('')} />
              </div>
            </>
          )}
        </div>
        <div className="lg:order-2 mb-6 lg:mb-0">
          <InputSearch
            onSubmit={() => {
              setParamValue(searchValue);
              // Search value cleanup
              setSearchValue('');
            }}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
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
