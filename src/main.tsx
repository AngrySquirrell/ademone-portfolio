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
import TextsPage from './pages/Admin/Texts';
import NotFound from './pages/NotFound';
import { PocketfieldProvider } from './providers/PocketfieldProvider';
import SuspenseFallback from './SuspenseFallback';
import { theme } from './scripts/theme';
const Accueil = lazy(() => import('./pages/Accueil'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Gallery = lazy(() => import('./pages/Admin/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Admin/Login'));
const ParcoursPresentation = lazy(() => import('./pages/ParcoursPresentation'));
const TransmissionSupervision = lazy(() => import('./pages/TransmissionSupervision'));
const ApprocheSoins = lazy(() => import('./pages/ApprocheSoins'));
const POLITIQUE_DE_CONFIDENTIALITE = lazy(() => import('./pages/Legal/PolitiqueDeConfidientalite'));
const MENTION_LEGALES = lazy(() => import('./pages/Legal/MentionLegales'));
import './index.css';
import '@mantine/carousel/styles.css';
import { ErrorBoundary } from './components/ErrorBoundary';
import Carousel from './pages/Admin/Carousel';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: '',
                element: <Accueil />,
            },
            {
                path: 'parcours-presentation',
                element: <ParcoursPresentation />,
            },
            {
                path: 'transmission-supervision',
                element: <TransmissionSupervision />,
            },
            {
                path: 'approche-soins',
                element: <ApprocheSoins />,
            },
            {
                path: 'contact',
                element: <Contact />,
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
                            {
                                path: 'gallery',
                                element: <Gallery />,
                            },
                            {
                                path: 'textes',
                                element: <TextsPage />,
                            },
                            {
                                path: 'Carousel',
                                element: <Carousel />,
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

Hypb.initPB('https://pocketbase.louisrvl.fr/', {
    userCollection: 'audrey_admin',
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
