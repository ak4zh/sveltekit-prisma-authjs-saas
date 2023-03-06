<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { Button } from 'konsta/svelte';
</script>

{#if $page.data.session}
	<Button small inline onClick={() => signOut()}>Logout</Button>
{/if}
