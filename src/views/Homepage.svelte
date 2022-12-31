<script lang="ts">
    const now = new Date();
    const startDate = new Date(2017, 1, 6);

    const days = Math.floor(
        (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );
</script>

<main
    class="xl:ml-96 flex flex-col bg-homepage bg-scroll saturate-50 w-full h-screen xl:justify-around"
>
    <div class="flex flex-col w-full text-center mt-20 xl:mt-10">
        <p class="text-4xl xl:text-6xl font-bold text-white">Hey there!</p>
        <p class="text-2xl xl:text-3xl text-white mt-5">
            Nice to see you here. Let me give you some facts about me:
        </p>
    </div>
    <div
        class="grid grid-cols-1 xl:grid-cols-2 xl:col-span-1 2xl:grid-cols-3 w-fit mx-auto gap-5 mt-10 2xl:mt-0"
    >
        <div
            class="flex flex-col bg-neutral-800 py-7 rounded-md h-full justify-between"
        >
            <p class="text-white text-3xl font-bold text-center pb-5">
                Active Projects
            </p>
            <p
                class="flex my-auto mx-0 self-center text-4xl font-medium text-white justify-center items-center h-28 w-28 border-4 rounded-full border-primary"
            >
                3
            </p>
        </div>
        <div class="bg-neutral-800 py-5 px-10 rounded-md">
            <p class="text-white text-3xl font-bold text-center">
                Project Overview
            </p>
            <div class="mt-5 grid grid-cols-[8rem_1fr] text-white">
                <p class="text-xl">Java</p>
                <p class="my-auto">
                    <a
                        href="https://github.com/zFlxw/sorting-algorithms"
                        class="text-primary">sorting-algoriths</a
                    >
                    •
                    <a
                        href="https://github.com/zFlxw/advent-of-code-legacy"
                        class="text-primary">advent-of-code</a
                    >
                </p>
            </div>
            <div class="mt-5 grid grid-cols-[8rem_1fr] text-white">
                <p class="text-xl">TypeScript</p>
                <p class="my-auto">
                    <a
                        href="https://github.com/zFlxw/advent-of-typescript"
                        class="text-primary">advent-of-code</a
                    >
                    •
                    <a href="https://github.com/Metahond" class="text-primary"
                        >hondicard</a
                    >
                </p>
            </div>
            <div class="mt-5 grid grid-cols-[8rem_1fr] text-white">
                <p class="text-xl">HTML / CSS</p>
                <p class="my-auto">
                    <a
                        href="https://github.com/zFlxw/vocab-trainer"
                        class="text-primary">vocab-trainer</a
                    >
                    •
                    <a
                        href="https://github.com/zFlxw/bernerdev-codejam-1"
                        class="text-primary">berndev-codejam</a
                    >
                </p>
            </div>
            <div class="mt-5 mb-10 grid grid-cols-[8rem_1fr] text-white">
                <p class="text-xl">Rust</p>
                <p class="my-auto">
                    <a
                        href="https://github.com/zFlxw/advent-of-rust"
                        class="text-primary">advent-of-code</a
                    >
                    •
                    <a
                        href="https://github.com/zFlxw/counting-chars"
                        class="text-primary">counting-chars</a
                    >
                </p>
            </div>
        </div>
        <div class="bg-neutral-800 py-5 px-10 rounded-md w-72">
            <p class="text-white text-3xl font-bold text-center">Days</p>
            <p class="text-white text-lg text-center">since I started coding</p>
            <p
                class="flex mt-5 mx-auto text-4xl font-medium text-white justify-center items-center h-28 w-28 border-4 rounded-full border-primary"
            >
                {days}
            </p>
            <p class="mt-4 text-white text-center text-sm italic">
                (03 Feb. 2017)
            </p>
        </div>
    </div>
    <div class="text-center text-white font-petrona">
        <p class="text-2xl quote ">
            If you can't explain it to a six-year-old, you don't understand it
            yourself.
        </p>
        <p class="text-xl italic">~ Albert Einstein</p>
    </div>
</main>
