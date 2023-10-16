import {useHookstate as useState} from '@hookstate/core'

import initWasm, { greet } from "rust-functions";
import wasmBinary from "rust-functions/binary.wasm";
import {FormEvent} from "react";

let initWasmPromise: ReturnType<typeof initWasm>;

if (typeof document !== "undefined") {
  initWasmPromise = initWasm(wasmBinary);
}

export default function RustTestBrowser() {
    let result = useState<string | null>(null);

    let handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let name = String(formData.get("name"));

        await initWasmPromise;

        result.set(greet(name));
    };

    return (
        <main>
            <h1>Rust Test: Browser</h1>
            <p>This is a test of a Rust function running in the browser.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <button type="submit">Submit</button>
            </form>
            {typeof result.get() === "string" && (<p>Result: {result.get()}</p>)}
        </main>
    );
}