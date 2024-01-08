<script lang="ts">
    export let title: string;
    export let href: string;
    export let aosAnim: string = "fade-up";
    export let aosDelay: string = "400";

    let elClass: string = $$props.class || "";
</script>

<a {href} class="w-[90%] h-[150px] tall:h-40 flex justify-start items-start rounded-4xl shadow-light-32 relative {elClass}" data-aos={aosAnim} data-aos-delay={aosDelay}>
    <div class="w-full h-full pt-4 pb-2 pl-4 pr-2">
        <div class="flex flex-row items-center gap-2">
            <slot name="icon"/>
    
            <h2>
                {title}
            </h2>
        </div>

        <p class="w-fit subtitle ml-4 mt-1">
            <slot name="subtitle"/>
        </p>
        
        <slot/>
    </div>

    <div class="absolute top-4 right-3">
        <svg class="text-light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41692 20L15.0036 13.4134C15.3749 13.0367 15.5831 12.529 15.5831 12C15.5831 11.471 15.3749 10.9633 15.0036 10.5866L8.41692 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>                
    </div>
</a>