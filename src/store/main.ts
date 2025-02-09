import { makeAutoObservable } from "mobx";

interface initData {
  activeBlock?: string;
}

class mainStore {
  activeBlock: string;
  constructor(initData?: initData) {
    this.activeBlock = initData?.activeBlock ?? "Home";
    makeAutoObservable(this);
  }

  setActiveBlock(block: string) {
    this.activeBlock = block;
  }

  getActiveBlock(): string {
    return this.activeBlock;
  }

  hydrate(initData: initData) {
    if (!initData.activeBlock) return;
    this.activeBlock = initData.activeBlock;
  }
}

export { mainStore };
export type { initData };
