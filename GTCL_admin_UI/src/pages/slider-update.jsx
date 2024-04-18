import { Helmet } from 'react-helmet-async';

import SliderInfoUpdate from 'src/sections/sliderUpdate/view/sliderUpdate-view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SliderInfoUpdate />
    </>
  );
}
