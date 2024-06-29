import { atom } from 'recoil';

const colorsAtom = atom<string[]>({
  key: 'colors',
  default: [],
});

export { colorsAtom };
