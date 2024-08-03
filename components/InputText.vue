<template>
    <div>
        <p>{{ title }}</p>
        <input/>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: String,
})
</script>