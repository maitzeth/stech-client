import React from 'react';
import { ModemForm } from '@/components/shared/ModemForm';
import { BackButton, PageLayout } from '@/components/layouts/PageLayout';
import { ModemRequest } from '@/types/modems';

const ModemsCreate = () => {
  const handleSubmit = async (values: ModemRequest) => {
    console.log(values)
  }

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
