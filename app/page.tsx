'use client';

import useScreenShake from "./hooks/useScreenShake";

export default function Page() {
    const shake = useScreenShake();

    return (
        <main className="min-h-screen flex items-center justify-center bg-white">
            <button
                onClick={shake}
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
                Shake Screen
            </button>
        </main>
    );
}
