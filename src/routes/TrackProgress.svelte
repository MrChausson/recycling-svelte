<!-- src/routes/TrackProgress.svelte -->

<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Fetch and display progress data
    });
  </script>
  
  <div>
    <h1>Track Progress</h1>
    <p>Recycling Progress:</p>
    <ul>
      <li>Achievements: [ ]</li>
      <li>Points Earned: XX</li>
      <li>Leaderboard</li>
    </ul>
    <button on:click={() => back()}>Back</button>
  </div>
  