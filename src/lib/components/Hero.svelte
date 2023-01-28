<script lang="ts">
    import Button from '$lib/components/Button.svelte';

    import { Mouse } from 'lucide-svelte';
</script>

<div class="hero-bg h-screen bg-cover flex justify-center items-center">
    <div class="h-full flex items-center">
        <img src="assets/avatar.jpg" alt="Avatar" class="w-96 h-96 rounded-full shadow-2xl"/>
    </div>
    <div class="ml-12">
        <h1 class="text-white text-6xl font-semibold">EHLO Maik</h1>
        <h3 class="text-white mt-5 text-3xl w-full max-w-5xl">My name is Maik and I create stuff. Oh, you want to know what stuff? Find out here! </h3>
        <div class="mt-12 flex gap-6">
            <Button title="About Me" color="bg-primary"/>
            <Button title="Projects" color="bg-neutral-800"/>
        </div>
    </div>
    <div class="absolute bottom-12 left-50 -translate-x-1/2">
        <Mouse size={64} color="#fff"/>
    </div>
</div>