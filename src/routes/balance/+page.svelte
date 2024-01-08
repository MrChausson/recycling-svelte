<script>
    import BalanceHistoryRow from "$lib/components/BalanceHistoryRow.svelte";

</script>

<header>
    <div class="w-full inline-flex justify-between">
        <h1 data-aos="fade-right">
            Your Balance
        </h1>

        <a href="balance/redeem" class="rounded-3xl border border-gray-800" data-aos="fade-left">
            <p class="font-medium text-normal px-2 py-1">
                Redeem
            </p>
        </a>
    </div>
</header>

<main class="w-full h-full flex flex-col justify-start items-center pt-10 pb-4 overflow-hidden">
    <div class="w-full h-52 px-2 relative">
        <div class="w-full h-full bg-chart-full bg-center bg-contain bg-no-repeat"></div>
        <div class="absolute top-8 right-6 bg-opacity-90 bg-white rounded-3xl border border-brand-yellow-dark shadow-light-16" data-aos="fade-down" data-aos-delay="200">
            <p class="font-medium text-normal px-2 py-1">
                2589 Points
            </p>
        </div>
    </div>

    <hr class="mt-2 w-[90%]">

    <h2 class="self-start px-4 mt-6">
        History
    </h2>

    <div class="w-full flex flex-col mt-4 overflow-scroll">
        <BalanceHistoryRow amount={20} date="04/01/2024"/>
        <BalanceHistoryRow amount={-2000} details="(Amazon 5€ Card)" date="02/01/2024"/>
        <BalanceHistoryRow amount={20} date="28/12/2023"/>
        <BalanceHistoryRow amount={10} date="21/12/2023"/>
        <BalanceHistoryRow amount={20} date="14/12/2023"/>
        <BalanceHistoryRow amount={30} date="07/12/2023"/>
    </div>
</main>