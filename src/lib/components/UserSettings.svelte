<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { List, ListItem, BlockTitle, Button } from 'konsta/svelte';
	import SignOutButton from './SignOutButton.svelte';
</script>

{#if $page.data.session?.user}
	<BlockTitle>Account Info</BlockTitle>
	<List strong>
		<ListItem title={$page.data.session?.user?.name} subtitle={$page.data.session?.user?.email}>
			<SignOutButton slot="after"/>
		</ListItem>
	</List>
{/if}