<template>
    <div>
        <p>{{ title }} : {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
    </div>
</template>
<script setup lang="ts">
const message = ref('')

const props = defineProps({
    title: String,
})
</script>