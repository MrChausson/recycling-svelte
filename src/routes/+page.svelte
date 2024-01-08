<script>
    import MainCard from "$lib/components/MainCard.svelte";
    import NumberDisplay from "$lib/components/NumberDisplay.svelte";

</script>

<header>
    <h1 data-aos="fade-right">
        Collection System
    </h1>
    <p class="ml-4 subtitle" data-aos="fade-right" data-aos-delay="200">
        Arenys-de-Mar
    </p>
</header>

<main class="w-full h-full flex flex-col justify-start items-center gap-6 tall:gap-10 pt-8 tall:pt-14 pb-8">
    <MainCard title="Balance" href="/balance" class="bg-chart bg-right-bottom bg-no-repeat">
        <svelte:fragment slot="icon">
            <svg class="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 14.4326C9.0638 15.1686 9.41382 15.8501 9.97482 16.3307C10.5358 16.8113 11.263 17.0525 12 17.0026C14.42 17.0026 15 15.6126 15 14.4326C15 13.2526 14 12.0026 12 12.0026C10 12.0026 9 11.2126 9 9.60263C9.01865 9.23224 9.11202 8.86946 9.2745 8.53609C9.43698 8.20272 9.66521 7.90566 9.94546 7.66278C10.2257 7.41989 10.5522 7.2362 10.9053 7.12275C11.2583 7.00931 11.6307 6.96845 12 7.00263C12.7375 6.97087 13.4592 7.22254 14.0171 7.70601C14.5749 8.18948 14.9266 8.86809 15 9.60263" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18.5V17.1991M12 5.5V6.99887" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </svelte:fragment>
        <svelte:fragment slot="subtitle">
            <NumberDisplay targetNumber={2589} suffix="Points"/>
        </svelte:fragment>
    </MainCard>

    <MainCard title="Last Collect" href="/calendar" aosDelay="800">
        <svelte:fragment slot="icon">
            <svg class="mb-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 4.625H7C4.79086 4.625 3 6.41586 3 8.625V17.375C3 19.5841 4.79086 21.375 7 21.375H17C19.2091 21.375 21 19.5841 21 17.375V8.625C21 6.41586 19.2091 4.625 17 4.625Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 9.625H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 2.625V6.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 2.625V6.625" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 14.7143L10.6886 16.4029C10.748 16.463 10.8187 16.5107 10.8967 16.5433C10.9747 16.5759 11.0583 16.5927 11.1429 16.5927C11.2274 16.5927 11.3111 16.5759 11.389 16.5433C11.467 16.5107 11.5377 16.463 11.5972 16.4029L15 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </svelte:fragment>
        <svelte:fragment slot="subtitle">
            04/01/2024
        </svelte:fragment>

        <div class="mt-3 tall:mt-6">
            <h3>
                Collect Statut:
                <span class="inline-flex justify-center items-center text-success">
                    Sorted
                    <svg class="ml-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.90009 12.0865L9.56354 14.75C9.65723 14.8447 9.76881 14.92 9.89185 14.9714C10.0148 15.0228 10.1468 15.0493 10.2801 15.0493C10.4134 15.0493 10.5454 15.0228 10.6684 14.9714C10.7914 14.92 10.903 14.8447 10.9967 14.75L16.3641 9.38245" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.7533 17.2467 2.5 12 2.5C6.7533 2.5 2.5 6.7533 2.5 12C2.5 17.2467 6.7533 21.5 12 21.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </h3>

            <p class="subtitle w-fit ml-4">
                +20 points
            </p>
        </div>
    </MainCard>

    <MainCard title="Redeem" href="/balance/redeem" aosDelay="1200">
        <svelte:fragment slot="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 8.91667V5.83333C21.25 5.01558 20.9251 4.23132 20.3469 3.65309C19.7687 3.07485 18.9844 2.75 18.1666 2.75H15.0833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0833 21.25H18.1666C18.9844 21.25 19.7687 20.9251 20.3469 20.3469C20.9251 19.7687 21.25 18.9844 21.25 18.1666V15.0833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.75 15.0833V18.1666C2.75 18.9844 3.07485 19.7687 3.65309 20.3469C4.23132 20.9251 5.01558 21.25 5.83333 21.25H8.91667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.91667 2.75H5.83333C5.01558 2.75 4.23132 3.07485 3.65309 3.65309C3.07485 4.23132 2.75 5.01558 2.75 5.83333V8.91667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.93866 8.08167V15.9183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.9693 8.08167V15.9183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8.08167V15.9183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0307 8.08167V15.9183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.0613 8.08167V15.9183" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </svelte:fragment>
        <svelte:fragment slot="subtitle">
            2 Rewards Available
        </svelte:fragment>
    </MainCard>
</main>
