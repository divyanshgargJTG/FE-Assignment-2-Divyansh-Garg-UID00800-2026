import { createBrowserRouter } from 'react-router';

import Demo from '@/pages/Demo/Demo';
import NotFound from '@/pages/NotFound/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Demo,
    },
    {
        path: '*',
        Component: NotFound,
    },
]);
