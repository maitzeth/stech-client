import { ROUTES } from '@/routes/routes';
import { Link } from '@/components';

const excludeRoutes = [ROUTES.modemsDetails, ROUTES.modems];

const navbarLabelMap = {
  modemsCreate: 'Create Modem',
} as const;

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {Object.entries(ROUTES).map(([key, value], index) => {
          if (excludeRoutes.includes(value)) {
            return null;
          }

          return (
            <li key={`navbar-item-${index}`} id={`navbar-item-${index}`}>
              <Link to={value} className="px-4 py-2 rounded-md text-black hover:text-red-500 font-bold text-lg uppercase">
                {navbarLabelMap[key as keyof typeof navbarLabelMap] ?? key}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}
