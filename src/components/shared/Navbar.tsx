import { ROUTES } from '@/routes/routes';
import { Link } from '@/components';

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        <li>
          <Link to={ROUTES.home} className="px-4 py-2 rounded-md text-black hover:text-red-500 font-bold text-lg uppercase">
            Home
          </Link>
        </li>
        <li>
          <Link to={ROUTES.modemsCreate} className="px-4 py-2 rounded-md text-black hover:text-red-500 font-bold text-lg uppercase">
            Create
          </Link>
        </li>
      </ul>
    </nav>
  )
}
