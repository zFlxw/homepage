<script lang="ts">
    import { X } from 'lucide-svelte';
    import {
        is2020ModalOpen,
        is2021ModalOpen,
        is2022ModalOpen,
    } from '../stores/ModalStore';
    import {fade, scale} from 'svelte/transition';

    export let title: string;
    export let condition: boolean;

    function closeModals() {
        is2020ModalOpen.set(false);
        is2021ModalOpen.set(false);
        is2022ModalOpen.set(false);
    }
</script>

{#if condition}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="flex xl:ml-96 w-5/6 h-full bg-neutral-900 bg-opacity-60 fixed items-center box-border justify-center z-40"
        transition:fade={{ duration: 350 }}
    >
        <div
            class="relative box-border bg-neutral-800 max-w-2xl mx-h-full w-5/6 h-min px-20 py-10 rounded-md"
            transition:scale={{ duration: 350 }}
        >
            <div on:click={() => closeModals()}>
                <X
                    class="absolute top-0 right-0 mt-5 mr-5 cursor-pointer"
                    size={32}
                    color="#fff"
                />
            </div>
            <p class=" text-white text-3xl text-center font-bold">{title}</p>
            <slot />
        </div>
    </div>
{/if}
