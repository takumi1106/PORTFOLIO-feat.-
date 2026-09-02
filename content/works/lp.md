---
title: ランディングページ
category: 授業制作品
date: 2026
url: https://webgl-lp.vercel.app/

thumbnail: /image/lp_main.webp
alt: ポートフォリオの作品画像

periodLabel: 制作期間
period: 約1ヶ月

roleLabel: 担当範囲
role: コーディング / デザイン

techLabel: 使用技術
tech: React / Vite / Three.js（React Three Fiber）/ GSAP / Sass

toolsLabel: 制作ツール
tools: VSCode / Vercel / GitHub / 生成Ai（補助的に使用）

overview:
  - トライデントコンピュータ専門学校が主催する架空のカンファレンス「TRIDENT WEBDESIGN CONFERENCE 2026」をテーマにしたランディングページを制作しました。
  - Reactを使用し、用意された雛形をもとにCSSでスタイリングを行いました。授業で学んだパーティクルや3Dテキスト、3Dモデルの表示、GSAPによるスクロールアニメーションなどを取り入れ、3D表現を活かした動きのあるにぎやかなWebサイトに仕上げました。

process:
  - title: テーマ・コンセプト決め
    type: research
    lead: 3D表現を活かしたサイトにするため、全体のテーマを「宇宙」に決めました。背景には自分の好きな「夏の大三角」を取り入れ、スクロールしてページを進めるほど星同士を結ぶ線がつながっていく演出にしました。

  - title: CSS・Sassでのスタイリング
    type: visual
    lead: 宇宙をテーマにしたサイトのため、全体を暗めの背景にし、紫と白を中心とした配色で神秘的な雰囲気を表現しました。特に見出しや文字には紫と白を使用し、暗い宇宙空間の中でも文字が印象に残るよう意識しています。
    images:
      - /image/lp_design.webp
      - /image/lp_color.webp
    desc:
      - また、3Dモデルやアニメーションを多く使用することを想定し、文章などのコンテンツ部分は見やすさを意識して比較的シンプルにまとめました。文字の大きさや余白、コンテンツの配置を調整し、3D表現が多い中でも情報を読みやすいデザインを意識しました。
      - サイト全体で「宇宙」というテーマに統一感が出るよう、背景色や文字色、装飾などを統一し、この後に追加する3D表現とも馴染むようにスタイリングしました。

  - title: 3D・アニメーションの実装
    type: coding
    code: |
      scrollViews.forEach((view) => {
      /* 3Dモデルの位置を変更 */
      timeline.to(viewRef.current.position, {
        x: view.position[0],
        y: view.position[1],
        z: view.position[2],
      });
      /* 角度を変更 */
      timeline.to(viewRef.current.rotation, {
        x: view.rotation[0],
        y: view.rotation[1],
        z: view.rotation[2],
      }, '<');
      /* 大きさを変更 */
      timeline.to(viewRef.current.scale, {
        x: view.scale,
        y: view.scale,
        z: view.scale,
      }, '<');
    text:
      - GSAPのScrollTriggerを使用し、スクロールに合わせて3Dモデルの位置・角度・大きさを変化させました。実際にカメラを動かすのではなく、モデル側を動かすことで、見る位置や距離が変化しているような演出を実装しています。位置・角度・大きさを同時に変化させることで、ページを進むにつれて3D空間を移動しているような立体感を表現しました。
    subCode: |
      gsap.to(progress.current, {
      value: 1,
      ease: 'none',

      scrollTrigger: {
        trigger,
        start: 'top 75%',
        end: 'center 45%',
        scrub: 1,
        invalidateOnRefresh: true,
      },

      onUpdate: () => {
        const value = progress.current.value;

        const currentX =
          start[0] + (end[0] - start[0]) * value;

        const currentY =
          start[1] + (end[1] - start[1]) * value;

        const currentZ =
          start[2] + (end[2] - start[2]) * value;

        geometryRefs.current.forEach((geometry) => {
          if (!geometry) return;

          const positionAttribute = geometry.attributes.position;
          positionAttribute.setXYZ(1, currentX, currentY, currentZ);
          positionAttribute.needsUpdate = true;
          geometry.computeBoundingSphere();
        });
      },
    subText: 夏の大三角を表現するため、GSAPのScrollTriggerを使用して、スクロールするにつれて星同士を結ぶ線が徐々に伸びていくアニメーションを実装しました。線の先端となるX・Y・Z座標をスクロール量に合わせて変化させることで、ページを進むほど三角形が完成していく演出にしています。

  - title: 細かい調整
    type: adjustment
    text:
      - 作を進める中で3Dモデルやパーティクルなどの表現が増え、サイト全体の動作が重くなってしまいました。そこで、星の数を減らしたり、一部の3Dオブジェクトを削除したり、モデルの大きさを調整したりすることで、少しでも動作が軽くなるように工夫しました。最後に、アニメーションの動きや表示位置なども確認し、全体のバランスを調整して完成させました。

ingenuity:
  - title: 背景のアニメーション
    type: approach
    blocks:
      - image: /image/lp_anime1.webp
        text:
          - ページの最初では、夏の大三角を結ぶ線を表示せず、背景の星の粒子も少ない状態にしています。最初からすべてを見せるのではなく、あえて未完成の状態から始めることで、スクロールしたときの変化が分かりやすくなるようにしました。
      - image: /image/lp_anime2.webp
        text:
          - スクロールするにつれて夏の大三角の線が少しずつつながり、星の粒子も徐々に増えていきます。最後のfooterでは線と星がすべてそろい、ページを最後まで見ることで、サイト全体が完成したように感じられる演出にしました。

  - title: ロケットを使った遊び心
    type: approach
    blocks:
      - image:
        text:
          - 開催概要からfooterへ移動する途中に、宇宙をテーマにしたサイトならではの遊び心として、ロケットが画面を大きく通り過ぎる演出を取り入れました。スクロールに合わせてロケットが画面内を移動することで、情報を見るだけではなく、次のセクションへ進む途中にも楽しめるようにしています。
      - image: /image/lp_rocket.webp
        text:
          - また、ロケットが通り過ぎた先には、夏の大三角と星の粒子が完成したfooterを配置し、最後まで宇宙を進んでいくような流れを意識しました。

reflection:
  - 今回の制作を通して、Three.jsやGSAPを使用した3D表現やスクロールアニメーションについて理解を深めることができました。また、ただ3Dモデルを配置して動かすだけではなく、夏の大三角が最後に完成する演出など、サイトのテーマに合わせて動きを考えることの大切さも学びました。
  - 一方で、3Dモデルや星などの要素を増やしすぎるとサイトの動作が重くなることも実感しました。今後は3D表現の面白さだけでなく、サイトの見やすさや動作の軽さにも気を配りながら制作していきたいです。
---
