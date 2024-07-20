<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";

    export let base64: string;
    export let downloadName: string;

    let contentType: string;
    let extension = downloadName.split(".").pop();
    switch (extension) {
        case "pdf":
            contentType = "application/pdf";
            break;
        default:
            contentType = "text/plain";
            break;
    }

    let url: string;

    let iframe: Element

    function createBlobObject() {
        const byteCharacters = atob(base64);
        const byteArray = [];

        for (let i = 0; i < byteCharacters.length; i++) {
            byteArray.push(byteCharacters.charCodeAt(i));
        }

        const arr = new Uint8Array(byteArray);
        return new Blob([arr], { type: contentType})
    }
    
    const download = () => {
        let blob = createBlobObject();
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = downloadName;
        link.click(); 
    }

    const goHome = () => {
        goto(base + "/")
    }
</script>

<iframe bind:this={iframe} style="display:none;" title={downloadName} src={url}></iframe>
<body>
    <h1 id="title" class="bebas-neue-bold">Your document is ready for download!</h1>
    <div class="buttons">
        <button id="download" class="bebas-neue-regular" on:click={download}>Download</button>
        <button id="home" class="bebas-neue-regular" on:click={goHome}>Home</button> 
    </div>
</body>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        margin: 0;
        background-color: #ffe4e1;
        font-family: 'Segoe UI', Arial, sans-serif;
    }

    #title {
        margin-bottom: 40px;
    }

    h1 {
        text-align: center;
        font-family: 'Segoe UI', sans-serif;
        color: #333;
        font-size: 2.5em;

        padding: 0px;
        margin: 0px;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        width: 80%;
        max-width: 600px; /* Slightly increased max-width */
        
        padding: 20px; /* Padding inside the form */
        border-radius: 10px; /* Rounded corners for the form */
    
        background: #ffc1cc; /* White background for form */
    }

    div>button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #d8bfd8;
        color: #333;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        width: 80%;
        margin-bottom: 10px;
    }

    div>button:hover {
        background-color: #9955bb;
        transform: translateY(-2px); /* Slight lift on hover */
    }

    .bebas-neue-regular {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .bebas-neue-bold {
        font-family: "Bebas Neue", sans-serif;
        font-weight: 600;
        font-style: normal;
    }
</style>
