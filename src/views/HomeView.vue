<template>
    <div>
        <SliderSection class="slider" />
        <ContentSection class="content" />
    </div>
</template>

<script setup>
import SliderSection from '../components/SliderSection.vue'; // @ is an alias to /src
import ContentSection from '../components/ContentComponent.vue';
</script>

<style lang="css" scoped>
.content {
}

.slider {
    z-index: 0;
}
</style>

<!-- <template>
  <div class="home">
    <SliderSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SliderSection from "../components/SliderSection.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    SliderSection,
  },
});
</script> -->
