import { writable, type Writable } from 'svelte/store';
import { writable as localWritable } from 'svelte-local-storage-store';

export const preferencesStore = localWritable('preferences', {
	theme: 'material',
	darkMode: false
});

export const loading: Writable<boolean> = writable(false);
