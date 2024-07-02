<script lang="ts">
    const authorizedExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".pptx",
        ".docx",
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

        <select name="format" class="bebas-neue-regular" required>
            <option value="pdf">PDF</option>
            <option value="docx">DOCX</option>
            <option value="pptx">PPTX</option>
        </select>
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
        
        width: 80%;
        max-width: 600px; /* Slightly increased max-width */
        
        padding: 20px; /* Padding inside the form */
        border-radius: 10px; /* Rounded corners for the form */
    
        background: #ffc1cc; /* White background for form */
    }

    form>input, form>select {
        padding: 12px 15px;
        border-radius: 8px;
        font-size: 1.1em;
        margin-bottom: 15px;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    form>select {
        appearance: none;
        border: 0px;
        text-align: center;
    }

    form>input:focus, form>select:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3); /* Shadow on focus for emphasis */
    }

    form>button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: #fff;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
    }

    form>button:hover {
        background-color: #0056b3;
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