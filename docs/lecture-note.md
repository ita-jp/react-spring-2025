Lecture Note
===

## Section-1: フロントエンド

### Node.js のインストール

Node.js は、JavaScript をサーバーサイドで実行するためのランタイム環境です。従来、JavaScript はブラウザ内でのみ実行されていましたが、Node.js により、サーバーサイドでも JavaScript を使用して Web アプリケーションを開発できるようになりました。

React プロジェクトの開発では、パッケージ管理、ビルドツール、開発サーバーの実行のため Node.js が必須です。

インストール方法は公式ページを参考にしてください：

- https://nodejs.org/ja/download

### React プロジェクトの初期化

[最初の Vite プロジェクトを生成する](https://ja.vite.dev/guide/#%E6%9C%80%E5%88%9D%E3%81%AE-vite-%E3%83%95%E3%82%9A%E3%83%AD%E3%82%B7%E3%82%99%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)

```bash
mkdir react-spring
cd react-spring

npm create vite@latest

◇  Project name:
│  frontend
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
│
└  Done. Now run:

  cd frontend
  npm install
  npm run dev
```

#### 開発サーバーの起動

React プロジェクトが完成したので起動してみましょう

```bash
cd frontend
npm install
npm run dev
```

次のような出力を得られると思います：
```
  VITE v7.0.2  ready in 318 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

出力の通りにコマンドを実行すると、Vite の開発サーバーが起動します。
それではここまでで動作確認をしてみましょう：

1. ブラウザで `http://localhost:5173/` を開く
2. Vite のデフォルトページが表示されることを確認

#### デフォルトのコードを消す

Vite のデフォルトページが表示されることを確認できたら、次はデフォルトのコードを削除して、シンプルな状態から始めましょう。

まず不要なファイルを削除します：

- frontend/src/App.css
- frontend/src/index.css
- frontend/src/assets/react.svg

削除した内容を参照している main.tsx を変更します：

```diff
diff --git a/frontend/src/main.tsx b/frontend/src/main.tsx
index bef5202..4aff025 100644
--- a/frontend/src/main.tsx
+++ b/frontend/src/main.tsx
@@ -1,6 +1,5 @@
 import { StrictMode } from 'react'
 import { createRoot } from 'react-dom/client'
-import './index.css'
 import App from './App.tsx'
 
 createRoot(document.getElementById('root')!).render(
````

トップページの表示内容を簡素にしましょう：

```diff
diff --git a/frontend/src/App.tsx b/frontend/src/App.tsx
index 3d7ded3..39b137f 100644
--- a/frontend/src/App.tsx
+++ b/frontend/src/App.tsx
@@ -1,33 +1,7 @@
-import { useState } from 'react'
-import reactLogo from './assets/react.svg'
-import viteLogo from '/vite.svg'
-import './App.css'
-
 function App() {
-  const [count, setCount] = useState(0)
-
   return (
     <>
-      <div>
-        <a href="https://vite.dev" target="_blank">
-          <img src={viteLogo} className="logo" alt="Vite logo" />
-        </a>
-        <a href="https://react.dev" target="_blank">
-          <img src={reactLogo} className="logo react" alt="React logo" />
-        </a>
-      </div>
-      <h1>Vite + React</h1>
-      <div className="card">
-        <button onClick={() => setCount((count) => count + 1)}>
-          count is {count}
-        </button>
-        <p>
-          Edit <code>src/App.tsx</code> and save to test HMR
-        </p>
-      </div>
-      <p className="read-the-docs">
-        Click on the Vite and React logos to learn more
-      </p>
+      <h1>Todo アプリ</h1>
     </>
   )
 }
```
