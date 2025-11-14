import { defineConfig } from "vitepress";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import fg from "fast-glob";
import path from "path";
import { sidebar } from "./sidebar";
// 获取所有 Markdown 文件路径
const getMarkdownFiles = async () => {
    const files = await fg(["../src/**/*.md"], { cwd: path.resolve(__dirname, "../src") });
    return files.map((file) => ({
        filePath: file,
        routePath: `/${file.replace(/\.md$/, "").replace(/\\/g, "/")}`,
    }));
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "../src",
    async buildEnd() {
        const files = await getMarkdownFiles();
        console.table(files);
    },

    title: "myNote",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
    
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],
        /* 
            对于侧边栏来说最多支持6层嵌套，超过这个就不会显式
        */
        // sidebar: [
        //     {
        //         text: "Notes",
        //         collapsed: false,
        //         items: [
        //             { text: "Markdown Examples", link: "/markdown-examples" },
        //             { text: "backEnd", link: "/api-examples" },
        //             { text: "frontEnd", link: "/api-examples" },
        //         ],
        //     },
        //     {
        //         text: "BackEnd",
        //         collapsed: false,
        //         items: [
        //             { text: "Item A", link: "/item-a" },
        //             { text: "Item B", link: "/item-b" },
        //         ],
        //     },
            
        // ],
        sidebar: sidebar,

        /* 得益于 minisearch，VitePress 支持使用浏览器内索引进行模糊全文搜索,开启此配置就会启用 */
        search: {
            provider: 'local'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
    srcExclude: ['**/README.md', '**/TODO.md','src/Excalidraw/**']
});
