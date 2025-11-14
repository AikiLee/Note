import fs from "fs";
import path from "path";

// 您笔记的根目录
const srcPath = path.resolve(__dirname, "../../src");

/**
 * 将文件名转换为更易读的标题格式
 * (e.g., 'hello-world' -> 'Hello World')
 */
function toTitleCase(str: string): string {
    // 移除 .md 后缀并替换破折号为空格
    const withoutExt = str.replace(/\.md$/, "").replace(/-/g, " ");
    // 将每个单词的首字母大写
    return withoutExt.replace(/\b\w/g, (l) => l.toUpperCase());
}

/**
 * 递归地扫描目录并构建 VitePress 侧边栏项目
 * @param dir 当前扫描的目录
 * @param baseLink 用于构建链接的基础路径
 */
function getSidebarItems(dir: string, baseLink: string) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const items: any[] = [];

    // 排序：文件夹在前，文件在后，然后按名称排序
    dirents.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1;
        if (!a.isDirectory() && b.isDirectory()) return 1;
        // 使用 'zh-CN' 来支持中文文件名排序
        return a.name.localeCompare(b.name, "zh-CN");
    });

    for (const dirent of dirents) {
        if(dirent.isDirectory() && dirent.name === "Excalidraw"){
            continue;
        }
        const fullPath = path.join(dir, dirent.name);
        // 构造链接路径，并确保使用 / 作为分隔符
        const itemLink = path.join(baseLink, dirent.name).replace(/\\/g, "/");

        if (dirent.isDirectory()) {
            // 如果是目录，则创建一个可折叠的分组
            const children = getSidebarItems(fullPath, itemLink);
            if (children.length > 0) {
                items.push({
                    text: toTitleCase(dirent.name),
                    collapsed: true, // 默认折叠
                    items: children,
                });
            }
        } else if (dirent.isFile() && dirent.name.endsWith(".md")) {
            // 如果是 Markdown 文件，则创建一个链接
            const text = toTitleCase(dirent.name);
            const finalLink = "/" + itemLink.replace(/\.md$/, "");

            // 忽略 index.md 和 README.md 文件，因为它们通常是目录的入口
            if (dirent.name.toLowerCase() !== "index.md" && dirent.name.toLowerCase() !== "readme.md") {
                items.push({
                    text,
                    link: finalLink,
                });
            }
        }
    }
    return items;
}

// 导出生成的侧边栏配置
export const sidebar = getSidebarItems(srcPath, "");
