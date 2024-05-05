import { Button } from '@/components';
import { ROUTES } from '@/routes/routes';
import React, { PropsWithChildren } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface LayoutProps extends PropsWithChildren {
  leftContent: React.ReactNode;
  rightContent?: React.ReactNode;
  title?: string;
}

interface BackButtonprops {
  isGoBack?: boolean;
}

export const BackButton = ({ isGoBack }: BackButtonprops) => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      onClick={() => {
        if (isGoBack) {
          navigate(-1);
        } else {
          navigate(ROUTES.home);
        }
      }}
      aria-label={isGoBack ? 'Go back' : 'Go home'}
      className="flex items-center"
    >
      <FaArrowLeft className="text-white text-lg" aria-label="left arrow icon" />
    </Button>
  );
};

export const PageLayout = ({
  leftContent,
  rightContent,
  children,
  title,
}: LayoutProps) => {
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
