<script lang="ts">
	import type { PageData } from "./$types";
	import Viewer from "$lib/Viewer.svelte";

    export let data: PageData;
    export let props: { file: { name: string, base64: string } } = data.props;
    export let { file } = props;
</script>

<Viewer
    base64={file.base64}
    downloadName={file.name} />
