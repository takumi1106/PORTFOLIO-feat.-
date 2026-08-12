---
title: MissonTube
category: 授業制作品 │ webアプリ
date: 2026
url: https://missiontube-33mko43jv-takumi1106s-projects.vercel.app/

thumbnail: /image/missiontube_main.webp
alt: MissionTubeの作品画像

periodLabel: 制作期間
period: 2026年 5月 ~ 7月（約3ヶ月）

roleLabel: 担当範囲
role: 企画 / UI設計 / デザイン / フロントエンド実装 / YouTube API連携 / Vercelへのデプロイ

techLabel: 作成技術
tech: HTML / CSS（Sass）/ JavaScript / microCMS / YouTube Data API / YouTube IFrame API / Vercel Functions / localStorage

toolsLabel: 制作ツール
tools: VSCode / Figma / Illustrator / GitHub / 生成Ai（補助的に使用）

overview:
  - Webアプリ制作の授業課題として動画アプリを制作しました。
  - 動画視聴を作業のご褒美にすることで、作業への集中をサポートすることを目的としたWebアプリです。ミッションや制限時間を設定し、達成すると追加の動画視聴時間を獲得できる仕組みになっています。
  - また、YouTube Data APIを利用した動画検索機能や再生リスト作成機能、セーブデータごとのミッション履歴管理機能を実装しました。

process:
  - title: ペルソナ作成・共感マップ作成
    type: research
    lead:
      - まず、クラス内でインタビューを行い、対象ユーザーを1名選定しました。
      - その後、インタビューで得た情報をもとにペルソナと共感マップを作成し、ユーザーの行動や考え、課題を整理しました。これにより、ユーザーが抱える問題を明確にし、アプリのコンセプトや必要な機能の検討につなげました。
      - 以下は、ペルソナから抽出した主な課題です。
    points:
      - 作業中は動画がある方が集中できる一方で、動画に意識が向きすぎると作業が進まなくなってしまう
      - 音楽だけでなく、ミュージックビデオも楽しみながら作業したい
      - 作業へのモチベーションを維持することが難しい
      - 動画を見始めると止め時が分からず、長時間視聴してしまう

  - title: UIスケッチ・ユーザーテスト
    type: visual
    images:
      - /image/missiontube_degsin1.webp
      - /image/missiontube_degsin2.webp
    desc:
      - ペルソナから抽出した課題をもとに、画面遷移や各画面に必要な機能をUIスケッチで整理しました。その後、UIスケッチをもとにFigmaでワイヤーフレームとプロトタイプを作成しました。
      - Figmaで作成したプロトタイプを使用し、クラスメイト3名にユーザビリティテストを実施しました。実際に操作してもらい、画面遷移や操作性、各機能の分かりやすさについて意見を収集しました。
      - その結果、「職種や作業内容の設定が分かりにくい」という意見や、「制限時間は初期設定を10分程度にすると、初めて利用するユーザーでも試しやすい」という意見が挙がりました。これらの意見をもとに画面構成や初期設定を見直し、操作の分かりやすさを改善しました。また、大きな操作上の問題は見られず、基本的な操作性については良好であることを確認しました。

  - title: 実装
    type: coding
    code: |
      //index.htmlの一部
        <section class="top__save-list save-list">
            //繰り返し
            <article class="top__save save">
                <button type="button" class="save__slot" id="save1">
                    <strong>セーブデータ1</strong>
                    <p class="save-job save__job">設定されていません</p>
                    <p class="save-type save__type"></p>
                </button>
            </article>
        </section>
      //script.jsの一部
        updateDecisionButton(
          rewardDecisionBtn,
          sessionStorage.getItem("rewardTimeConfirmed") === "true"
      );

      [rewardMinuteInput, rewardSecondInput].forEach(function (input) {
          if (input) {
              input.addEventListener("input", function () {
                  sessionStorage.removeItem("rewardTimeConfirmed");
                  updateDecisionButton(rewardDecisionBtn, false);
              });
          }
      });
    text:
      - Figmaで作成したワイヤーフレームをもとに、各画面をHTMLで実装しました。
      - CSS（Sass）では、スマートフォンでの利用を前提にレイアウトやボタンサイズ、余白を調整し、片手でも操作しやすいUIを意識しました。
      - JavaScriptでは、画面遷移やタイマー機能、セーブデータ機能、再生リスト管理など、アプリの主要な機能を実装しました。
    subCode: |
      const apiKey = process.env.YOUTUBE_API_KEY;

      const searchUrl =
          `https://www.googleapis.com/youtube/v3/search` +
          `?part=snippet&type=video&maxResults=10` +
          `&q=${encodeURIComponent(keyword)}` +
          `&key=${apiKey}`;

      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();

      const videoIds = searchData.items
          .map(function (item) {
              return item.id.videoId;
          })
          .join(",");
    subText: YouTube Data APIを利用して動画検索機能を実装し、YouTube IFrame APIを利用してアプリ内で動画を再生できるようにしました。また、Vercelへデプロイを行い、APIキーはServerless Functionsを経由して管理することで、安全にYouTube APIを利用できる構成としました。

  - title: 細かい調整
    type: adjustment
    text:
      - 完成後、クラス内で発表を行い、先生からフィードバックをいただきました。その際、「ミッション設定・タイマー設定・動画選択は別画面ではなく、1つの画面にまとめた方が操作しやすい」という意見をいただきました。このフィードバックをもとに、数日後に画面構成を見直し、設定画面を1つにまとめることで、より直感的に操作できるよう改善しました。

