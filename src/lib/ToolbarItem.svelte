
<script lang="ts">
    export let imgSrc: string;
    export let altText: string;
    export let onClick: () => void;
</script>

<button on:click={onClick}>
    <img src={imgSrc} alt={altText} />
</button>