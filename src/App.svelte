<script lang="ts">
    import Navbar from './components/Navbar.svelte';
    import Homepage from './views/Homepage.svelte';
    import About from './views/About.svelte';

    let activeIndex = 1;
</script>

<main class="w-full flex flex-row">
    <Navbar />
    {#if activeIndex === 0}
        <Homepage />
    {:else if activeIndex === 1}
        <About />
    {/if}
</main>

<style>
</style>
