<template>
    <div class="content" v-if="menuNumber !== 0">
      
        <div class="component-section">
            <About v-if="menuNumber === 1" />
            <Resume v-if="menuNumber === 2" />
            <Skills v-if="menuNumber === 3" />
            <Project v-if="menuNumber === 4" />
			  <Contact v-if="menuNumber === 5" />
        </div>
    </div>
</template>

<script setup lang="ts">
import About from "./AboutComponent.vue"
import Resume from "./ResumeComponent.vue"
import Skills from "./SkillsComponent.vue"
import Project from "./ProjectComponent.vue"
import Contact from "./ContactComponent.vue"

import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore();
const getters = store.getters
const menuNumber = computed(() => getters.getMenuNumber)
</script>

<style scoped>
.content {
    width: 100%;
    height: auto;
    background-color: rgb(24, 23, 23);
    margin-top: -30px;
    position: relative;
    display: block;
    padding-top: 50px;
    padding-bottom: 50px;
}

.component-section {
    background-color: #494B50;
    width: 73%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 7px;
    display: block;
    padding: 30px;
    position: relative;
}

@media (max-width: 1950px) {
    .component-section {
        margin-top: -8%;
    }
}

@media (max-width: 1300px) {
    .component-section {
        margin-top: -5%;
    }
}
</style>
