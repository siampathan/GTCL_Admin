import { Helmet } from 'react-helmet-async';

// import { UserUpdateView } from 'src/sections/userUpdate';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      {/* <UserUpdateView /> */}
      <h2> Test Update </h2>
    </>
  );
}
