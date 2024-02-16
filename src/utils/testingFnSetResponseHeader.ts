import { isServer } from "solid-js/web";
import { setResponseHeader } from "vinxi/http";

const input = 1;

export const testingFnSetResponseHeader = () => {
  if (isServer) {
    console.log(`Server side testing function setting to ${input}`);
    setResponseHeader("Solid-Testing", input);
  } else {
    console.log(`Client side testing function `);
  }
  console.log("return");
  return `Testing function setting to ${input}`;
};
