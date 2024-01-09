<script>
    // AOS
    // @ts-ignore
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { onMount } from 'svelte';

    // Footer
    import Footer from "$lib/components/Footer/Footer.svelte";

    // Tailwind app css
    import "../app.css";

    // PWA Manifest
    import { pwaInfo } from 'virtual:pwa-info'; 

    $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '<link rel="manifest" href="/manifest.json" />';

    onMount(() => {
        AOS.init();
    });
</script>

<svelte:head> 
 	{@html webManifestLink}
</svelte:head>

<div class="flex flex-col relative" style="height: calc(100vh - 48px);">
    <slot />
</div>

<Footer/>