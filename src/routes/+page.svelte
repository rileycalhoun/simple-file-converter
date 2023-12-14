<script lang="ts">
    import { enhance } from "$app/forms";
    const authorizedExtensions = [ ".jpg", ".jpeg", ".png", ".pptx", ".docx" ]
</script>

<body>
    <h1>PDF Converter</h1>

    <form use:enhance method="POST" enctype="multipart/form-data" >
        <div class="file-options">
            <input type="file" id="file" name="uploadedFile" accept={authorizedExtensions.join(",")} required />
            <select name="format" required>
                <option value="pdf">PDF</option>
                <option value="docx">DOCX</option>
                <option value="pptx">PPTX</option>
            </select>
        </div>
        <button>
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
        background-color: #e8e8e8;
        font-family: 'Segoe UI', Arial, sans-serif;
    }

    h1 {
        text-align: center;
        font-family: 'Segoe UI', sans-serif;
        font-size: 2.5em;
        color: #333;
        margin-bottom: 40px;
    }

    div.error {
        color: #d9534f;
        font-weight: bold;
        margin: 10px 0;
        padding: 12px;
        border-radius: 8px;
        background-color: #f2dede;
        border: 1px solid #d9534f; /* Added border for emphasis */
        width: 80%;
        max-width: 500px;
        text-align: center; /* Centering the text */
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        max-width: 600px; /* Slightly increased max-width */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adding a subtle shadow for depth */
        padding: 20px; /* Padding inside the form */
        background: #ffffff; /* White background for form */
        border-radius: 10px; /* Rounded corners for the form */
    }

    form input, form select {
        padding: 12px 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1.1em;
        margin-bottom: 15px;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.3s, box-shadow 0.3s;
    }

    form input:focus, form select:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3); /* Shadow on focus for emphasis */
    }

    form button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: #fff;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
    }

    form button:hover {
        background-color: #0056b3;
        transform: translateY(-2px); /* Slight lift on hover */
    }

    form div.file-options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 15px;
    }
</style>