import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import WorldGrid from './components/WorldGrid';
import type { World } from './types/world';

const SAMPLE_WORLDS: World[] = [
  {
    id: "wrld_ba913a96-644b-4a46-8b8f-91d6dc83cd38",
    name: "The Black Cat",
    authorName: "Spookyghostboo",
    description: "1920年代のスピークイージーバーを再現した大人の社交場。ジャズ音楽と共に優雅な時間を過ごせます。",
    thumbnailUrl: "https://api.vrchat.cloud/api/1/file/file_ba913a96-644b-4a46-8b8f-91d6dc83cd38/1/file",
    capacity: 40,
    currentUsers: 40,
    tags: ["デート", "バー", "ジャズ"],
    rating: 4.8,
    visitCount: 2500000,
    favoriteCount: 125000,
    mood: "cozy",
    groupSize: "large-group"
  },
  // Add more sample worlds here...
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-purple-400" />
          <h1 className="text-2xl font-bold">VRChat Platform</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-purple-400 transition-colors">ホーム</a>
          <a href="#" className="hover:text-purple-400 transition-colors">ダッシュボード</a>
          <a href="#" className="hover:text-purple-400 transition-colors">お気に入り</a>
        </nav>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
          ログイン
        </button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            VRChatワールド発見プラットフォーム
          </h2>
          <p className="text-gray-400 mb-8">
            AIが推薦する最適なワールドで、新しい体験を見つけよう
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ワールド名、作者名、タグで検索... (例: The Black Cat, Spookyghostboo, bar)"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <WorldGrid worlds={SAMPLE_WORLDS} />
      </main>
    </div>
  );
}

export default App;