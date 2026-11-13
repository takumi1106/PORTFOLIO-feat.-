# POLTFOLIO　feat.Goto Takumi

就職活動用に制作したポートフォリオサイトです。

## 作品概要
就職活動に向けて制作したポートフォリオサイトです。作品だけでなく、制作の意図や工夫した点も伝わるよう構成し、Next.js・Markdownを用いることで更新しやすい構成としました。アクセシビリティやSEOにも配慮して制作しています。

## サイトURL
[ポートフォリオサイトを見る](https://portfolio-delta-self-19.vercel.app/)

## 作成技術
Next.js / React / Three.js（React Three Fiber）/ GSAP / Sass

## 制作ツール
VSCode / Figma / Photoshop / Illustrator / Vercel / GitHub / 生成Ai（補助的に使用）

## microCMSで作品を更新する

1. microCMSでリスト形式のAPIを作り、エンドポイントを `works` にします。
2. 次のフィールドIDと種類を設定します。

   | 種類 | フィールドID |
   | --- | --- |
   | テキストフィールド | `title`（作品名）、`label`（分類）、`url`（作品リンク）、`type`（動画は video）、`period`（制作期間）、`role`（担当）、`tech`（使用技術）、`tools`（使用ツール） |
   | 画像 | `image`（一覧・詳細のメイン画像） |
   | テキストエリア | `overview`（作品概要）、`process`（制作工程）、`ingenuity`（工夫した点）、`reflection`（振り返り） |

3. 作品名と画像を必須にして作品を登録・公開します。本文は改行で段落を分けられます。作品URLは `/works/コンテンツID` です。管理画面の表示順で一覧に並び、先頭4件がトップに出ます。
4. ローカルの `.env.local` とVercelの環境変数に `MICROCMS_SERVICE_DOMAIN`（例：URLが example.microcms.io なら example）と `MICROCMS_API_KEY`（works のGET権限）を設定します。ローカルは開発サーバーを再起動、Vercelは再デプロイします。

両方の変数が未設定の間は従来の作品が表示されます。設定すると作品全体がCMSの公開データに切り替わるため、本番への設定前に掲載したい既存作品を登録してください。以降は管理画面で公開すると、60秒のキャッシュ期間経過後のアクセスで再取得されます。
