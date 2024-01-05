<script lang="ts">
    export let aosAnim: string = "fade-up";
    export let aosDelay: string = "400";

    let elClass: string = $$props.class || "";
</script>

<button on:click class="w-[90%] h-40 flex justify-start items-start rounded-4xl shadow-light-32 relative {elClass}" data-aos={aosAnim} data-aos-delay={aosDelay}>
    <slot/>

    <div class="absolute top-4 right-3">
        <svg class="text-light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                
    </div>
</button>