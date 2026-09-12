import { useAuthData } from '@hydevs/hypb';
import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { userData, loading } = useAuthData();
    const n = useNavigate();

    const isLoggedIn = useMemo(() => {
        return !!userData?.id;
    }, [userData]);
    useEffect(() => {
        if (!isLoggedIn && !loading) {
            n('/admin/login');
        }
    }, [loading, isLoggedIn, n]);

    return <>{children}</>;
};

export default ProtectedRoute;
