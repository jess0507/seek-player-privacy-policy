import { useEffect, useState } from 'react'

// 版本號 runtime 向 GitHub 查最新 release 的 tag;API 失敗(離線、rate limit)時退回此值。
// release workflow 先上傳 GCS 再建立 GitHub Release,故查得到 release 時 GCS 檔案必已存在。
const FALLBACK_VERSION = 'v1.2.6'
const LATEST_RELEASE_API =
  'https://api.github.com/repos/jess0507/lyrics-player-app/releases/latest'

// APK 發佈於 GCS 公開 bucket(見 seek_player release.yml),檔名帶不含 v 前綴的版本號
const apkUrl = (version: string) =>
  `https://storage.googleapis.com/seek-player-f724e-apk/app-release-${version.replace(/^v/, '')}.apk`

// 截圖展示卡(參考 Play Store 視覺:淡色漸層背景 + 粗體標題 + 手機截圖)
const screenshots = [
  {
    src: '/screenshots/2.jpg',
    title: 'Auto-sync Lyrics',
    subtitle: '自動同步歌詞,對齊音檔',
    gradient: 'from-sky-100 via-slate-50 to-rose-50',
  },
  {
    src: '/screenshots/1.jpg',
    title: 'Easy Control',
    subtitle: '快轉倒轉,操作直覺',
    gradient: 'from-blue-100 via-sky-50 to-indigo-50',
  },
  {
    src: '/screenshots/5.jpg',
    title: 'Statistics',
    subtitle: '聆聽時長與播放統計',
    gradient: 'from-sky-100 via-blue-50 to-slate-50',
  },
  {
    src: '/screenshots/3.jpg',
    title: 'Local Music',
    subtitle: '本機音樂,離線播放',
    gradient: 'from-rose-50 via-slate-50 to-sky-100',
  },
  {
    src: '/screenshots/4.jpg',
    title: 'Playlists',
    subtitle: '建立播放清單與最愛',
    gradient: 'from-indigo-50 via-sky-50 to-blue-100',
  },
  {
    src: '/screenshots/6.jpg',
    title: 'Personalization',
    subtitle: '主題色與個人化設定',
    gradient: 'from-slate-50 via-sky-50 to-rose-100',
  },
]

const features = [
  { emoji: '⭐', text: 'Ad-Free｜無廣告' },
  { emoji: '🎵', text: 'Local & offline｜本機離線播放' },
  { emoji: '🎤', text: 'Lyrics import & display｜歌詞匯入與顯示' },
  { emoji: '✨', text: 'Auto-sync lyrics｜自動同步歌詞' },
  { emoji: '🎨', text: 'Personalization｜個人化設定' },
]

export default function Home() {
  const [version, setVersion] = useState(FALLBACK_VERSION)

  useEffect(() => {
    fetch(LATEST_RELEASE_API)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { tag_name?: string }) => {
        if (data.tag_name) setVersion(data.tag_name)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/70 p-8 shadow-sm backdrop-blur sm:p-12">
      {/* 裝飾幾何圖形(參考 Play Store 視覺) */}
      <div className="pointer-events-none absolute -right-6 top-8 h-16 w-16 rotate-12 rounded-lg border-4 border-sky-200" />
      <div className="pointer-events-none absolute -left-8 bottom-24 h-20 w-20 rounded-full border-4 border-rose-200" />
      <div
        className="pointer-events-none absolute bottom-6 right-10 h-0 w-0 border-b-[28px] border-l-[16px] border-r-[16px] border-b-sky-300/60 border-l-transparent border-r-transparent"
      />

      <div className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="flex items-center gap-4">
          <img
            src="/app_logo_icon.png"
            alt="Lyrics Player logo"
            className="h-20 w-20 sm:h-24 sm:w-24"
          />
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Lyrics Player
          </h2>
        </div>

        <ul className="mt-8 space-y-3 text-lg text-gray-800">
          {features.map(({ emoji, text }) => (
            <li key={text} className="flex items-center gap-3">
              <span className="text-xl">{emoji}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={apkUrl(version)}
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 text-lg font-bold text-white shadow-md transition-colors hover:bg-green-600"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 3a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1z" />
              <path d="M5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" />
            </svg>
            Download APK
          </a>
          <span className="text-sm text-gray-500">{version}</span>
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map(({ src, title, subtitle, gradient }) => (
            <figure
              key={src}
              className={`flex flex-col items-center rounded-2xl bg-gradient-to-b ${gradient} px-6 pb-0 pt-8 text-center shadow-sm`}
            >
              <figcaption>
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
              </figcaption>
              <img
                src={src}
                alt={`${title} 畫面截圖`}
                loading="lazy"
                className="mt-6 w-full max-w-[240px] rounded-t-[1.75rem] border-4 border-b-0 border-gray-800 shadow-lg"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
