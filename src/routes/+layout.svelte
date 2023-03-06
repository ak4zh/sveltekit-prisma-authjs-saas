<script lang="ts">
	import {
		App,
		Page,
		Navbar,
		Link,
		Preloader,
		NavbarBackLink,
		Toggle,
		Segmented,
		SegmentedButton
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
				<div class="flex">
					{#if $page.url.pathname !== '/'}
						<Link href="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
						</Link>
					{/if}
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
		<div class="flex flex-col lg:flex-row gap-4">
			{#if $page.data?.session?.user}
				<div class="w-20">
					<BottomNavigation />
				</div>
            {/if}
            <div>
                <slot />
            </div>        
		</div>
	</Page>
</App>
