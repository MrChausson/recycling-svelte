<script lang="ts">
    interface CalendarDays extends Object {
        day: number
        isActualMonth: boolean,
        isCollectionDay: boolean,
    };

    const actualDay = new Date().getDate();
    const days: Array<CalendarDays> = [];

    for (let i = 1; i < 36; i++) {
        days.push({
            day: (i <= 31) ? i : i - 31,
            isActualMonth: (i <= 31) ? true : false,
            isCollectionDay: [4, 11, 18, 25].includes(i)
        });
    }
</script>

<header>
    <h1 data-aos="fade-right">
        Collect Calendar
    </h1>
</header>

<main class="w-full h-full mt-8 tall:mt-16">
    <div class="w-[96%] mx-auto flex flex-col justify-center items-center shadow-centered" data-aos="fade-in" data-aos-delay="300">
        <h2 class="w-full text-center border border-b-0 py-2">January</h2>

        <div class="w-full grid grid-cols-7">
            <div class="calendar-day">M</div>
            <div class="calendar-day">T</div>
            <div class="calendar-day">W</div>
            <div class="calendar-day">T</div>
            <div class="calendar-day">F</div>
            <div class="calendar-day">S</div>
            <div class="calendar-day">S</div>
        </div>
        <div class="w-full grid grid-cols-7">
            {#each days as d}
                <div class="calendar-item" class:actual-day={d.day == actualDay}  style="aspect-ratio: 1/1.3;">
                    <p class="{d.isActualMonth ? 'font-medium' : 'text-light'}" >
                        {d.day}
                    </p>
                    {#if d.isCollectionDay}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 6.25V15.76C15.8805 15.9087 15.7828 16.0737 15.71 16.25H8.29C8.09507 15.8049 7.77466 15.4263 7.36796 15.1604C6.96126 14.8945 6.4859 14.7529 6 14.7529C5.5141 14.7529 5.03874 14.8945 4.63204 15.1604C4.22534 15.4263 3.90493 15.8049 3.71 16.25H3C2.73478 16.25 2.48043 16.1446 2.29289 15.9571C2.10536 15.7696 2 15.5152 2 15.25V6.25C2 5.71957 2.21071 5.21086 2.58579 4.83579C2.96086 4.46071 3.46957 4.25 4 4.25H14C14.5304 4.25 15.0391 4.46071 15.4142 4.83579C15.7893 5.21086 16 5.71957 16 6.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 13.36V16.25H20.29C20.1163 15.848 19.8396 15.4989 19.4879 15.2379C19.1362 14.9769 18.7219 14.8134 18.2868 14.7637C17.8517 14.714 17.4111 14.7799 17.0096 14.9548C16.6081 15.1298 16.2599 15.4075 16 15.76V7.25H18.43C18.6035 7.25003 18.7741 7.29522 18.9249 7.38114C19.0757 7.46705 19.2015 7.59072 19.29 7.74L20.2 9.25L21.43 11.3C21.8033 11.9223 22.0004 12.6343 22 13.36Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.49999 17.25C8.49999 17.913 8.2366 18.5489 7.76776 19.0178C7.29892 19.4866 6.66304 19.75 5.99999 19.75C5.33695 19.75 4.70107 19.4866 4.23223 19.0178C3.76339 18.5489 3.49999 17.913 3.49999 17.25C3.49802 16.9055 3.56962 16.5646 3.70999 16.25C3.90492 15.8049 4.22533 15.4263 4.63203 15.1604C5.03873 14.8945 5.5141 14.7529 5.99999 14.7529C6.48589 14.7529 6.96125 14.8945 7.36796 15.1604C7.77466 15.4263 8.09506 15.8049 8.28999 16.25C8.43037 16.5646 8.50197 16.9055 8.49999 17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5 17.25C20.5 17.913 20.2366 18.5489 19.7678 19.0178C19.2989 19.4866 18.663 19.75 18 19.75C17.337 19.75 16.7011 19.4866 16.2322 19.0178C15.7634 18.5489 15.5 17.913 15.5 17.25C15.498 16.9055 15.5696 16.5646 15.71 16.25C15.7828 16.0737 15.8805 15.9087 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.4304 16.5646 20.502 16.9055 20.5 17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 11.25H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 8.25H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <div class="px-4" data-aos="fade-in" data-aos-delay="600">
        <div class="inline-flex justify-center items-center gap-2 mt-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 6.25V15.76C15.8805 15.9087 15.7828 16.0737 15.71 16.25H8.29C8.09507 15.8049 7.77466 15.4263 7.36796 15.1604C6.96126 14.8945 6.4859 14.7529 6 14.7529C5.5141 14.7529 5.03874 14.8945 4.63204 15.1604C4.22534 15.4263 3.90493 15.8049 3.71 16.25H3C2.73478 16.25 2.48043 16.1446 2.29289 15.9571C2.10536 15.7696 2 15.5152 2 15.25V6.25C2 5.71957 2.21071 5.21086 2.58579 4.83579C2.96086 4.46071 3.46957 4.25 4 4.25H14C14.5304 4.25 15.0391 4.46071 15.4142 4.83579C15.7893 5.21086 16 5.71957 16 6.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 13.36V16.25H20.29C20.1163 15.848 19.8396 15.4989 19.4879 15.2379C19.1362 14.9769 18.7219 14.8134 18.2868 14.7637C17.8517 14.714 17.4111 14.7799 17.0096 14.9548C16.6081 15.1298 16.2599 15.4075 16 15.76V7.25H18.43C18.6035 7.25003 18.7741 7.29522 18.9249 7.38114C19.0757 7.46705 19.2015 7.59072 19.29 7.74L20.2 9.25L21.43 11.3C21.8033 11.9223 22.0004 12.6343 22 13.36Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.49999 17.25C8.49999 17.913 8.2366 18.5489 7.76776 19.0178C7.29892 19.4866 6.66304 19.75 5.99999 19.75C5.33695 19.75 4.70107 19.4866 4.23223 19.0178C3.76339 18.5489 3.49999 17.913 3.49999 17.25C3.49802 16.9055 3.56962 16.5646 3.70999 16.25C3.90492 15.8049 4.22533 15.4263 4.63203 15.1604C5.03873 14.8945 5.5141 14.7529 5.99999 14.7529C6.48589 14.7529 6.96125 14.8945 7.36796 15.1604C7.77466 15.4263 8.09506 15.8049 8.28999 16.25C8.43037 16.5646 8.50197 16.9055 8.49999 17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.5 17.25C20.5 17.913 20.2366 18.5489 19.7678 19.0178C19.2989 19.4866 18.663 19.75 18 19.75C17.337 19.75 16.7011 19.4866 16.2322 19.0178C15.7634 18.5489 15.5 17.913 15.5 17.25C15.498 16.9055 15.5696 16.5646 15.71 16.25C15.7828 16.0737 15.8805 15.9087 16 15.76C16.2599 15.4075 16.6081 15.1298 17.0096 14.9548C17.4111 14.7799 17.8517 14.714 18.2868 14.7637C18.7219 14.8134 19.1362 14.9769 19.4879 15.2379C19.8396 15.4989 20.1163 15.848 20.29 16.25C20.4304 16.5646 20.502 16.9055 20.5 17.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 11.25H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 8.25H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h3>
                Collection Day
            </h3>
        </div>
        <p class="subtitle">
            We will collect your trash on these days
        </p>
    </div>
</main>

<style>
    .calendar-day {
        @apply flex justify-center items-center border py-2 font-bold;
    }

    .calendar-item {
        @apply flex flex-col justify-between items-center border border-t-0 py-2;
    }
    
    .calendar-item.actual-day p {
        @apply font-bold text-brand-purple-normal;
    }
</style>