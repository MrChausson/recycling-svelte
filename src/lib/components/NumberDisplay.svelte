<script lang="ts">
    export let targetNumber: number = 0;
    export let suffix: string = "";

    const speed = 200;
    let actualNumber: number = 0;

    function animate() {
        const time = targetNumber / speed;
        if (actualNumber < targetNumber) {
            actualNumber = Math.ceil(actualNumber + time);
            setTimeout(animate, 1);
        }
        else
            actualNumber = targetNumber;
    }

    function transformNumber(nb: number) {
        if (nb < 1000) return String(nb);
        let s = String(nb);
        let ns: string = s.slice(0, s.length-3) + " " + s.slice(s.length-3, s.length);
        return ns;
    }

    animate();
</script>

<p class={$$props.class}>
    {transformNumber(actualNumber)} {suffix}
</p>