import { getRequestEvent, isServer } from "solid-js/web";
import { setResponseHeader } from "vinxi/http";

const input = 1;
export const testingFnGetRequestEvent = (
  event: ReturnType<typeof getRequestEvent>
) => {
  if (isServer) {
    console.log(`Server side trying testing function setting to ${input}`);
    if (event?.request) {
      const cookie = event.request.headers.get("cookie");
      console.log(`Server side cookie: ${cookie}`);
    }
    if (event?.request && (event as any)?.response) {
      console.log(`Server side setting`);
      if ((event as any)?.response) {
        (event as any).response.headers.append(
          "set-cookie",
          `Solid-Testing=${input}; Path=/`
        );
      }
    } else {
      console.log(`Server side can't set no response`);
    }
    setResponseHeader("Solid-Testing", input);
  } else {
    console.log(`Client side testing function`);
  }
  console.log("return");
  return `Testing function setting to ${input}`;
};
