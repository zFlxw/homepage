<script>
    import { Home, User, Box, Mail, Github, Instagram } from 'lucide-svelte';

    const avatar = './assets/avatar.jpg';
    const currentYear = new Date().getFullYear();

    let mailIconColor = '#ffffff';
    let instaIconColor = '#ffffff';
    let githubIconColor = '#ffffff';
</script>

<nav class="bg-neutral-900 w-96 h-screen shrink-0">
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
            <div class="bg-neutral-800 mt-8 pl-8 py-4 flex flex-row gap-2 cursor-pointer">
                <Home size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">Home</p>
            </div>
            <div class="mt-2 pl-8 py-4 flex flex-row gap-2 cursor-pointer">
                <User size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">About Me</p>
            </div>
            <div class="mt-2 pl-8 py-4 flex flex-row gap-2 cursor-pointer">
                <Box size={32} color="#ffffff" />
                <p class="text-xl my-auto text-white font-medium ml-2">
                    My Projects
                </p>
            </div>
        </div>
        <div class="mb-10">
            <hr class="mx-5"/>
            <div class="mt-10 flex flex-row justify-between mx-20">
                <a
                    href="mailto:lxcalflxw@protonmail.com"
                    on:mouseenter={(_) => (mailIconColor = '#a2d2ff')}
                    on:mouseleave={(_) => (mailIconColor = '#ffffff')}
                    ><Mail
                        color={mailIconColor}
                        class="cursor-pointer hover:opacity-80 transition-opacity ease"
                    /></a
                >
                <a
                    href="https://instagram.com/i.am.flxw"
                    on:mouseenter={(_) => (instaIconColor = '#a2d2ff')}
                    on:mouseleave={(_) => (instaIconColor = '#ffffff')}
                    ><Instagram
                        color={instaIconColor}
                        class="cursor-pointer hover:opacity-80 transition-opacity ease"
                    /></a
                >
                <a
                    href="https://github.com/zFlxw"
                    on:mouseenter={(_) => (githubIconColor = '#a2d2ff')}
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
