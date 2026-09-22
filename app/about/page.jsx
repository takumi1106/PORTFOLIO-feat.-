import Link from "next/link";
import Script from "next/script";
import SummerTriangle from "@/components/SummerTriangle";
import { getWorksList } from "@/lib/markdown";
import MobileMenu from "@/components/MobileMenu";
import { Shippori_Mincho, Shippori_Antique } from "next/font/google";

const mincho = Shippori_Mincho({
    subsets: ["latin"],
    weight: ["400", "600"],
});

const gothic = Shippori_Antique({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata = {
    title: "ABOUT",
};

export default function AboutPage() {
    const works = getWorksList();
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
                            <Link className="side-nav__link is-active" href="/about">ABOUT</Link>
                        </li>
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/works">WORKS</Link>
                        </li>
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
                <section className="aboutpro">
                    <h2 className="aboutpro__title">ABOUT</h2>
                    <div className="aboutpro__inner">
                        <div className="aboutpro__pro">
                            <div className="aboutpro__img">
                                <img src="./image/about_img.webp" alt="後藤匠のプロフィール写真" loading="lazy" />
                            </div>
                            <div className="aboutpro__status">
                                <p className="aboutpro__myname">
                                    後藤 匠<span className="aboutpro__myname__sub"> (Goto Takumi)</span>
                                </p>
                                <div className="aboutpro__text">
                                    <p>トライデントコンピュータ専門学校のWebデザイン学科2年生の後藤 匠です。Webプログラマーを志望し、新しい技術を学び続けながら実装を通した成長を大切にしています。</p>
                                </div>
                            </div>
                        </div>
                        <div className="aboutpro__list list">
                            <div className="aboutpro__item list__item">
                                <h3 className="aboutpro__item-title list__title">生年月日</h3>
                                <p className="aboutpro__item-text list__text">2004/11/06 (21歳)</p>
                            </div>
                            <div className="aboutpro__item list__item">
                                <h3 className="aboutpro__item-title list__title">出身地</h3>
                                <p className="aboutpro__item-text list__text">三重県明和町</p>
                            </div>
                            <div className="aboutpro__item list__item">
                                <h3 className="aboutpro__item-title list__title">志望職種</h3>
                                <p className="aboutpro__item-text list__text">フロントエンドエンジニア</p>
                            </div>
                        </div>
                        <div className="aboutpro__item aboutpro__school list__item">
                            <h3 className="aboutpro__item-title list__title">出身校</h3>
                            <ul className="aboutpro__school-list">
                                <li className="aboutpro__school">伊勢学園高等学校 (2023年卒業)</li>
                                <li className="aboutpro__school">トライデントコンピュータ専門学校  (2025年入学)</li>
                            </ul>
                        </div>
                        <div className="aboutpro__item list__item">
                            <h3 className="aboutpro__item-title list__title">取得資格</h3>
                            <ul className="aboutpro__certification-list">
                                <li className="aboutpro__certification">Webクリエイター能力認定試験 <span className="nobr">エキスパート</span></li>
                                <li className="aboutpro__certification">実用数学技能検定 準2級</li>
                                <li className="aboutpro__certification">日本漢字能力検定 3級</li>
                                <li className="aboutpro__certification">全商英語検定試験 3級</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="ideal">
                    <h2 className="ideal__title sub-title">MY IDEAL</h2>
                    <div className="ideal__inner">
                        <h3 className="ideal__catch">「学び、挑戦し、<br /><span className="ideal__indent">成長し続ける人へ」</span>
                        </h3>
                        <div className="ideal__text">
                            <p>新しい技術を学び続けることを当たり前にし、Web技術だけでなくさまざまな分野にも挑戦しながら成長していきたいと考えています。</p>
                            <p>技術は常に進化するからこそ、トレンドを追うだけではなく、仕組みまで理解し、自分の力として身につけることを大切にしています。</p>
                            <p>学んだ技術を実際の開発に活かし、幅広い技術を身につけながら、ユーザーにとって価値のあるサービスを届けられるエンジニアを目指しています。</p>
                        </div>
                    </div>
                </section>
                <section className="skill">
                    <h2 className="skill__title sub-title">SKILLS & STYLE</h2>
                    <div className="skill__inner">
                        <div className="skill__list list">
                            <div className="skill__item list__item">
                                <h3 className="skill__item-title list__title">コーディング</h3>
                                <div className="skill__item-text list__text">
                                    <p>HTML / CSS（Sass）を用いたコーディングが可能です。BEM設計を意識し、保守性の高い実装を心がけています。また、JavaScriptやPHPを用いたWebサイト・Webアプリケーション開発にも取り組み、できることを少しずつ広げています。
                                    </p>
                                </div>
                            </div>
                            <div className="skill__item list__item">
                                <h3 className="skill__item-title list__title">私の強み</h3>
                                <div className="skill__item-text list__text">
                                    <p>作業内容に関係なく、目の前の作業に集中して取り組むことができます。コーディングだけでなく、細かい修正や確認などの地道な作業でも、集中力を切らさずに、最後まで丁寧に取り組むことを大切にしています。最後まで責任を持って取り組み、納得できる品質になるまで改善を重ねることを大切にしています。
                                    </p>
                                </div>
                            </div>
                            <div className="skill__item list__item">
                                <h3 className="skill__item-title list__title">制作でのこだわり</h3>
                                <div className="skill__item-text list__text">
                                    <p>レスポンシブ対応では、画面サイズが変わってもレイアウトや情報の意味が崩れない構成を意識しています。また、フォーカスの可視化やキーボード操作などの基本的なアクセシビリティ対応を行い、誰でも迷わず使えるUIを目指しています。</p>
                                </div>
                            </div>
                            <div className="skill__item list__item">
                                <h3 className="skill__item-title list__title">制作での進め方</h3>
                                <div className="skill__item-text list__text">
                                    <p>コンセプトを決めてデザインを考えた上でコーディングに取り組んでいます。レスポンシブ対応や使いやすさを意識しながら実装を進め、形になった段階で改善を重ねて完成度を高めながら、完成後も改善を重ねながら品質を高めています。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="comment">
                    <h2 className="comment__title sub-title">COMMENT</h2>
                    <div className="comment__inner">
                        <div className="comment__text">
                            <p>ポートフォリオをご覧いただきありがとうございます。<br />最新技術を学び続け、どんなに難しい技術も迷わず使いこなせるエンジニアを目指しています。</p>
                            <p>トライデントコンピュータ専門学校Webデザイン学科2年の後藤 匠です。</p>
                            <p>制作では、どんな技術にも臆せず挑戦し、学んだことを実装に活かしながら、できることを着実に広げていくことを大切にしています。</p>
                            <p>趣味であるカラオケや麻雀でも、上達のために試行錯誤することが好きで、その「うまくなりたい」という気持ちはエンジニアとしての姿勢にも通じています。</p>
                            <p>難しい技術ほど、迷わず向き合って自分のものにする。そんなエンジニアを目指して、日々成長しています。</p>
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
            <Script src="/js/script.js" strategy="afterInteractive" />
        </>
    );
}