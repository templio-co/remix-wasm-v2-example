import type {ActionFunction, ActionFunctionArgs} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import {json} from "@remix-run/node";
import {add} from "rust-functions";

export let action: ActionFunction = async ({request}: ActionFunctionArgs) => {
    let formData = await request.formData();
    let a = Number(formData.get("a"));
    let b = Number(formData.get("b"));

    return json({result: add(a, b).toString()});
};

export default function RustTestServer() {
    let { a, b, result } = useActionData() ?? { a: 1, b: 2, result: null };

    return (
        <main>
            <h1>Rust Test: Server</h1>
            <p>This is a test of a Rust function running on the server.</p>
            <Form method="post">
                <label htmlFor="a">Add</label>
                <input type="number" id="a" name="a" defaultValue={a} />
                <label htmlFor="b">to</label>
                <input type="number" id="b" name="b" defaultValue={b} />
                <button type="submit">Submit</button>
            </Form>
            {typeof result === "string" && (<p>Result: {result}</p>)}
        </main>
    );
}