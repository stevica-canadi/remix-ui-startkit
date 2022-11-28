import React from "react";
import { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";
import fonts from "./styles/fonts/fonts.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Fieldnode Digital inventory",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: styles },
  ];
}

function Html({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="font-sans bg-gray-900">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="theme-color" content="#ffffff" />
        {title ? <title>{title}</title> : null}

        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {children}
      </body>
    </html>
  );
}

export function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const data = useLoaderData();

  return (
    <Html title={title}>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data?.ENV)}`,
        }}
      />
      {children}
    </Html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
