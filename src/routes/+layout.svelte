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
  
<slot />

<footer class="w-full fixed bottom-0">
    <Navbar/>
</footer>