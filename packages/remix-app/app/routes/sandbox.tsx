import {NavLink, Outlet} from "@remix-run/react";

export default function Sandbox() {
    return <main>
        <h1>Sandbox</h1>
        <p>This is a sandbox for testing things.</p>
        <NavLink to="/sandbox/browser">
            <h2>Rust Test: Browser</h2>
        </NavLink>
        <NavLink to="/sandbox/node">
            <h2>Rust Test: Node</h2>
        </NavLink>
        <Outlet />
    </main>
}