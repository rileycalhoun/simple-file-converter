<script lang="ts">
	import type { PageData } from "./$types";
    import PdfViewer from '$lib/PdfViewer.svelte';

    export let data: PageData;
    export let props: { file: { name: string, base64: string } } = data.props;
    export let { file } = props;
</script>

<PdfViewer
    base64={file.base64}
    downloadName={file.name} />
