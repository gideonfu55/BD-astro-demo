<script>
    let count = 0;

    function incrementCount() {
        count += 1;
    }

    function decrementCount() {
        count -= 1;
    }

    function resetCount() {
        count = 0;
    }
</script>

<h1>Counter Element</h1>
<p>Count: <span>{count}</span></p>
<button on:click={incrementCount}>+</button>
<button on:click={decrementCount}>-</button>
<button on:click={resetCount}>Reset</button>
