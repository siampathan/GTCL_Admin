import { Helmet } from 'react-helmet-async';

import { GalleryInfoUpdate } from 'src/sections/galleryInfoUpdate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <GalleryInfoUpdate />
    </>
  );
}
