import { AppShell, Box } from '@mantine/core';
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import SuspenseFallback from './SuspenseFallback';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

    return (
        <AppShell
            mih={'calc(100svh - var(--app-shell-header-height))'}
            bg={'#f5f5f5'}
            header={{ height: 70 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: {
                    desktop: !pathname.includes('/admin/events'),
                    mobile: true,
                },
            }}
        >
            <AppShell.Header>
                <Header />
            </AppShell.Header>

            <AppShell.Main
                mih={'calc(100svh - var(--app-shell-header-height))'}
                display={'flex'}
                style={{
                    flexDirection: 'column',
                }}
            >
                <Box flex={1}>
                    <SuspenseFallback>
                        <Outlet />
                    </SuspenseFallback>
                </Box>
                <Footer />
            </AppShell.Main>
        </AppShell>
    );
}

export default App;
