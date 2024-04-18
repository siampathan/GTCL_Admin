import { Helmet } from 'react-helmet-async';

import { CoursesView } from 'src/sections/courses';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CoursesView />
    </>
  );
}
