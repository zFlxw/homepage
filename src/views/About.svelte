<script lang="ts">
    import { User, Calendar, MapPin } from 'lucide-svelte';
    import Modal from '../components/Modal.svelte';
    import {
        is2020ModalOpen,
        is2021ModalOpen,
        is2022ModalOpen,
    } from '../stores/ModalStore';

    const src = '/assets/avatar.jpg';
</script>

<Modal condition={$is2020ModalOpen} title="2020">
    <p class=" text-white text-xl text-justify mt-5">
        A long break from coding were over and I started coding again. I
        stumbled across a video from the German YouTuber
        <a
            href="https://youtube.com/@CoasterFreakDE"
            target="__blank"
            class="text-primary">CoasterFreak</a
        >
        about Discord bot development and I later joined his project
        <a href="https://devsky.one" target="__blank" class="text-primary"
            >Melion</a
        >
        (now DevSky). <br /> <br />
        Throughout this time, I learned a lot about Minecraft and Discord bot development,
        but more important, I learned general programming conventions and patterns.
        Also, I met a lot of new people who helped me a lot in many different cases.
        Special thanks to
        <a
            href="https://github.com/DreamTexX"
            target="__blank"
            class="text-primary">DreamTexX</a
        >,
        <a
            href="https://github.com/zFl4wless"
            target="__blank"
            class="text-primary">Fl4wless</a
        >,
        <a
            href="https://github.com/cheetahbyte"
            target="__blank"
            class="text-primary">Leo</a
        >, and
        <a
            href="https://github.com/Morazzer"
            target="__blank"
            class="text-primary">Morazzer</a
        >, who helped me the most and also worked with me on Melion.
    </p>
</Modal>

<Modal condition={$is2021ModalOpen} title="2021">
    <p class=" text-white text-xl text-justify mt-5">
        After around 7 months, I decided to quit Melion. I decided to work on <a
            href="https://venterion.com"
            target="__blank"
            class="text-primary">Venterion</a
        >. I learned a lot more about Discord bot development, but also front-
        and backend development here. <br /> <br />
        Even though, Venterion was never meant to be a big project, I learned a lot
        about structuring projects and working with multiple people. I already had
        some experience with this from Melion, but as I was the only developer in
        the last three months or so, this was a whole new experience. <br />
        <br />
        As of today, Venterion is kind of abandoned and we are not working actively
        on it, mostly because of the lack of time.
    </p>
</Modal>

<Modal condition={$is2022ModalOpen} title="2022">
    <p class=" text-white text-xl text-justify mt-5">
        In the beginning of 2022, I focused on doing my first own web-app, a
        vocabulary trainer. Later, around Summer,
        <a
            href="https://github.com/zFl4wless"
            target="__blank"
            class="text-primary">Fl4wless</a
        >
        and I decided to work together on a web-app called
        <a href="https://metahond.codes" target="__blank" class="text-primary"
            >Hondicard</a
        >, which is at this point my current project. <br /> <br />
        Hondicard is one project of the developer team we founded, called Metahond Development. Our first goal was to 
        create a Discord bot with focus on providing a toolbox for developers inside Discord. Even though we have not
        officially discontinued this project, we are currently not working on it as we want to set our focus fully on
        the development of Hondicard. <br /> <br />
        To sum everything up, 2020 to 2022 were probably the most important years for my journey as a developer. I learned
        a lot and I got many different areas of development to know. I am very thankful for all the people who helped me
        up to this point and I am looking forward to the future.
    </p>
</Modal>

<main
    class="xl:ml-96 w-full h-screen bg-about bg-fixed saturate-50 md:h-screen xl:justify-around"
