import { writable, type Writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store';

export const preferencesStore = persisted('preferences', {
	theme: 'material',
	darkMode: false
});

export const loading: Writable<boolean> = writable(false);
