# rutile3.com

Rutile3の個人ポートフォリオサイトです。個人制作のゲーム・Webツールと、趣味や技術に関するメモへのリンクを掲載しています。

公開URL：<https://rutile3.com/>

## 使用技術

- HTML / CSS / JavaScript
- Bootstrap 5.3.3、Bootstrap Icons 1.11.3（CDNから読み込み）
- GitHub Pages（公開）、Google Analytics（アクセス解析）

作品カードはHTMLに直接記述しています。ビルド工程やnpm依存関係のインストールは不要です。

## ディレクトリ構成

| パス | 用途 |
| --- | --- |
| index.html | プロフィール・作品カード・メモへのリンク |
| styles.css | サイト固有の配色・カード表示 |
| app.js | フッターの年号更新 |
| assets/ | プロフィール画像、games/・tools/・media/のカード画像 |
| CNAME | 独自ドメインrutile3.comの指定 |
| docs/ | 改善タスク、設計方針、変更記録 |
| rutile3.com.code-workspace | VS Codeでルートフォルダーを開く設定 |

## コンテンツの追加・更新

1. index.htmlのgames-section（ゲーム）、tools-section（ツール）、media-section（メモ・記録）から対象の一覧を選びます。
2. 新規追加は既存カードのcol要素全体を複製し、タイトル・説明・href・画像パス・altを編集します。既存カードの更新は対象箇所を直接編集します。
3. 画像はassets/の該当ディレクトリへ置きます。実在するURL・画像を使い、紹介文は確認できた内容で記述します。
4. ローカルで表示とリンクを確認し、必要な変更記録とタスクリストを更新します。

作品情報の管理先はindex.htmlです。詳しい更新手順と採用理由は[作品カードの静的化方針](docs/static-project-cards.md)を参照してください。

## ローカルでの確認

1. VS Codeでこのフォルダー、またはrutile3.com.code-workspaceを開きます。
2. Live Server拡張機能を利用し、index.htmlを右クリックして「Open with Live Server」を選択します。
3. ブラウザで開いたURL（例：http://127.0.0.1:5500/）を確認します。ポート番号は環境により異なります。

PC・モバイル幅で折り返し、画像、横スクロール、リンク、キーボードフォーカスを確認します。JavaScript無効時にもカードが表示されることを確認してください。BootstrapとアイコンはCDNから取得するため、通常の表示確認にはインターネット接続が必要です。

## 公開と関連文書

GitHub Pagesで公開しています。公開元ブランチ・フォルダー・デプロイ方式は、この文書では未確認です。GitHubのSettings → Pagesで現在の設定を確認してください。公開元へのマージ後はデプロイ成功と公開サイトの動作を確認します。

- [改善タスクリスト](docs/task-list.md)
- [追加仕様](docs/spec_additions.md) / [仕様変更](docs/spec_changes.md)
