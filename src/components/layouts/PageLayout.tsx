import { Button } from '@/components';
import { ROUTES } from '@/routes/routes';
import React, { PropsWithChildren } from 'react';
import { FaArrowLeft } from "react-icons/fa6";

type Props = PropsWithChildren & {
  leftContent: React.ReactNode;
  rightContent?: React.ReactNode;
  title?: string;
}

export const BackButton = () => {
  return (
    <Button type="router" to={ROUTES.home} aria-label="Go home" className="flex items-center">
      <FaArrowLeft className="text-white text-lg" aria-label="left arrow icon" />
    </Button>
  );
};

export const PageLayout = ({
  leftContent,
  rightContent,
  children,
  title,
}: Props) => {
  return (
    <div className="space-y-10">
      <header className="flex justify-between">
        <div className="flex gap-4">
          {leftContent}
        </div>
        <div className="flex gap-4">
          {title ? (
            <h1 className="text-3xl font-bold">{title}</h1>
          ) : rightContent}
        </div>
      </header>
      <hr />
      {children}
    </div>
  )
}
