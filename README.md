# VRChat-bolt

VRChat world discovery UI の React / Vite prototype です。

現行実装は `src/App.tsx` にsample world dataを持ち、world名・作者名・tagを想定した検索入力とworld card一覧を表示します。現在の `WorldGrid` にはsample dataを渡しており、live VRChat APIからworldを取得する実装ではありません。

- UI: React + TypeScript + Tailwind CSS
- Data: current source code内のsample world records
- Surface: world discovery / search UI prototype

[Edit in StackBlitz](https://stackblitz.com/~/github.com/KAFKA2306/VRChat-bolt)
