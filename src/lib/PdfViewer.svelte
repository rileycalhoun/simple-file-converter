<script lang="ts">
    export let base64: string;
    export let downloadName: string;
</script>

<div class="pdf-viewer">
    <iframe title={downloadName} src="data:application/pdf;base64,{base64}" height="100%" width="100%"></iframe>
</div>

<style>
    .pdf-viewer {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    iframe {
        flex: 1;
        border: none;
    }
</style>