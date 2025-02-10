import { initData, mainStore } from "./main";
import { enableStaticRendering } from "mobx-react-lite";

let clientStore: mainStore | null = null;

enableStaticRendering(typeof window === "undefined");

function initStore(initData?: { store?: initData }): mainStore {
  const store = clientStore ?? new mainStore(initData?.store);

  if (initData?.store) {
    store.hydrate(initData.store);
  }

  if (typeof window === "undefined") return store;
  if (!clientStore) clientStore = store;

  return store;
}

export default function useStore(initData?: { store?: initData }): mainStore {
  return initStore(initData);
}
