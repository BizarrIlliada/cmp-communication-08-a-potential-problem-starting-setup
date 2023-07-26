<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>

<script>
export default {
  name: 'KnowledgeGrid',
  inject: ['topics'],
};
</script>