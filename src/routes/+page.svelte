<script lang="ts">
    const authorizedExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".ppt",
        ".pptx",
        ".docx",
        ".doc",
        ".pdf"
    ];
</script>

<body>
    <div id="title">
        <h1 class="bebas-neue-bold">Simple File Converter</h1>
        <h3 class="bebas-neue-bold">for Mrs. Calhoun</h3>
    </div>

    <form method="post" enctype="multipart/form-data">
        <input
            type="file"
            id="file"
            class="bebas-neue-regular"
            name="uploadedFile"
            accept={authorizedExtensions.join(",")}
            required 
        />
        <div id="select">
            <select name="format" class="bebas-neue-regular" required>
                <option value="pdf">PDF</option>
                <option value="docx">DOCX</option>
                <option value="pptx">PPTX</option>
            </select>
        </div>
        <button class="bebas-neue-regular">
            Convert
        </button>
    </form>
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

    h1, h3 {
        text-align: center;
        font-family: 'Segoe UI', sans-serif;
        color: #333;

        padding: 0px;
        margin: 0px;
    }

    h1 {
        font-size: 2.5em;
    }

    h3 {
        font-size: 2em;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
       
        padding: 20px;
        border-radius: 10px;
    
        background: #ffc1cc;
    }

    form>div#select {
        display: flex;
        flex-direction: row;
    }

    form>input, form>div>select {
        padding: 12px 15px;
        border-radius: 8px;
        font-size: 1.1em;
        margin-bottom: 15px;
        box-sizing: border-box;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    form>div>select {
        appearance: none;
        border: 0px;
        text-align: center;
    }

    form>button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #d8bfd8;
        color: #333;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
    }

    form>button:hover {
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