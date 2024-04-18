import { Helmet } from 'react-helmet-async';

import { SliderCreateView } from 'src/sections/sliderCreate/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SliderCreateView />
    </>
  );
}
