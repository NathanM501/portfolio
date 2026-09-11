<template>
    <div class="min-h-screen overflow-x-clip">
        <Navbar />
        <CommandPalette />

        <main>
            <component
                :is="sectionComponents[s.id]"
                v-for="s in sections"
                :key="s.id" />
        </main>

        <Footer />
        <BackToTop />
        <StatusBar />
    </div>
</template>

<script setup lang="ts">
    import type { Component } from 'vue';
    import { sections } from './utils/sections';
    import {
        Hero,
        Services,
        Projects,
        Resume,
        Skills,
        Contact,
    } from './components/Sections';

    const sectionComponents: Record<string, Component> = {
        accueil: Hero,
        services: Services,
        projects: Projects,
        resume: Resume,
        skills: Skills,
        contact: Contact,
    };
</script>
