import React from 'react';
import { createRoot } from 'react-dom/client';

function Component() {
    return (
        <>
            hellow doctor page
        </>
    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Component />

);