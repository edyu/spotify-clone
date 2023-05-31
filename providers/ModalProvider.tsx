"use client";

import { useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // server side
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal  />
        </>
    );
}

export default ModalProvider;
