<script lang="ts">
	import {
		App,
		Page,
		Navbar,
		Preloader,
		NavbarBackLink,
		Toggle
	} from 'konsta/svelte';
	import { MetaTags } from 'svelte-meta-tags';

	import '../app.css';
	import { navigating, page } from '$app/stores';
	import { loading, preferencesStore } from '$lib/stores';
	import BottomNavigation from '$lib/components/BottomNavigation.svelte';
	import { toTitleCase } from '$lib/utils/string';

	let toggleColors = {
		bgMaterial: 'bg-amber-200',
		checkedThumbBgIos: 'bg-gray-900',
		checkedThumbBgMaterial: 'bg-gray-900',
		checkedBgIos: 'bg-gray-400',
		checkedBgMaterial: 'bg-gray-400',
		thumbBgIos: 'bg-amber-300',
		thumbBgMaterial: 'bg-gray-900'
	};
	let description =
		'Forward and sync messages between all your social media platforms automatically with cordg For Free. Your personal message forwarder bot. Automate your VIP channels, and groups now!';
</script>

<MetaTags
	title={toTitleCase($page.url.pathname.split('/')[1]) || 'Home'}
	titleTemplate="%s | cordg"
	{description}
	canonical="https://www.cordg.com/"
	openGraph={{
		url: 'https://www.cordg.com/',
		title: 'cordg',
		description: description,
		site_name: 'cordg'
	}}
	twitter={{
		handle: '@cordgbot',
		cardType: 'summary_large_image',
		title: 'cordg: we connect',
		description: description,
		imageAlt: 'cordg logo'
	}}
/>

<App safeAreas theme={$preferencesStore.theme} class={$preferencesStore.darkMode ? 'dark' : ''}>
	<Page>
		<Navbar title="cordg" subtitle={$page.url.pathname.split('/')[1]} class="top-0 sticky">
			<svelte:fragment slot="left">
				{#if $page.url.pathname !== '/'}
					<NavbarBackLink onClick={() => history.back()} />
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="right">
				<div class="flex space-x-4">
					<Toggle
						colors={toggleColors}
						onChange={() => {
							$preferencesStore.darkMode = !$preferencesStore.darkMode;
						}}
						checked={$preferencesStore.darkMode}
					/>
				</div>
			</svelte:fragment>
		</Navbar>
		{#if $loading || $navigating}
			<div
				class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-500 opacity-75 flex flex-col items-center justify-center"
			>
				<Preloader size="w-16 h-16" />
			</div>
		{/if}
		<div class="flex flex-col lg:flex-row">
			{#if $page.data?.session?.user}
				<div class="w-20">
					<BottomNavigation />
				</div>
            {/if}
            <div class="flex-1 mx-auto w-full lg:max-w-screen-2xl p-4">
                <slot />
            </div>        
		</div>
	</Page>
</App>
