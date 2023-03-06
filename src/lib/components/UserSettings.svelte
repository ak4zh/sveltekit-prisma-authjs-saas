<script lang="ts">
	import { page } from '$app/stores';
	import { List, ListItem, BlockTitle, Button } from 'konsta/svelte';
	import SignOutButton from './SignOutButton.svelte';
</script>

{#if $page.data.session?.user}
	<BlockTitle>Account Info</BlockTitle>
	<List strong>
		<ListItem title={$page.data.session?.user?.name} subtitle={$page.data.session?.user?.email}>
			<img
				class="rounded-lg w-20"
				slot="media"
				src={$page.data.session.user.image}
				width="80"
				alt="demo"
			/>
			<SignOutButton slot="after" />
		</ListItem>
	</List>
{/if}
