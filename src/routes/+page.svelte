<!-- src/routes/+page.svelte -->

<!-- src/routes/+page.svelte -->
<script lang="ts">
      import SchedulePickup from './SchedulePickup.svelte';
    import TrackProgress from './TrackProgress.svelte';
    import Gamification from './Gamification.svelte';
  
    let page = '';
    let currentComponent = { component: null, isHome: true };
  
     // Define the type for components
     type ComponentType = {
        component: typeof SchedulePickup | typeof TrackProgress | typeof Gamification | null;
        isHome: boolean;
    };

  const components: Record<string, ComponentType | { component: null; isHome: boolean }> = {
    home: { component: null, isHome: true },
    schedule: { component: SchedulePickup, isHome: false },
    progress: { component: TrackProgress, isHome: false },
    gamification: { component: Gamification, isHome: false },
  };
  
    function back() {
      // Define logic to go back
      console.log('Going back...');
    }
  
    $: currentComponent = components[page] as { component: null; isHome: boolean };
  </script>
  
  {#if currentComponent}
  <svelte:component this={currentComponent.isHome ? null : (currentComponent.component as typeof SchedulePickup | typeof TrackProgress | typeof Gamification)} {back} />
  {:else}
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  {/if}
  