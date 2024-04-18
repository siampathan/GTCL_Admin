import { Helmet } from 'react-helmet-async';

import { TeachersView } from 'src/sections/teachers';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <TeachersView />
    </>
  );
}
