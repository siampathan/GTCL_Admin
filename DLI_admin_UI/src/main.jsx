import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
