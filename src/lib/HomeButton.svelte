<script lang="ts">
	import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    
    function onClick() {
        goto(base + "/")
    }

</script>

<button on:click={onClick}>Home</button>

<style>

    button {
        padding: 12px 25px;
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: #fff;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
        width: 99%;
    }


</style>