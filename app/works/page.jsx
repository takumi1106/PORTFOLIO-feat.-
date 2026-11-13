import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";
import { getWorksList } from "@/lib/markdown";
import MobileMenu from "@/components/MobileMenu";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

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

export default async function WorksPage() {
    const works = await getWorksList();

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
                        <li className="side-nav__item"><Link className="side-nav__link" href="/">HOME</Link></li>
                        <li className="side-nav__item"><Link className="side-nav__link" href="/about">ABOUT</Link></li>
                        <li className="side-nav__item"><Link className="side-nav__link is-active" href="/works">WORKS</Link></li>
                    </ul>

                    <div className="side-nav__works">
                        <ul className="side-nav__works-list">
                            {works.map((work) => (
                                <li key={`${work.slug}-${work.href}`}>
                                    <Link className="side-nav__works-link" href={work.href}>
                                        {work.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>

            <MobileMenu works={works} />

            <main className="main">
                <section className="workslist">
                    <h2 className="workslist__title">WORKS</h2>
                    <div className="workslist__inner">
                        <ul className="workslist__list">
                            {works.map((work) => (
                                <li className="workslist__item" key={`${work.slug}-${work.href}`}>
                                    <article className="workslist__box">
                                        <p className="workslist__label">{work.label}</p>
                                        <h3 className="workslist__box-title">{work.title}</h3>
                                        <Link className="workslist__link" href={work.href}>
                                            <div className="workslist__img">
                                                <img src={work.image} alt={work.title} />
                                            </div>
                                        </Link>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="footer" id="contact">
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