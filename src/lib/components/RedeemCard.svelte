<script lang="ts">
    export let title: string;
    export let price: number;
    export let aosAnim: string = "fade-up";
    export let aosDelay: string = "400";

    let elClass: string = $$props.class || "";
</script>

<button class="w-[90%] flex justify-start items-start rounded-2xl shadow-light-32 relative {elClass}" data-aos={aosAnim} data-aos-delay={aosDelay}>
    <div class="w-full h-full flex flex-row gap-4 p-4">
        <div class="w-12">
            <slot name="icon"/>
        </div>

        <div>
            <h2>
                {title}
            </h2>

            <p class="w-fit subtitle mt-1">
                Price : {price} points
            </p>
        </div>
    </div>
</button>