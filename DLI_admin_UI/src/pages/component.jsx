import { Helmet } from 'react-helmet-async';

import { ComponentList } from 'src/sections/component';

// ----------------------------------------------------------------------

export default function ComponentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ComponentList />
    </>
  );
}
