import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';
import { useLocation, useMatches } from '@remix-run/react';
import { useEffect } from 'react';

function Client() {
    return <RemixBrowser />;
}

hydrateRoot(document, <Client />);
