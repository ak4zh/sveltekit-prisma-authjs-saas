<script>
	import { signIn } from '@auth/sveltekit/client';
	import { Button } from 'konsta/svelte';
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h1 class="pt-14 text-[23vw] text-center sm:text-9xl leading-none select-none tracking-tightest font-extrabold 2xl:flex">
		<span
			data-content="Create."
			class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:animate-gradient-background-1"
		>	
			<span
				class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"
			>
				Create.</span
			>
		</span>
		<span
			data-content="Optimize."
			class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:animate-gradient-background-2"
		>
			<span
				class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"
			>
				Optimize.</span
			>
		</span>
		<span
			data-content="Refine."
			class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:animate-gradient-background-3"
		>
			<span
				class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"
			>
				Refine.</span
			>
		</span>
		<span
			data-content="Deploy."
			class="relative block"
		>
			<span
				class="px-2 text-teal-500"
			>
				Deploy.</span
			>
		</span>
	</h1>
	<p class="text-xl font-extralight text-gray-400 text-center p-4">CORDG: Your Simple Solution for Powerful Chatbots</p>
	<Button large inline onClick={() => signIn('github')}>Sign In with GitHub</Button>
</div>
