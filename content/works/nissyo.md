---
title: 日昇工業所｜公式サイト
category: 進級制作品
date: 2026
url: https://goto-take-1106.secret.jp/nissyo/index.html

thumbnail: /image/nissyo_main.webp
alt: 日昇工業所の公式サイトの作品画像

periodLabel: 制作期間
period: 2025年 10月 ~ 2026年 1月（約3ヶ月）

roleLabel: 担当範囲
role: 企画 / コーディング / デザイン

techLabel: 作成技術
tech: HTML / CSS（Sass）/ JavaScript / microCMS

toolsLabel: 制作ツール
tools: VSCode / Figma / Photoshop / Illustrator / Formspree / GitHub / 生成Ai（補助的に使用）

overview:
  - 三重県伊勢市にある配管工事業者「日昇工業所」のコーポレートサイトを制作させていただきました。
  - サイトの更新頻度が低い点を踏まえ、表示速度や保守性を重視した静的サイトとして設計し、お知らせなどの更新が必要な箇所には microCMS を導入しています。
  - また、誰にとっても使いやすい構成を意識し、情報の見やすさや操作のしやすさにも配慮しました。

process:
  - title: ヒアリング
    type: research
    lead: まず、クライアントと直接対面でヒアリングを行い、サイトの目的や掲載内容、更新頻度などを確認しました。その上で、デザインや機能面について以下の要望をいただきました。
    points:
      - デザインはシンプルで、堅苦しすぎない雰囲気にしたい
      - 白と青を基調とした配色（アクセントに黄色）
      - 下請け業者としての信頼感が伝わるデザイン

  - title: デザイン
    type: visual
    lead: ヒアリングを終えた後、デザイン工程に移りました。デザイン制作にはノートと Figma を使用し、画面構成や配色を具体化していきました。
    images:
      - /image/nissyo-note.webp
      - /image/nissyo-design.webp
    desc:
      - まずはノートにラフを描き、サイト全体の構成や情報の優先度を整理しました。クライアントに共有することで、認識のズレがない状態でデザインを進められるよう意識しました。
      - その内容をもとに、Figma 上でレイアウトや配色を調整しながらデザインを詰めていきました。
      - 制作の途中で何度か修正を重ねたため初期案からは大きく変化しましたが、最終的にはクライアントにも納得していただけるデザインに仕上げることができました。

  - title: コーディング
    type: coding
    code: |
      // インナー幅の指定
      // @param {number} $mw - max-width
      // @param {number} $w  - width
      @mixin inner($mw-l: 900px, $mw-m: 450px, $mw-s: 342px, $w: percentage(math.div(342, 390))) {
        max-width: $mw-s;
        width: $w;
        margin-left: auto;
        margin-right: auto;

        @include mq(tablet) {
          max-width: $mw-m;
        }

        @include mq(desktop) {
          max-width: $mw-l;
        }
      }
    text:
      - HTMLでページ全体の構造を組み、BEM設計を意識してSassでスタイルを実装しました。
      - デザインの再現だけでなく、後から修正しやすいようクラス設計にも配慮しています。また、他の人が見ても理解しやすいようコメントを残し、保守性を意識しました。
      - 上記は、レイアウトの再利用性を高めるために作成したインナー幅を管理するSassのmixinです。ブレークポイントごとに最大幅を切り替えられるようにし、レスポンシブ対応を効率的に行えるようにしています。
    subCode: |
      <?php
      $api_key = "********";

      // microCMS APIを呼ぶ
      $curl = curl_init();
      curl_setopt_array($curl, [
        CURLOPT_URL => "https://xxxxx.microcms.io/api/v1/news?limit=3",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
          "X-MICROCMS-API-KEY: {$api_key}"
        ]
      ]);

      $response = curl_exec($curl);
      curl_close($curl);

      header("Content-Type: application/json");
      echo $response;
    subText: microCMSのAPIキーをフロント側に露出させないため、PHPで中継する構成を採用しました。これにより、セキュリティを確保しつつ、最新のお知らせを取得できるようにしています。

  - title: 細かい調整
    type: adjustment
    text:
      - 実装後は、余白やフォーカス表示、細かい配色の調整に加え、画面サイズによるズレやレイアウトの崩れも修正し、全体の完成度を高める仕上げを行いました。

ingenuity:
  - title: 更新性の工夫
    type: approach
    blocks:
      - image: /image/nissyo-cms1.webp
        text:
          - 更新されたお知らせをファーストビューに表示し、サイトを開いてすぐ確認できるようにしました。
          - また、古い情報ばかりにならないよう、最新3件のみ表示しています。
      - image: /image/nissyo-cms2.webp
        text:
          - microCMSでは、入力ミスや記述のばらつきを防ぐためにAPIスキーマを設定し、入力項目を制限しました。
          - 必須項目や入力形式を定義することで、管理者が迷わず入力できる構造にしています。

  - title: 操作性への配慮
    type: approach
    blocks:
      - image: /image/nissyo-operation1.webp
        text:
          - マウス操作だけでなく、キーボード操作も想定し、Tabキーによる移動やフォーカス表示が分かりやすくなるよう配慮しました。
      - image: /image/nissyo-operation2.webp
        text:
          - HTMLの標準要素を使用し、環境に依存しにくい操作性を意識しました。

  - title: 送信・運用の工夫
    type: approach
    blocks:
      - image: /image/nissyo-form1.webp
        text:
          - 静的サイト構成のため、サーバー実装不要で導入できるFormspreeを採用しました。
          - HTML + JavaScriptのみで実装し、表示の軽さと運用のしやすさを意識しています。
      - image: /image/nissyo-form2.webp
        text:
          - また、誤送信を防ぐため、送信前に内容を確認できる画面を用意しました。

reflection:
  - 本制作では、microCMS や Formspree など初めて扱う技術を導入し、実際にサイトへ組み込み運用する方法を学びました。
  - また、クライアントの要望をもとに制作を進める中で、自分の作りたいものではなく「求められているもの」を形にすることの難しさを実感しました。
  - さらに、サイト管理者が更新・運用しやすい構成を考えることで、制作者視点だけでなく運用者視点を持つことの重要性も学びました。加えてアクセシビリティにも配慮し、誰にとっても使いやすいUIを設計・実装する大切さを改めて感じました。
  - 今後の制作でも、ユーザーだけでなく運用者や管理者の視点も意識したサイト制作を行っていきたいと考えています。
---
