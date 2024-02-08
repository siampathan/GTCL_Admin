import { Helmet } from 'react-helmet-async';

import SliderInfoView from 'src/sections/slider/view/slider-view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SliderInfoView />
    </>
  );
}
