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
| assets/ | プロフィール画像、OGP画像、games/・tools/・media/のカード画像 |
| CNAME | 独自ドメインrutile3.comの指定 |
| docs/ | 改善タスク、設計方針、変更記録 |
| rutile3.com.code-workspace | VS Codeでルートフォルダーを開く設定 |

## コンテンツの追加・更新

1. index.htmlのgames-section（ゲーム）、tools-section（ツール）、media-section（メモ・記録）から対象の一覧を選びます。
2. 新規追加は既存カードのcol要素全体を複製し、タイトル・説明・href・画像パス・altを編集します。既存カードの更新は対象箇所を直接編集します。
3. 画像はassets/の該当ディレクトリへ置きます。実在するURL・画像を使い、紹介文は確認できた内容で記述します。
4. コード変更の内容に応じて、日本語の変更記録とタスクリストの進捗を更新します。編集時はAGENTS.mdに従い、改行・タブ混入・インデント・不自然なエスケープ文字をチェックします。

フッターの年号はapp.jsが現在年に自動更新します。JavaScriptが無効または読み込まれない場合は、index.htmlのyear要素の初期値を表示します。年が変わった際は、この初期値も必要に応じて更新してください。

作品情報の管理先はindex.htmlです。詳しい更新手順と採用理由は[作品カードの静的化方針](docs/static-project-cards.md)を参照してください。

## ローカルでの確認（参考）

現在の作業方針では、表示・リンク・公開状態の確認を必須の更新手順や独立したタスクとして扱いません。以下は、必要に応じて手動で確認したい場合の参考手順です。

1. VS Codeでこのフォルダー、またはrutile3.com.code-workspaceを開きます。
2. Live Server拡張機能を利用し、index.htmlを右クリックして「Open with Live Server」を選択します。
3. ブラウザで開いたURL（例：http://127.0.0.1:5500/）を確認します。ポート番号は環境により異なります。

確認する場合は、PC・モバイル幅での折り返し、画像、横スクロール、リンク、キーボードフォーカス、JavaScript無効時のカード表示が参考になります。BootstrapとアイコンはCDNから取得するため、通常の表示確認にはインターネット接続が必要です。

## 公開と関連文書

GitHub Pagesで公開しています。公開元ブランチ・フォルダー・デプロイ方式は、この文書では未確認です。設定を調べる必要がある場合は、GitHubのSettings → Pagesを参照できます。現在の作業方針では、公開設定の調査やマージ後のデプロイ・動作確認を必須タスクには含めません。

- [改善タスクリスト](docs/task-list.md)
- [追加仕様](docs/spec_additions.md) / [仕様変更](docs/spec_changes.md)
