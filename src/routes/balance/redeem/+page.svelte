<script>
    import RedeemCard from "$lib/components/RedeemCard.svelte";

</script>

<header>
    <h1 data-aos="fade-right">
        Redeem a reward
    </h1>
    <p class="ml-4 subtitle" data-aos="fade-right" data-aos-delay="200">
        Balance : 2589 Points
    </p>
</header>

<main class="w-full h-full flex flex-col justify-start items-center gap-8 pt-10 pb-4">
    <RedeemCard title="La Nona Restaurant -10%" price={2500}>
        <img slot="icon" src="/logo/nona.jpg" class="rounded-xl" alt="La Nona Restaurant">
    </RedeemCard>

    <RedeemCard title="Amazon 5€ Card" price={2000}>
        <img slot="icon" src="/logo/amazon.svg" alt="Amazon">
    </RedeemCard>

    <RedeemCard title="Amazon 10€ Card" price={4000}>
        <img slot="icon" src="/logo/amazon.svg" alt="Amazon">
    </RedeemCard>

    <RedeemCard title="Amazon 20€ Card" price={8000}>
        <img slot="icon" src="/logo/amazon.svg" alt="Amazon">
    </RedeemCard>
</main>