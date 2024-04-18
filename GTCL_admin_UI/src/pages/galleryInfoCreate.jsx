import { Helmet } from 'react-helmet-async';

import { GalleryCreateView } from 'src/sections/galleryInfoCreate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <GalleryCreateView />
    </>
  );
}
