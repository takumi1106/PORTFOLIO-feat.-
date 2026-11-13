import UranaiWork from "@/components/UranaiWork";
import { notFound } from "next/navigation";
import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";
import { getWorkData, getWorksList } from "@/lib/markdown";
import MobileMenu from "@/components/MobileMenu";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export const notoSans = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const notoSerif = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "WORKS",
};

function processImageClass(item) {
    if (item.imageBesideText) return "process__img process__code-img";
    if (item.images.length === 1 && !item.title && !item.lead && !item.desc?.length && !item.points?.length) {
        return "process__img process__single-img";
    }
    return "process__img process__img-design";
}

export default async function WorkDetailPage({ params }) {
    const { slug } = await params;
    const work = await getWorkData(slug);
    const works = await getWorksList();

    if (!work) notFound();
    if (work.legacyUranai) return <UranaiWork works={works} />;

    return (
        <>
            <SummerTriangle />

            <header className="header">
                <div className="header__inner">
                    <Link tabIndex={-1} href="/">
                        <h1 className="header__title">PORTFOLIO</h1>
                        <p className="header__sub-title">feat.Goto Takumi</p>
                    </Link>
                </div>
            </header>

            <aside className="side-nav">
                <nav className="side-nav__nav" aria-label="グローバルナビゲーション">
                    <ul className="side-nav__list">
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/">HOME</Link>
                        </li>
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/about">ABOUT</Link>
                        </li>
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/works">WORKS</Link>
                        </li>
                    </ul>

                    <div className="side-nav__works">
                        <ul className="side-nav__works-list">
                            {works.map((work) => (
                                <li key={`${work.slug}-${work.href}`}>
                                    <Link
                                        href={work.href}
                                        className={
                                            work.href === `/works/${slug}`
                                                ? "side-nav__works-link is-active"
                                                : "side-nav__works-link"
                                        }
                                    >
                                        {work.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>

            <MobileMenu works={works} />

            <main className={`main work-page work-page--${slug}`}>
                <section className="project">
                    <div className="project__inner">
                        <p className="project__category">
                            {work.category}
                        </p>

                        <h2 className="project__title">
                            {work.title}
                        </h2>

                        <div className="project__img">
                            <img src={work.thumbnail} alt={work.title} loading="lazy" />
                        </div>

                        {work.url && (
                            <div className="url-wrapper">
                                <a
                                    className="url"
                                    href={work.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {work.type === "video" ? "動画を見る →" : "サイトを見る →"}
                                </a>
                            </div>
                        )}

                        <div className="project__list">
                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.periodLabel}</h3>
                                <p className="project__item-text list__text">{work.period}</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.roleLabel}</h3>
                                <p className="project__item-text list__text">{work.role}</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.techLabel}</h3>
                                <p className="project__item-text list__text">{work.tech}</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.toolsLabel}</h3>
                                <p className="project__item-text list__text">{work.tools}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="overview">
                    <h2 className="overview__title sub-title">作品概要</h2>
                    <div className="overview__inner">
                        <div className="overview__text">
                            {work.overview?.map((text, i) => (
                                <p key={`overview-${i}`}>{text}</p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="process">
                    <h2 className="process__title sub-title">制作工程</h2>
                    <div className="process__inner">
                        {work.process?.filter((item) => item.show !== false).map((item, i) => (
                            <div className="process__item list__item" key={`${item.title}-${i}`}>
                                {item.title && <h3 className="process__item-title list__title">{item.title}</h3>}

                                <div className="process__item-inner">
                                    {(item.type === "research" || item.type === "visual") && (
                                        <>
                                            {item.lead && (
                                                <div className={`process__text ${item.points?.length || item.type === "research" ? "process__research-text" : "process__design-lead"}`}>
                                                    <p style={{ whiteSpace: "pre-line" }}>{item.lead}</p>
                                                </div>
                                            )}

                                            {Array.isArray(item.points) && item.points.length > 0 && (
                                                <ul className="process__list">
                                                    {item.points.map((point, index) => (
                                                        <li key={`${item.title}-point-${index}`}>{point}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}

                                    {item.type === "visual" && (
                                        <div className={item.imageBesideText ? "process__body" : undefined}>
                                            {Array.isArray(item.images) && item.images.length > 0 && (
                                                <figure className={processImageClass(item)}>
                                                    {item.images.map((src, index) => (
                                                        <img key={`${src}-${index}`} src={src} alt="" loading="lazy" />
                                                    ))}
                                                </figure>
                                            )}

                                            {Array.isArray(item.desc) && item.desc.length > 0 && (
                                                <div className={item.imageBesideText ? "process__text process__code-text" : "process__text process__design-desc"}>
                                                    {item.desc.map((text, index) => (
                                                        <p key={`${item.title}-desc-${index}`}>{text}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {item.type === "coding" && (
                                        <>
                                            {item.intro && <p className="process__text">{item.intro}</p>}
                                            <div className={`process__body ${item.code ? "is-code" : ""}`}>
                                                <figure
                                                    className={`process__img ${item.code ? "process__code-wrap" : "process__code-img"
                                                        }`}
                                                >
                                                    {item.code ? (
                                                        <SyntaxHighlighter
                                                            language={item.language || "javascript"}
                                                            style={oneDark}
                                                            className="process__code"
                                                            showLineNumbers
                                                        >
                                                            {item.code}
                                                        </SyntaxHighlighter>
                                                    ) : (
                                                        <>
                                                            {item.mainImage && <img src={item.mainImage} alt="" />}
                                                            {!item.mainImage &&
                                                                Array.isArray(item.images) &&
                                                                item.images[0] && (
                                                                    <img src={item.images[0]} alt="" loading="lazy" />
                                                                )}
                                                        </>
                                                    )}
                                                </figure>

                                                <div className="process__text process__code-text">
                                                    {Array.isArray(item.text) &&
                                                        item.text.map((text, index) => (
                                                            <p key={`${item.title}-text-${index}`}>{text}</p>
                                                        ))}

                                                    {!Array.isArray(item.text) && item.text && <p>{item.text}</p>}

                                                    {!item.text && item.lead && <p>{item.lead}</p>}

                                                    {!item.text &&
                                                        Array.isArray(item.desc) &&
                                                        item.desc.map((text, index) => (
                                                            <p key={`${item.title}-desc-${index}`}>{text}</p>
                                                        ))}
                                                </div>
                                            </div>

                                            {(item.subImage || item.subText || item.subCode || (Array.isArray(item.images) && item.images[1])) && (
                                                <div className={`process__cms ${item.subCode ? "is-code" : ""}`}>
                                                    <figure
                                                        className={`process__img ${item.subCode ? "process__code-wrap" : "process__code-img"
                                                            }`}
                                                    >
                                                        {item.subCode ? (
                                                            <SyntaxHighlighter
                                                                language={item.subLanguage || item.language || "javascript"}
                                                                style={oneDark}
                                                                className="process__code"
                                                                showLineNumbers
                                                            >
                                                                {item.subCode}
                                                            </SyntaxHighlighter>
                                                        ) : (
                                                            <>
                                                                {item.subImage && <img src={item.subImage} alt="" />}
                                                                {!item.subImage &&
                                                                    Array.isArray(item.images) &&
                                                                    item.images[1] && (
                                                                        <img src={item.images[1]} alt="" loading="lazy" />
                                                                    )}
                                                            </>
                                                        )}
                                                    </figure>

                                                    <div className="process__text process__cms-text">
                                                        {item.subText && <p>{item.subText}</p>}

                                                        {!item.subText &&
                                                            Array.isArray(item.desc) &&
                                                            item.desc.slice(1).map((text, index) => (
                                                                <p key={`${item.title}-subdesc-${index}`}>{text}</p>
                                                            ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {item.type === "adjustment" && (
                                        <div className="process__text process__adjustment-text">
                                            {Array.isArray(item.text) &&
                                                item.text.map((text, index) => (
                                                    <p key={`${item.title}-adjust-${index}`}>{text}</p>
                                                ))}

                                            {!Array.isArray(item.text) && item.text && <p>{item.text}</p>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="ingenuity">
                    <h2 className="ingenuity__title sub-title">工夫した点</h2>

                    <div className="ingenuity__inner">
                        {work.ingenuity
                            ?.filter((item) => item.show !== false)
                            .map((item, i) => (
                                <div className="ingenuity__item list__item" key={`${item.title}-${i}`}>
                                    <h3 className="ingenuity__item-title list__title">{item.title}</h3>

                                    <div className="ingenuity__item-inner">
                                        {Array.isArray(item.blocks) &&
                                            item.blocks.map((block, index) => {
                                                const isCode = !!block.code;

                                                return (
                                                    <div
                                                        className={`ingenuity__body ${isCode ? "is-code" : "is-image"}`}
                                                        key={`${item.title}-block-${index}`}
                                                    >

                                                        {/* ===== コードの場合（上） ===== */}
                                                        {block.code && (
                                                            <figure className="ingenuity__code-wrap">
                                                                <SyntaxHighlighter
                                                                    language={block.language || "javascript"}
                                                                    style={oneDark}
                                                                    className="ingenuity__code"
                                                                    showLineNumbers
                                                                >
                                                                    {block.code}
                                                                </SyntaxHighlighter>
                                                            </figure>
                                                        )}

                                                        {/* ===== 画像の場合（横） ===== */}
                                                        {!block.code && block.image && (
                                                            <figure className="ingenuity__img">
                                                                <img src={block.image} alt={item.title} loading="lazy" />
                                                            </figure>
                                                        )}

                                                        {/* テキスト */}
                                                        {block.text && (
                                                            <div className="ingenuity__text">
                                                                {Array.isArray(block.text)
                                                                    ? block.text.map((text, i) => (
                                                                        <p key={`${item.title}-text-${i}`}>{text}</p>
                                                                    ))
                                                                    : <p>{block.text}</p>}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>

                <section className="reflection">
                    <h2 className="reflection__title sub-title">作品制作を通じて</h2>
                    <div className="reflection__inner">
                        <div className="reflection__text">
                            {work.reflection?.map((text, i) => (
                                <p key={`reflection-${i}`}>{text}</p>
                            ))}
                        </div>
                    </div>
                </section>
            </main >

            <footer className="footer">
                <h2 className="footer__title sub-title">CONTACT</h2>
                <div className="footer__inner">
                    <address className="footer__contact">
                        <div className="footer__item">
                            <p className="footer__label">ブログ</p>
                            <Link href="https://goto-take-1106.secret.jp/blog/" className="footer__link">Visit blog →</Link>
                        </div>
                        <div className="footer__item">
                            <p className="footer__label">メールアドレス</p>
                            <address className="footer__link">
                                <a href="mailto:takumi.g.116@gmail.com">Email me →</a>
                            </address>
                        </div>
                        <div className="footer__item">
                            <p className="footer__label">GitHub</p>
                            <Link href="https://github.com/takumi1106" className="footer__link">View GitHub →</Link>
                        </div>
                    </address>
                    <small className="footer__copy">&copy;2026 Goto Takumi</small>
                </div>
            </footer>
        </>
    );
}