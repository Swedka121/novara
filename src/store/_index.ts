import { initData, mainStore } from "./main";

let clientStore: mainStore | null = null;

function initStore(initData: { store: initData }) {
  const store = clientStore ?? new mainStore();
  if (initData?.store) store.hydrate(initData.store);

  if (typeof window === "undefined") return store;
  if (!clientStore) clientStore = store;
  return store;
}

export default function useStore(initData: { store: initData }): mainStore {
  return initStore(initData);
}
