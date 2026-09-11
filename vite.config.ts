import { defineConfig, type Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { content } from './src/data/content';

const seoPlugin = (): Plugin => ({
    name: 'portfolio-seo',

    transformIndexHtml() {
        const absoluteUrl = (path: string): string =>
            new URL(path, content.seo.siteUrl).toString();
        const canonicalUrl = absoluteUrl(content.seo.canonicalPath);

        const ogUrl = absoluteUrl(content.seo.openGraph.url);

        const imageUrl = absoluteUrl(content.seo.openGraph.image);

        const twitterImageUrl = absoluteUrl(content.seo.twitter.image);

        return {
            tags: [
                { tag: 'title', children: content.seo.title, injectTo: 'head' },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'description',
                        content: content.seo.description,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'keywords',
                        content: content.seo.keywords.join(', '),
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { name: 'author', content: content.seo.author },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { name: 'robots', content: 'index, follow' },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { name: 'theme-color', content: content.seo.themeColor },
                    injectTo: 'head',
                },
                {
                    tag: 'link',
                    attrs: { rel: 'canonical', href: canonicalUrl },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:type',
                        content: content.seo.openGraph.type,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:site_name',
                        content: content.seo.author,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { property: 'og:locale', content: 'fr_FR' },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { property: 'og:url', content: ogUrl },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:title',
                        content: content.seo.openGraph.title,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:description',
                        content: content.seo.openGraph.description,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { property: 'og:image', content: imageUrl },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image:alt',
                        content: content.seo.openGraph.imageAlt,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:card',
                        content: content.seo.twitter.card,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:title',
                        content: content.seo.twitter.title,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:description',
                        content: content.seo.twitter.description,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: { name: 'twitter:image', content: twitterImageUrl },
                    injectTo: 'head',
                },
                {
                    tag: 'meta',
                    attrs: {
                        name: 'twitter:image:alt',
                        content: content.seo.twitter.imageAlt,
                    },
                    injectTo: 'head',
                },
                {
                    tag: 'script',
                    attrs: { type: 'application/ld+json' },
                    children: JSON.stringify(content.seo.jsonLd),
                    injectTo: 'head',
                },
            ],
        };
    },
});

export default defineConfig({
    plugins: [
        seoPlugin(),
        vue(),
        tailwindcss(),
        Components({
            dirs: ['src/components'],
            dts: true,
        }),
        AutoImport({
            imports: ['vue', '@vueuse/core'],
            dirs: ['src/composables', 'src/constants', 'src/utils'],
            vueTemplate: true,
            dts: true,
            eslintrc: {
                enabled: true,
                filepath: './.eslintrc-auto-import.json',
            },
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: true,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
