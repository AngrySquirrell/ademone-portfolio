import { AuthProvider, Hypb } from '@hydevs/hypb';
import { Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App';
import AdminBreadcrumbs from './components/AdminBreadcrumbs';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import { PocketfieldProvider } from './providers/PocketfieldProvider';
import SuspenseFallback from './SuspenseFallback';
import { theme } from './scripts/theme';
import { config } from './config';
const Page1 = lazy(() => import('./pages/Page1'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Page5 = lazy(() => import('./pages/Page5'));
const Page2 = lazy(() => import('./pages/Page2'));
const Page3 = lazy(() => import('./pages/Page3'));
const Page4 = lazy(() => import('./pages/Page4'));
const POLITIQUE_DE_CONFIDENTIALITE = lazy(() => import('./pages/Legal/PolitiqueDeConfidientalite'));
const MENTION_LEGALES = lazy(() => import('./pages/Legal/MentionLegales'));
import './index.css';
import '@mantine/carousel/styles.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import Login from './pages/Admin/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '',
                element: <Page1 />,
            },
            {
                path: 'page-2',
                element: <Page2 />,
            },
            {
                path: 'page-3',
                element: <Page3 />,
            },
            {
                path: 'page-4',
                element: <Page4 />,
            },
            {
                path: 'page-5',
                element: <Page5 />,
            },
            {
                path: 'politique-de-confidentialite',
                element: <POLITIQUE_DE_CONFIDENTIALITE />,
            },
            {
                path: 'mentions-legales',
                element: <MENTION_LEGALES />,
            },
            {
                path: '/admin/login',
                element: <Login />,
            },
            {
                path: '/admin',
                element: (
                    <ProtectedRoute>
                        <Outlet />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        path: '',
                        element: (
                            <Container
                                mih="calc(100svh - var(--app-shell-header-height))"
                                mt={32}
                                mb={64}
                            >
                                <AdminBreadcrumbs />
                                <Outlet />
                            </Container>
                        ),
                        children: [
                            {
                                path: '',
                                element: <Dashboard />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

Hypb.initPB(config.pocketbase.url, {
    userCollection: config.pocketbase.userCollection,
    autoCancellation: false,
});

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <AuthProvider>
                <PocketfieldProvider>
                    <ModalsProvider>
                        <SuspenseFallback>
                            <RouterProvider router={router} />
                        </SuspenseFallback>
                    </ModalsProvider>
                </PocketfieldProvider>
                <Notifications />
            </AuthProvider>
        </MantineProvider>
    </StrictMode>
);
