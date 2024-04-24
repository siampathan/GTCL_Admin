import { Helmet } from 'react-helmet-async';

import { UserUpdateView } from 'src/sections/userUpdate/view';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserUpdateView />
    </>
  );
}
