<script>
    // @ts-ignore
    import AOS from 'aos';
    import { onMount } from 'svelte';
    import Navbar from "$lib/components/Navbar/Navbar.svelte";

    import 'aos/dist/aos.css';
    import "../app.css";

    onMount(() => {
        AOS.init();
    });
</script>

<div class="h-screen flex flex-col">
    <slot />

    <footer class="w-full">
        <Navbar/>
    </footer>
</div>