>
    <div
        class="w-full max-w-7xl h-5/6 bg-neutral-800 bg-opacity-90 mx-auto my-20 rounded-md flex flex-row"
    >
        <div class="w-1/4 border-r-neutral-900 border-r-4">
            <img
                {src}
                alt="Avatar"
                class="mt-10 mx-auto w-48 h-48 saturate-200 rounded-full"
            />
            <div class="mt-7 ml-12 flex gap-3">
                <User size={32} color="#fff" />
                <p class="text-2xl text-white">Maik</p>
            </div>
            <div class="ml-12 mt-3 flex gap-3">
                <Calendar size={32} color="#fff" />
                <p class="text-2xl text-white">23.01.2005</p>
            </div>
            <div class="ml-12 mt-3 flex gap-3">
                <MapPin size={32} color="#fff" />
                <p class="text-2xl text-white">Germany</p>
            </div>
        </div>
        <div class="relative">
            <span
                class="absolute -left-5.5 top-36 w-10 h-10 bg-primary border-4 border-neutral-900 rounded-full"
            />
            <span
                class="absolute -left-5.5 top-64 w-10 h-10 bg-primary border-4 border-neutral-900 rounded-full"
            />
            <span
                class="absolute -left-5.5 top-96 w-10 h-10 bg-primary border-4 border-neutral-900 rounded-full"
            />
            <span
                class="absolute -left-5.5 top-150 w-10 h-10 bg-primary border-4 border-neutral-900 rounded-full"
            />
            <span
                class="absolute -left-5.5 top-190 w-10 h-10 bg-primary border-4 border-neutral-900 rounded-full"
            />
        </div>
        <div class="relative w-3/4 mt-12">
            <h1 class="text-center text-5xl font-bold text-white">
                My Journey
            </h1>
            <div class="absolute left-10 top-20">
                <strong class="text-white text-2xl">2017</strong>
                <p class=" text-white text-xl pr-10 text-justify">
                    Starting my first projects, Minecraft plugins to be precise.
                    And therefore, I learned Java as my first language.
                </p>
            </div>
            <div class="absolute left-10 top-48">
                <strong class="text-white text-2xl">2019</strong>
                <p class=" text-white text-xl pr-10 text-justify">
                    After a long time of only developing Minecraft plugins, I
                    made my first desktop app as a school project.
                </p>
            </div>
            <div class="absolute left-10 top-80">
                <strong class="text-white text-2xl">2020</strong>
                <p class=" text-white text-xl pr-10 text-justify">
                    A long break from coding were over and I started coding
                    again. I stumbled across a video from the German YouTuber
                    <a
                        href="https://youtube.com/@CoasterFreakDE"
                        target="__blank"
                        class="text-primary">CoasterFreak</a
                    >
                    about Discord bot development and I later joined his project
                    <a
                        href="https://devsky.one"
                        target="__blank"
                        class="text-primary">Melion</a
                    >
                    (now DevSky).
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span
                        class="text-primary cursor-pointer"
                        on:click={() => is2020ModalOpen.set(true)}
                        >Learn more.</span
                    >
                </p>
            </div>
            <div class="absolute left-10 top-130">
                <strong class="text-white text-2xl">2021</strong>
                <p class=" text-white text-xl pr-10 text-justify">
                    After around 7 months, I decided to quit Melion. I decided
                    to work on <a
                        href="https://venterion.com"
                        target="__blank"
                        class="text-primary">Venterion</a
                    >. I learned a lot more about Discord bot development, but
                    also front- and backend development here.
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span
                        class="text-primary cursor-pointer"
                        on:click={() => is2021ModalOpen.set(true)}
                        >Learn more.</span
                    >
                </p>
            </div>
            <div class="absolute left-10 top-170">
                <strong class="text-white text-2xl">2022</strong>
                <p class=" text-white text-xl pr-10 text-justify">
                    In the beginning of 2022, I focused on doing my first own
                    web-app, a vocabulary trainer. Later, around Summer,
                    <a
                        href="https://github.com/zFl4wless"
                        target="__blank"
                        class="text-primary">Fl4wless</a
                    >
                    and I decided to work together on a web-app called
                    <a
                        href="https://metahond.codes"
                        target="__blank"
                        class="text-primary">Hondicard</a
                    >, which is at this point my current project.
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <span
                        class="text-primary cursor-pointer"
                        on:click={() => is2022ModalOpen.set(true)}
                        >Learn more.</span
                    >
                </p>
            </div>
        </div>
    </div>
</main>
