import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import yaml from "js-yaml";

const worksDirectory = path.join(process.cwd(), "content/works");

function cmsEnabled() {
    const { MICROCMS_SERVICE_DOMAIN: domain, MICROCMS_API_KEY: key } = process.env;
    if (!domain && !key) return false;
    if (!key || !domain || !/^[a-z0-9-]+$/.test(domain)) {
        throw new Error("microCMS のサービスドメインと API キーを確認してください");
    }
    return true;
}

async function requestWorks(suffix, allowMissing = false) {
    const endpoint = process.env.MICROCMS_WORKS_ENDPOINT || "works";
    const response = await fetch(
        `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${encodeURIComponent(endpoint)}${suffix}`,
        {
            headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
            next: { revalidate: 60 },
        }
    );
    if (allowMissing && response.status === 404) return null;
    if (!response.ok) throw new Error(`microCMS ${endpoint}: HTTP ${response.status}`);
    return response.json();
}

function paragraphs(text) {
    return (text || "").split(/\r?\n/).filter(Boolean);
}

function processSections(step) {
    const section = {
        type: "visual",
        title: step.heading,
        lead: step.lead,
        points: paragraphs(step.points),
        images: (step.images || []).map(image => image.url),
        desc: paragraphs(step.description),
    };
    const codeHeading = step.heading2 || step.codeHeading;
    if (section.images.length === 1) {
        if (!step.code && !step.subCode && !section.desc.length && !section.points.length) {
            section.desc = paragraphs(section.lead);
            section.lead = undefined;
        }
        section.imageBesideText = section.desc.length > 0;
    }
    if (!codeHeading && !step.code && !step.subCode) {
        return [section];
    }

    const coding = {
        type: "coding",
        title: codeHeading || step.heading,
        code: step.code,
        text: step.codeText?.trim() ? paragraphs(step.codeText) : undefined,
        intro: !codeHeading && step.codeText?.trim() ? step.lead : undefined,
        language: step.language,
        subCode: step.subCode,
        subLanguage: step.subLanguage,
        subText: step.subText,
    };
    if (codeHeading) return [section, coding];
    return [{ ...section, ...coding }];
}

function ingenuitySections(item) {
    if (!item.ingenuityBlocks?.length) {
        return paragraphs(item.ingenuity).map(text => ({ blocks: [{ text }] }));
    }
    const sections = [];
    for (const block of item.ingenuityBlocks) {
        if (block.heading || !sections.length) {
            sections.push({ title: block.heading, blocks: [] });
        }
        sections.at(-1).blocks.push({
            image: block.image?.url,
            text: paragraphs(block.text),
            code: block.code,
            language: block.language,
        });
    }
    return sections;
}

export async function getWorkData(slug) {
    if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;
    if (cmsEnabled()) {
        const item = await requestWorks(`/${encodeURIComponent(slug)}`, true);
        if (!item) return null;
        return {
            ...item,
            thumbnail: item.image?.url,
            category: item.label,
            periodLabel: "制作期間", roleLabel: "担当", techLabel: "使用技術", toolsLabel: "使用ツール",
            overview: paragraphs(item.overview),
            process: item.processSteps?.length
                ? item.processSteps.flatMap(processSections)
                : paragraphs(item.process).map(text => ({ type: "adjustment", text })),
            ingenuity: ingenuitySections(item),
            reflection: paragraphs(item.reflection),
        };
    }
    if (slug === "uranai") return { legacyUranai: true };
    const fullPath = path.join(worksDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    };
}

export async function getWorksList() {
    if (cmsEnabled()) {
        const works = [];
        while (true) {
            const page = await requestWorks(`?fields=id,title,label,image&limit=100&offset=${works.length}`);
            for (const item of page.contents) {
                works.push({ slug: item.id, href: `/works/${item.id}`, title: item.title,
                    label: item.label, image: item.image?.url });
            }
            if (!page.contents.length || works.length >= page.totalCount) return works;
        }
    }
    const filePath = path.join(process.cwd(), "content/works/index.yaml");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents);
    return data.works || [];
}