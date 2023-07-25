import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

const components = [
  ActiveElement,
  KnowledgeBase,
  KnowledgeGrid,
  KnowledgeElement,
];

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app');
