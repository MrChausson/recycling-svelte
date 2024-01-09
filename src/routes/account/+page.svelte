<script>
    import AccountRow from "$lib/components/AccountRow.svelte";

</script>

<svelte:head>
    <link rel="manifest" href="/manifest.json" />
</svelte:head>

<header>
    <h1 data-aos="fade-right">
        Account
    </h1>
</header>

<main class="w-full h-full flex flex-col justify-start items-center mt-8 tall:mt-16" data-aos="fade-in" data-aos-delay="300">
    <div class="inline-flex self-start items-center gap-4 px-4 mb-4">
        <img class="w-14 rounded-full" src="/janedoe.jpg" alt="Jane Doe">
        <div class="">
            <h2>Jane Doe</h2>
            <p class="subtitle ml-1">
                janedoe@gmail.com
            </p>
        </div>
    </div>

    <AccountRow title="Edit Profile"/>
    <AccountRow title="Notification"/>
    <AccountRow title="Request a new trash can"/>
    <AccountRow title="Terms and Conditions"/>
    
    <div class="w-full flex justify-center items-center mt-8">
        <button class="rounded-3xl border border-gray-800">
            <h3 class="px-4 py-2">
                Report an incident
            </h3>
        </button>
    </div>
</main>