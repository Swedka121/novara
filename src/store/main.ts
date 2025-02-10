import { makeAutoObservable } from "mobx";

interface initData {
  activeBlock?: string;
  scroll?: number;
  scrollBoxes?: { name: string; scrollStart: number; scrollEnd: number }[];
}

class mainStore {
  activeBlock: string;
  scroll: number;
  scrollBoxes: { name: string; scrollStart: number; scrollEnd: number }[];
  constructor(initData?: initData) {
    this.activeBlock = initData?.activeBlock ?? "Home";
    this.scroll = initData?.scroll ?? 0;
    this.scrollBoxes = initData?.scrollBoxes ?? [];
    makeAutoObservable(this);
  }

  setActiveBlock(block: string) {
    this.activeBlock = block;
  }

  get ActiveBlock(): string {
    return this.activeBlock;
  }

  setScroll(scroll: number) {
    this.scroll = Math.floor(scroll);

    let scrollBox = this.ScrollBoxes.find(
      (box) => scroll >= box.scrollStart && scroll <= box.scrollEnd
    );

    this.setActiveBlock(scrollBox?.name ? scrollBox.name : "Out");
  }

  get Scroll(): number {
    return this.scroll;
  }

  get ScrollBoxes(): {
    name: string;
    scrollStart: number;
    scrollEnd: number;
  }[] {
    return this.scrollBoxes;
  }

  addScrollBox(scrollBox: {
    name: string;
    scrollStart: number;
    scrollEnd: number;
  }) {
    if (!this.scrollBoxes.find((a) => a.name == scrollBox.name))
      this.scrollBoxes.push(scrollBox);
  }

  clearScrollBoxes() {
    this.scrollBoxes = [];
  }

  hydrate(initData: initData) {
    if (!initData.activeBlock) return;
    this.activeBlock = initData.activeBlock;
  }
}

export { mainStore };
export type { initData };
