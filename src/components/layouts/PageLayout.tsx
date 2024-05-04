import { Button } from '@/components';
import { ROUTES } from '@/routes/routes';
import React, { PropsWithChildren } from 'react';
import { FaArrowLeft } from "react-icons/fa6";

type Props = PropsWithChildren & {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export const BackButton = () => {
  return (
    <Button type="router" to={ROUTES.home} aria-label="Go home" className="flex items-center">
      <FaArrowLeft className="text-white text-lg" aria-label="left arrow icon" />
    </Button>
  );
};

export const PageLayout = ({ leftContent, rightContent, children }: Props) => {
  return (
    <div className="space-y-10">
      <header className="flex justify-between">
        <div className="flex gap-4">
          {leftContent}
        </div>
        <div className="flex gap-4">
          {rightContent}
        </div>
      </header>
      <hr />
      {children}
    </div>
  )
}
