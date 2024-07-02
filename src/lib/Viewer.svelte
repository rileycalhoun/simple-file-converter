<script lang="ts">
    export let base64: string;
    export let downloadName: string;

    let mime: string;
    let extension = downloadName.split('.').reverse()[0];
    
    switch(extension.toLowerCase()) {
      case "pdf":
        mime = "application/pdf";
	    break;
      case "docx":
	    mime = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        break;
      case "pptx":
	    mime = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
	    break;
      default:
	    mime = "none";
	    break;
    }
</script>

<div class="pdf-viewer">
    {#if extension == "docx" || extension == "pptx"}
        <div class="automatic-download">
            <h1>If you see this, it means that I was unable to display the converted file!</h1>
            <h1>Don't freak out, it should have downloaded automatically!</h1>
        </div>
    {/if}

    <iframe title={downloadName} src="data:{mime};base64,{base64}" height="100%" width="100%">
    </iframe>
</div>

<style>
    .pdf-viewer {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        
        overflow-y: hidden;
        position: fixed;

        background-color: #ffffff;
    }

    iframe {
        flex: 1;
        border: none;
        height: 100%;
        width: 100%;
    }

    div.automatic-download {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.automatic-download>h1 {
        font-size: 24px;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
