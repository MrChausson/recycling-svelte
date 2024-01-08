<script>
    // @ts-ignore
    import AOS from 'aos';
    import { onMount } from 'svelte';
    import Footer from "$lib/components/Footer/Footer.svelte";

    import 'aos/dist/aos.css';
    import "../app.css";

    onMount(() => {
        AOS.init();
    });
</script>

<div class="flex flex-col relative" style="height: calc(100vh - 48px);">
    <slot />
</div>

<Footer/>