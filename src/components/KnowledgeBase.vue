<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid :topics="topics" @select-topic="$emit('select-topic', $event)" />
  </section>
</template>

<script>
export default {
  name: 'KnowledgeBase',
  props: ['topics'],
  emits: ['select-topic'],
};
</script>