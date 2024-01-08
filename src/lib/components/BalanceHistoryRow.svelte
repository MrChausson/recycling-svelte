<script lang="ts">
    export let amount: number;
    export let date: string;
    export let details: string = "";
</script>

<div class="w-full flex justify-between items-center py-2 px-4">
    <div>
        <h3 class="{amount > 0 ? 'text-success' : 'text-error'}">
            {amount > 0 ? '+' : ''}{amount} points {details}
        </h3>
        <p class="subtitle mt-1">
            {date}
        </p>
    </div>
    <div class="w-10 h-10 bg-brand-purple-light rounded-xl flex justify-center items-center">
        <p class="text-white">
            {date.substring(0, 2)}
        </p>
    </div>
</div>