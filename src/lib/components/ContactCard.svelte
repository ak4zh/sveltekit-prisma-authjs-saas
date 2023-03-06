<script>
	import { BlockTitle, List, ListItem } from 'konsta/svelte';
</script>

<BlockTitle>Contacts</BlockTitle>
<List strong>
	<ListItem
		label
		title="Feedback"
		href="https://feedback.cordg.com"
		subtitle="How can we make Cord G better for you?"
		target="_blank"
	>
		<span slot="after">Suggestions & Ideas</span>
	</ListItem>
	<!-- <ListItem
		header="Telegram"
		label
		title="Support"
		href="https://t.me/cordgsupport"
		subtitle="@cordgsupport"
		target="_blank"
	>
		<span slot="after">Talk to a team member</span>
	</ListItem> -->
	<ListItem label title="Email" subtitle="help@cordg.com" href="mailto:help@cordg.com">
		<span slot="after">Send an email</span>
	</ListItem>
</List>

<BlockTitle>Meet the Team</BlockTitle>
<List strong>
	<ListItem label header="Telegram" title="@ak4zh" href="https://t.me/ak4zh" target="_blank">
		<span slot="after">Developer</span>
	</ListItem>
</List>