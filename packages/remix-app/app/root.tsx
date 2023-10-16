import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, useRouteError,
} from "@remix-run/react";
import {PropsWithChildren} from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function Document({ children}: PropsWithChildren<{}>) {
  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      </body>
      </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
        <Document>
          <main>
            <h1>❌ Oops, looks like something went wrong! ❌ </h1>
            <h3><b>Status: </b> {error.status} ({error.statusText})</h3>
            <p>{error.data.message}</p>
          </main>
        </Document>
    );
  }

  let errorMessage = "Unknown error";
  if (error instanceof Error && (error && "message" in error)) {
    errorMessage = error.message;
  }

  return (
      <Document>
        <main>
          <h1>❌ Oops, looks like something went wrong!  ❌</h1>
          <p>{errorMessage}</p>
        </main>
      </Document>
  );
}