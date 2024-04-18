import { Helmet } from 'react-helmet-async';

import { GalleryInfoView } from 'src/sections/galleryInfo/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <GalleryInfoView />
    </>
  );
}
