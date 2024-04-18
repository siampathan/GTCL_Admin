import { Helmet } from 'react-helmet-async';

import { CoursesPostView } from 'src/sections/coursesPost/view';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CoursesPostView />
    </>
  );
}
