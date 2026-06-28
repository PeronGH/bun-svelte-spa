import { mount, unmount } from "svelte";
import App from "./App.svelte";

const target = document.getElementById("app")!;

let app = mount(App, { target });

if (import.meta.hot) {
  import.meta.hot.accept(async () => {
    await unmount(app, { outro: true });
    app = mount(App, { target });
  });
}
