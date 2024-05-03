import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

const ModemsList = () => {
  return (
    <div>
      <h1>HOME LIST</h1>
      <Link to={ROUTES.modemsCreate}>
        Modems Create
      </Link>
      <hr />
      <Link to={`${ROUTES.modems}/123`}>
        Modems Create
      </Link>
    </div>
  );
};

export default ModemsList;
