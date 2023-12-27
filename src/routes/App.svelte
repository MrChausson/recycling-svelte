<!-- src/routes/App.svelte -->

<script context="module">
    export { segment };
  </script>
  
  <nav>
    <a href="/">Home</a>
    <a href="/schedule">Schedule Pickup</a>
    <a href="/progress">Track Progress</a>
    <a href="/gamification">Gamification</a>
  </nav>
  
  <main>
    <svelte:component this={segment} />
  </main>
  