import { getRequestEvent } from "solid-js/web";
import { testingFnGetRequestEvent } from "~/utils/testingFnGetRequestEvent";

export default function Home() {
  const event = getRequestEvent();
  testingFnGetRequestEvent(event, "Hello from Home");
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        getRequestEvent
      </h1>
    </main>
  );
}
