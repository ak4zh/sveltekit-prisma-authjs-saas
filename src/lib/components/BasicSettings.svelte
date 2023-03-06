<script lang="ts">
	import { preferencesStore } from '$lib/stores';
	import { List, ListItem, Toggle, Radio, BlockTitle } from 'konsta/svelte';
</script>

<BlockTitle>Theme</BlockTitle>
<List strong>
	<ListItem label title="Minimal">
		<Radio
			slot="media"
			onChange={() => ($preferencesStore.theme = 'ios')}
			component="div"
			checked={$preferencesStore.theme === 'ios'}
		/>
	</ListItem>
	<ListItem label title="Playful">
		<Radio
			slot="media"
			onChange={() => ($preferencesStore.theme = 'material')}
			component="div"
			checked={$preferencesStore.theme === 'material'}
		/>
	</ListItem>
</List>
<List strong>
	<ListItem title="Dark Mode" label>
		<Toggle
			slot="after"
			component="div"
			onChange={() => {
				$preferencesStore.darkMode = !$preferencesStore.darkMode;
			}}
			checked={$preferencesStore.darkMode}
		/>
	</ListItem>
</List>

<!-- <BlockTitle>Team</BlockTitle>
<List strong>
	<ListItem
		link
		after="Send Suggestions"
		href="https://t.me/ak4zh"
		header="Developer"
		title="ak4zh"
	/>
</List> -->