ingenuity:
  - title: ゲーム風のUIデザイン
    type: approach
    blocks:
      - image: /image/missiontube_color1.webp
        text:
          - 「作業をクリアして動画を見る」という流れをゲーム感覚で楽しめるよう、タイトルやボタン、配色をゲーム風にデザインしました。作業を進めて報酬を獲得するというコンセプトが伝わりやすいよう意識しています。
      - image: /image/missiontube_color2.webp
        text:
          - また、配色は白をベースにして見やすさを重視し、タイトルには赤を使用してアプリの印象を強めました。ボタンは役割が分かりやすいように色を使い分け、直感的に操作できるデザインを心掛けました。

  - title: セーブデータ機能
    type: approach
    blocks:
      - image: /image/missiontube_save.webp
        text:
          - セーブデータを3つ作成できるようにしました。
          - これは、職種や作業内容によって視聴したい動画や作業内容が変わることを想定したためです。
          - セーブデータごとに職種やミッション履歴、動画履歴を保存できるようにしました。用途ごとに履歴を管理できるため、毎回設定や動画を選び直すことなく作業を始められるよう工夫しました。

  - title: APIキーを安全に管理
    type: approach
    blocks:
      - text:
          - YouTube Data APIのAPIキーをクライアント側に直接記述せず、VercelのServerless Functionsを経由してAPIを呼び出す構成にしました。APIキーはVercelの環境変数で管理することで、ブラウザやGitHub上に公開されないようにし、安全性を意識して実装しました。

reflection:
  - 本作品の制作を通して、ユーザー視点で設計することの重要性を学びました。ペルソナの作成や共感マップ、ユーザビリティテストを行うことで、ただ機能を実装するだけでなく、実際に利用する人の使いやすさを考えながら改善を重ねることの大切さを実感しました。
  - また、HTML・CSS（Sass）・JavaScriptによるWebアプリ開発だけでなく、YouTube Data APIやYouTube IFrame APIを利用した外部サービスとの連携や、Vercelを活用したデプロイ、環境変数によるAPIキーの安全な管理についても学ぶことができました。
  - 開発中は思い通りに動作しない場面も多くありましたが、原因を調査しながら改善を繰り返すことで、問題解決力や最後までやり遂げる力を身に付けることができました。今回の経験を活かし、今後もユーザーにとって使いやすく、価値のあるWebアプリケーションを制作していきたいと考えています。
---
