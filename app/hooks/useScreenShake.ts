'use client';

import { useCallback } from 'react';

export default function useScreenShake(duration: number = 300) {
    const shake = useCallback(() => {
        if (typeof document === "undefined") return;

        document.body.classList.add("shake");

        setTimeout(() => {
            document.body.classList.remove("shake");
        }, duration);
    }, [duration]);

    return shake;
}
