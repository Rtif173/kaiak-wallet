import { Writable, writable } from 'svelte/store';
import type { LoadedElements } from '../machinery/eventListener';
import type { NavigationState } from '../machinery/NavigationState';
import type { SoftwareKeysState } from '../machinery/SoftwareKeysState';

export const loadedComponentStore: Writable<LoadedElements> = writable<LoadedElements>(
  {
    elements: [],
  }
);

export const navigationStore: Writable<NavigationState> = writable({
  menu: 'wallet',
  account: undefined,
  wallet: undefined,
});

export const softwareKeysStore: Writable<SoftwareKeysState> = writable({
  middleKey: undefined,
});
