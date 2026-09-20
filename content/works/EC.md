---
title: ECサイト（ネットショップ）
category: 授業制作品
date: 2026
url: https://ec-shop-php.free.nf/08_shop/chapter2-7/product.php

thumbnail: /image/ec_main.webp
alt: ECサイト（ネットショップ）の作品画像

periodLabel: 制作期間
period: 2026年 6月 ~ 2026年 8月（約2ヶ月）

roleLabel: 担当範囲
role: デザイン・フロントエンド実装・バックエンド実装・データベース連携

techLabel: 作成技術
tech: HTML / CSS / JavaScript / PHP / MySQL

toolsLabel: 制作ツール
tools: VS Code / MAMP / phpMyAdmin / 生成AI（補助的に使用）

overview:
  - 教材を基に、PHPとMySQLを使用した学習用ECサイトを制作しました。
  - 商品検索やカート、会員登録・ログインなどの基本機能を備え、デザインの調整や機能改修を行いました。また、温かみのある配色で画面全体を統一し、商品の見やすさや操作のしやすさに加え、購入履歴がない場合の案内など、利用状況に応じた分かりやすい表示にも配慮しました。

process:
  - title: PHPの学習・開発環境の構築
    type: research
    lead: 教材のコードを確認しながらPHPの基本的な書き方や処理の仕組みを学び、MAMPを使用してPHP・MySQLの開発環境を構築しました。また、商品情報や会員情報、購入履歴などを管理するデータベースを作成し、PHPとの接続やデータの取得・表示が正しく行えることを確認しました。

  - title: デザインの調整
    type: visual
    lead: ECサイト全体に統一感を持たせるため、ベージュやブラウンを中心とした温かみのある配色に調整しました。商品を見やすくすることを意識し、商品画像をカード形式で配置することで、商品名・価格・在庫などの情報をひと目で確認できるようにしました。
    images:
      - /image/ec_home.webp
      - /image/ec_detail.webp
    desc:
      - また、商品一覧だけでなく、検索欄やログインフォーム、ナビゲーション、各種ボタンなども同じ配色やデザインに統一しました。ページごとに見た目が大きく変わらないようにすることで、ECサイト全体にまとまりを持たせています。
      - 文字の大きさや要素同士の余白、配置についても調整し、それぞれの機能がどこにあるのか分かりやすく、操作しやすい画面になるよう意識しました。機能を追加するだけでなく、実際に利用する人の見やすさや使いやすさも考えながら、サイト全体のデザインを仕上げました。

  - title: 機能の改修・動作確認
    type: coding
    code: |
      $purchases = $sql_purchase->fetchAll(PDO::FETCH_ASSOC);

      if (empty($purchases)) {
        echo '<p class="history-login">購入履歴はありません。</p>';
      }
    text:
      - PHPとMAMPを使用して、ECサイトに実装した各機能の改修と動作確認を行いました。会員登録・ログイン・商品の購入・購入履歴などを実際に操作し、PHPの処理やMySQLへのデータ登録・取得が正しく行われているかを確認しました。
      - また、購入履歴がない場合には案内を表示したり、会員登録後には完了メッセージを表示したりするなど、利用者の状況に合わせて表示内容が変わるようにPHPの処理を調整しました。
    subCode: |
      $sql_purchase = $pdo->prepare(
       'select * from purchase
        where customer_id=?
        order by id desc'
      );

      $sql_purchase->execute([
        $_SESSION['customer']['id']
      ]);

      $purchases = $sql_purchase->fetchAll(PDO::FETCH_ASSOC);

      if (empty($purchases)) {
        echo '<p class="history-login">購入履歴はありません。</p>';
      }
    subText: MAMP上で繰り返し動作を確認しながら、商品画像が正しく表示されない問題や、ページによって表示が統一されていない箇所なども修正しました。エラーや想定していない表示が発生した場合は原因となるコードを確認し、修正と動作確認を繰り返しながら機能を仕上げました。

  - title: 管理者向け画面の追加
    type: adjustment
    text:
      - 管理用のアカウントを用意し、商品在庫などを管理できる画面を追加しました。指定したアカウントでログインした場合にのみ、メニューに管理画面へのリンクを表示するようにしています。
      - 管理画面では、MySQLに登録された情報の確認・更新を行えるようにし、購入者側の機能に加えて、運営側の操作も学びました。以下のデモアカウントでログインすると、メニューの「マイページ」から管理画面をご確認いただけます。
      - 管理者ログイン名：admin_shop　　パスワード：ShopAdmin_2026!Test
      - 一般ユーザーログイン名：yamada_test　　パスワード：ShopTest2026

ingenuity:
  - title: 運営側の管理画面
    type: approach
    blocks:
      - image: /image/ec_management.webp
        text:
          - 教材の購入者向け機能に加え、商品の在庫を管理できる管理画面を追加しました。
          - 管理用アカウントでログインすると専用メニューが表示され、商品ごとの在庫数を一覧で確認・変更できます。PHPとMySQLを連携し、変更した在庫数がデータベースに反映される仕組みを実装しました。

  - title: クーポン機能
    type: approach
    blocks:
      - image: /image/ec_coupon.webp
        text:
          - 教材の基本機能に加え、5,000円以上の購入でクーポンを付与し、次回以降の購入時に10％割引できる機能を追加しました。PHPとMySQLを使用してクーポンの付与・使用・保有枚数を管理し、利用時には割引額を確認できるようにしました。

  - title: ランキング機能
    type: approach
    blocks:
      - image: /image/ec_rank.webp
        text:
          - 教材の基本機能に加え、人気商品を確認できるランキング機能を追加しました。商品をランキング形式で表示し、気になる商品は詳細ページから確認できるようにすることで、利用者が商品を選ぶ際の参考になるよう工夫しました。

reflection:
  - 教科書で学んだ機能を一通り実装し、それをもとに管理画面やクーポン、ランキングなどの機能を追加しました。また、もともとは機能を中心としたサイトだったため、CSSを使って配色やレイアウトを整え、使いやすさや見やすさを意識したデザインに仕上げました。
  - PHPを中心としたサイト制作は今回が初めてでしたが、制作を通してPHPとMySQLを連携したデータの登録・取得・更新など、Webサイトの裏側で動く仕組みについて理解を深めることができました。
---
