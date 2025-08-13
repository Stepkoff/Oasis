import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ThemeToggle } from '@/components/theme-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { useLayoutEffect } from 'react';
import { setWindowInnerHeightIntoCssVariable } from '@/lib/utils';

const RootComponent = () => {
    useLayoutEffect(() => {
        // 100vh bug fix for ios
        window.addEventListener('resize', setWindowInnerHeightIntoCssVariable);
        setWindowInnerHeightIntoCssVariable();
        return () => {
            window.removeEventListener(
                'resize',
                setWindowInnerHeightIntoCssVariable,
            );
        };
    }, []);

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="min-h-custom-screen">
                <div className="p-2 flex gap-2">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>{' '}
                    <Link to="/about" className="[&.active]:font-bold">
                        About
                    </Link>
                </div>
                <div className="border-2 p-4">
                    <ThemeToggle />
                </div>
                <hr />
                <Outlet />
                <TanStackRouterDevtools />
            </div>
        </ThemeProvider>
    );
};

export const Route = createRootRoute({
    component: () => <RootComponent />,
});
