<!-- src/routes/SchedulePickup.svelte -->

<script>
    import { onMount } from 'svelte';
  
    let date = '';
    let time = '';
  
    onMount(() => {
      // Additional setup logic can go here
    });
  </script>
  
  <div>
    <h1>Schedule Pickup</h1>
    <label>Date: <input bind:value={date} /></label>
    <label>Time: <input bind:value={time} /></label>
    <button on:click={() => console.log('Pickup scheduled!', { date, time })}>Confirm Pickup</button>
    <button on:click={() => back()}>Back</button>
  </div>
  