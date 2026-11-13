import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";

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

export default function UranaiWork({ works }) {

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
                                            work.href === "/works/uranai"
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

            <main className="main work-page work-page--uranai">
                <section className="project">
                    <div className="project__inner">
                        <p className="project__category">
                            授業制作
                        </p>

                        <h2 className="project__title">
                            12星座占い
                        </h2>

                        <div className="project__img">
                            <img src="/image/uranai_title.webp" alt="占いサイトの作品画像" />
                        </div>

                        <div className="url-wrapper">
                            <a
                                className="url"
                                href="https://takumi1106.github.io/horoscope/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                サイトを見る →
                            </a>
                        </div>

                        <div className="project__list">
                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">制作期間</h3>
                                <p className="project__item-text list__text">約1週間</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">担当範囲</h3>
                                <p className="project__item-text list__text">コーディング / デザイン</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">作成技術</h3>
                                <p className="project__item-text list__text">HTML / CSS / JavaScript</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">制作ツール</h3>
                                <p className="project__item-text list__text">VSCode / Photoshop / 生成AI（画像生成、補助的に使用）</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="overview">
                    <h2 className="overview__title sub-title">作品概要</h2>
                    <div className="overview__inner">
                        <div className="overview__text">
                            <p>JavaScriptの授業課題として、星座占いのWebコンテンツを制作しました。</p>
                            <p>星座の画像をクリックすると運勢の順位とメッセージが表示される仕組みになっています。</p>
                            <p>また、JavaScriptで順位とメッセージをランダムに組み合わせる処理を実装し、毎回異なる結果が表示されるようにしました。</p>
                            <p>デザインは宇宙をイメージし、背景に星や流れ星のアニメーションを加えて雰囲気を表現しました。</p>
                        </div>
                    </div>
                </section>

                <section className="process">
                    <h2 className="process__title sub-title">制作工程</h2>
                    <div className="process__inner">
                        <div className="process__item list__item">
                            <div className="process__item-inner">
                                <figure className="process__img process__single-img">
                                    <img src="/image/uranai_process.webp" alt="占いサイトのデザイン、コード" />
                                </figure>

                                <div className="process__item list__item">
                                    <h3 className="process__item-title list__title">デザイン考案</h3>
                                    <div className="process__text process__single-text">
                                        <p>星占いというコンテンツの特性から、直感的に操作できるシンプルな構成と、星や宇宙を感じられる世界観を意識してデザインしました。</p>
                                    </div>
                                </div>

                                <div className="process__item list__item">
                                    <h3 className="process__item-title list__title">画像生成</h3>
                                    <div className="process__text process__single-text">
                                        <p>星座の画像をクリックすることで直感的に占いができるようにと考えました。そこで生成AIを使用し、各星座のイメージに合ったビジュアルを作成しました。</p>
                                        <p>また、統一感が出るようにテイストを揃え、サイト全体の世界観に合うよう調整しています。</p>
                                    </div>
                                </div>

                                <div className="process__item list__item">
                                    <h3 className="process__item-title list__title">構造設計とスタイル実装</h3>
                                    <div className="process__text process__single-text">
                                        <p>HTMLでページの構造を作成した後、CSSでデザインを整えました。CSSでは配置や余白のバランスを調整しながら、背景や画像の大きさも調整し、全体の見た目を整えました。</p>
                                    </div>
                                </div>

                                <div className="process__item list__item">
                                    <h3 className="process__item-title list__title">JavaScript</h3>
                                    <div className="process__text process__single-text">
                                        <p>今回の課題としてJavaScriptを導入し、占い結果の表示に加え、フェードイン演出や背景の流れ星のアニメーションの実装にも活用しました。</p>
                                        <p>占い結果の処理では、当時履修したばかりの関数式を用いて実装し、理解を深めながら制作を進めました。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ingenuity">
                    <h2 className="ingenuity__title sub-title">工夫した点</h2>
                    <div className="ingenuity__inner">
                        <div className="ingenuity__item list__item">
                            <h3 className="ingenuity__item-title list__title">コーディング</h3>

                            <div className="ingenuity__item-inner">
                                <div className="ingenuity__body ingenuity__body-code">
                                    <figure className="process__img process__code-wrap">
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={oneDark}
                                            className="process__code"
                                            showLineNumbers
                                        >
                                            {`const shuffleFortunes = function () {
    const indices = [...Array(rankList.length).keys()];
    //i = indices.length - 1というのはi = 11
    // 条件：i > 0 の間続ける
    //i = 1 まで実行／i = 0 になったら終了（0は最後に残された1つの場所なのでシャッフル不要）
    //i--はiが１つずつ減る
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }//for文の最後には；は要らない
    return indices.map(i => ({
        rank: rankList[i],
        message: messageList[i]
    }));
};

const fortunes = shuffleFortunes();`}
                                        </SyntaxHighlighter>
                                    </figure>

                                    <div className="ingenuity__text">
                                        <p>JavaScriptの実装では、関数式はなるべく自分で書くことを意識しました。しかし、課題提出後に関数式を十分に使えていないという指摘を受けたため、生成AIに分からない部分を聞きながら、コードを見直し作り直しました。</p>
                                        <p>その際、理解しづらい箇所にはメモを残し、後から見返した際にも内容が分かるよう工夫しています。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ingenuity__item list__item">
                            <h3 className="ingenuity__item-title list__title">デザイン</h3>

                            <div className="ingenuity__item-inner">
                                <div className="ingenuity__body">
                                    <figure className="ingenuity__img">
                                        <img src="/image/uranai_main.webp" alt="占いサイトの画面" />
                                    </figure>

                                    <div className="ingenuity__text">
                                        <p>デザイン面では、全体の雰囲気に統一感が出るよう、配色や見え方のバランスを意識して調整しました。</p>
                                        <p>また、結果表示の際に変化が分かりやすくなるよう、文字の見え方や演出にも配慮しています。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="reflection">
                    <h2 className="reflection__title sub-title">学んだこと</h2>
                    <div className="reflection__inner">
                        <div className="reflection__text">
                            <p>制作当初は、関数式を学んで間もなかったこともあり、十分に理解できていませんでした。</p>
                            <p>そのため、完成して提出した際に「関数式がしっかり使えていない」という指摘を受けました。</p>
                            <p>そこで生成AIを参考にしながらコードを見直し、作り直していく中で関数式の仕組みを理解することができました。</p>
                        </div>
                    </div>
                </section>
            </main>

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