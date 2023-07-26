<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid @select-topic="$emit('select-topic', $event)" />
  </section>
</template>

<script>
export default {
  name: 'KnowledgeBase',
  emits: ['select-topic'],
};
</script>