import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { SearchInput, Badge } from '@/components';

// Mocked Data
// const data = [
//   {
//     "id": "57050c0f-85a8-4035-82ec-9e6befd016c5",
//     "name": "CM 100 MB",
//     "description": "Configuración para 100 MB",
//     "status": "active",
//     "validSince": "2023-11-14T12:00:00.000Z",
//     "tags": [
//       "Tag 1"
//     ]
//   },
//   {
//     "id": "00f010a1-6d4e-4621-a9fe-aa6bd8b84867",
//     "name": "CM 200 MB",
//     "description": "Configuración para 200 MB",
//     "status": "active",
//     "validSince": "2023-11-14T12:00:00.000Z",
//     "tags": [
//       "Tag 1"
//     ]
//   },
//   {
//     "id": "a455144f-637b-43e0-8a08-c1e546fe9665",
//     "name": "CM 300 MB",
//     "description": "Configuración para 300 MB",
//     "status": "active",
//     "validSince": "2023-11-14T12:00:00.000Z",
//     "tags": [
//       "Tag 1"
//     ]
//   }
// ];

const ModemsList = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <p className="text-2xl font-bold">Query:</p>
          <div className="flex gap-2">
            <Badge text="Text" />
            <Badge text="Larger text" onClick={() => {}} />
            <Badge text="Text" />
          </div>
        </div>
        <SearchInput onSubmit={() => {}} value="" onChange={e => e} />
      </div>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
