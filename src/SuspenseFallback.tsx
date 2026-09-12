import { Flex, Loader } from '@mantine/core';
import { Suspense } from 'react';

const SuspenseFallback = ({ children }: { children: React.ReactNode }) => (
    <Suspense
        fallback={
            <Flex mih="100vh" align="center" justify="center">
                <Loader size="xl" variant="dots" mx="auto" />
            </Flex>
        }
    >
        {children}
    </Suspense>
);
export default SuspenseFallback;
