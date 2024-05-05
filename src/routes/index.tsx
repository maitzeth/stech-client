import { useRoutes, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { lazy } from 'react';

const LazyModemList = lazy(() => import('@/pages/ModemsList'));
const LazyModemsDetails = lazy(() => import('@/pages/ModemsDetails'));
const LazyModemCreate = lazy(() => import('@/pages/ModemsCreate'));
const LazyModemEdit = lazy(() => import('@/pages/ModemsEdit'));

const AppRouter = () => {
  const routing  = useRoutes([
    {
      path: ROUTES.home,
      element: <Navigate to={ROUTES.modems} />,
    },
    {
      path: ROUTES.modems,
      children: [
        {
          path: ROUTES.modems,
          element: <LazyModemList />,
        },
        {
          path: ROUTES.modemsCreate,
          element: <LazyModemCreate />,
        },
        {
          path: ROUTES.modemsDetails,
          element: <LazyModemsDetails />,
        },
        {
          path: ROUTES.modemsEdit,
          element: <LazyModemEdit />,
        },
      ],
    },
    {
      path: '*',
      element: <div>404</div>
    }
  ]);
  return routing;
};

export default AppRouter;
