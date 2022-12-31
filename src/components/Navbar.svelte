<script>
    import {
        Home,
        User,
        Box,
        Mail,
        Github,
        Instagram,
        Menu,
        X,
    } from 'lucide-svelte';

    const avatar = './assets/avatar.jpg';
    const currentYear = new Date().getFullYear();

    let mailIconColor = '#ffffff';
    let instaIconColor = '#ffffff';
    let githubIconColor = '#ffffff';

    let showBurgerMenu = false;
</script>

<nav class="block xl:hidden fixed z-20">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    {#if !showBurgerMenu}
        <div
            class="fixed left-1 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 w-12 h-12 rounded-full"
            on:click={() => (showBurgerMenu = true)}
        >
            <Menu
                size={32}
                color="#fff"
                class="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            />
        </div>
    {:else}
        <div class="fixed top-0 left-0 w-full h-screen bg-neutral-900">
            <div on:click={() => showBurgerMenu = false}>
                <X size={32} color="#fff" class="fixed right-0 m-5" />
            </div>
            
            <ul
                class="flex flex-col h-screen w-full justify-center gap-20 items-center "
            >
                <li>
                    <a href="/" class="flex flex-row gap-4">
                        <Home size={48} color="#ffffff" />
                        <p class="text-4xl my-auto text-white font-medium ml-2">
                            Home
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/about" class="flex flex-row gap-4">
                        <User size={48} color="#ffffff" />
                        <p class="text-4xl my-auto text-white font-medium ml-2">
                            About Me
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/projects" class="flex flex-row gap-4">
                        <Box size={48} color="#ffffff" />
                        <p class="text-4xl my-auto text-white font-medium ml-2">
                            My Projects
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    {/if}
</nav>

<nav
    class="hidden xl:block fixed top-0 left-0 bg-neutral-900 w-96 h-full shrink-0"
>
    <div class="h-full flex flex-col">
        <div class="flex flex-col mt-10">
            <img
                class="w-32 h-32 rounded-full mx-auto mt-5 outline outline-neutral-800"
                src={avatar}
                alt="avatar"
            />
            <p class="text-3xl text-white text-center font-semibold mt-5">
                Flxw
            </p>
            <p class="text-xl text-white text-center italic">Developer</p>
        </div>
        <div class="mt-10 mb-auto">
            <hr class="mx-4" />
            <div
                class="bg-neutral-800 mt-8 pl-8 py-4 flex flex-row gap-2 cursor-pointer"
            >
                <Home size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">Home</p>
            </div>
            <div class="mt-2 pl-8 py-4 flex flex-row gap-2 cursor-pointer">
                <User size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">
                    About Me
                </p>
            </div>
            <div class="mt-2 pl-8 py-4 flex flex-row gap-2 cursor-pointer">
                <Box size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">
                    My Projects
                </p>
            </div>
        </div>
        <div class="mb-10">
            <hr class="mx-5" />
            <div class="mt-10 flex flex-row justify-between mx-20">
                <a
                    href="mailto:lxcalflxw@protonmail.com"
                    on:mouseenter={(_) => (mailIconColor = '#00BFFF')}
                    on:mouseleave={(_) => (mailIconColor = '#ffffff')}
                    ><Mail
                        color={mailIconColor}
                        class="cursor-pointer hover:opacity-80 transition-opacity ease"
                    /></a
                >
                <a
                    href="https://instagram.com/i.am.flxw"
                    on:mouseenter={(_) => (instaIconColor = '#00BFFF')}
                    on:mouseleave={(_) => (instaIconColor = '#ffffff')}
                    ><Instagram
                        color={instaIconColor}
                        class="cursor-pointer hover:opacity-80 transition-opacity ease"
                    /></a
                >
                <a
                    href="https://github.com/zFlxw"
                    on:mouseenter={(_) => (githubIconColor = '#00BFFF')}
                    on:mouseleave={(_) => (githubIconColor = '#ffffff')}
                    ><Github
                        color={githubIconColor}
                        class="cursor-pointer hover:opacity-80 transition-all ease"
                    /></a
                >
            </div>
            <p class="mt-7 text-center text-white italic text-xs">
                Copyright © {currentYear}. All rights reserved.
            </p>
        </div>
    </div>
</nav>
