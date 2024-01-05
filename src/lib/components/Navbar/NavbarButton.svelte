<script lang="ts">
    import { page } from '$app/stores';

    export let label: string;
    export let href: string;

    $: active = href === $page.url.pathname;
    
</script>

<a {href} class="flex-1 flex flex-col justify-center items-center">
    <div class:active={active}>
        <slot/>
    </div>
    <p class:active={active}>
        {label}
    </p>
</a>

<style>
    div.active {
        @apply text-brand-yellow-dark scale-110;
    }

    p.active {
        @apply font-bold text-brand-yellow-dark;
    }
</style>