import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const CreatePage = lazy(() => import('src/pages/create'));
export const PostPage = lazy(() => import('src/pages/post'));
export const UpdatePage = lazy(() => import('src/pages/update'));
export const ViewSocialInfo = lazy(() => import('src/pages/social-info'));
export const CreateSocialInfo = lazy(() => import('src/pages/social-post'));
export const SocialUpdate = lazy(() => import('src/pages/social-update'));
export const ContentPage = lazy(() => import('src/pages/content'));
export const ContentPost = lazy(() => import('src/pages/content-post'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'create', element: <CreatePage /> },
        { path: 'post', element: <PostPage /> },
        { path: 'update/:id', element: <UpdatePage /> },
        { path: 'social', element: <ViewSocialInfo /> },
        { path: 'social-create', element: <CreateSocialInfo /> },
        { path: 'social/:id', element: <SocialUpdate /> },
        { path: 'content', element: <ContentPage /> },
        { path: 'content-post', element: <ContentPost /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
