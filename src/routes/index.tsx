import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Home
      </h1>
      <p class="my-4">
        <A href="/setResponseHeader" class="text-sky-600 hover:underline">
          SetResponseHeader Testing CSR
        </A>{" "}
        <span class="text-gray-400">|</span>{" "}
        <a href="/setResponseHeader" class="text-sky-600 hover:underline">
          SetResponseHeader Testing SSR
        </a>{" "}
        <br />
        <A href="/getRequestEvent" class="text-sky-600 hover:underline">
          getRequestEvent Testing CSR
        </A>{" "}
        <span class="text-gray-400">|</span>{" "}
        <a href="/getRequestEvent" class="text-sky-600 hover:underline">
          getRequestEvent Testing SSR
        </a>{" "}
      </p>
    </main>
  );
}
