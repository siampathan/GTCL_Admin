import { Helmet } from 'react-helmet-async';

import { CreateView } from 'src/sections/create/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <CreateView />
    </>
  );
}
