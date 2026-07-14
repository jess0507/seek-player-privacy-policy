import { ReactNode } from 'react'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 space-y-3 leading-relaxed text-gray-600">{children}</div>
    </section>
  )
}

function ExternalLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline"
    >
      {href}
    </a>
  )
}

function PermissionTable({
  headers,
  rows,
}: {
  headers: [string, string]
  rows: [string, string][]
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-300 text-left">
            <th className="py-2 pr-4 font-semibold text-gray-900">{headers[0]}</th>
            <th className="py-2 font-semibold text-gray-900">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([permission, purpose]) => (
            <tr key={permission} className="border-b border-gray-200">
              <td className="py-2 pr-4">{permission}</td>
              <td className="py-2">{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-sm">
      {/* English */}
      <h2 className="text-2xl font-bold">Privacy Policy</h2>
      <p className="mt-2 text-sm text-gray-500">
        <strong>Last updated:</strong> 2026-06-09
      </p>
      <p className="mt-4 leading-relaxed text-gray-600">
        Lyrics Player ("the App") respects your privacy. This policy explains how the App
        collects, uses, and protects your data.
      </p>

      <Section title="1. Information We Collect">
        <p>
          <strong>Account data (Google Sign-In):</strong> When you sign in with Google, we
          receive your email address, display name, and profile photo via Firebase
          Authentication, used to create and identify your account. Sign-in is optional.
        </p>
        <p>
          <strong>Local audio files:</strong> The App accesses audio files on your device for
          playback only. These files are read and played <strong>solely on your device</strong>{' '}
          and are never uploaded or transmitted to any server.
        </p>
        <p>
          <strong>App settings &amp; playback data:</strong> Your playlists, playback progress,
          theme, and language preferences are stored <strong>only locally on your device</strong>{' '}
          (via SharedPreferences and the Isar local database).
        </p>
      </Section>

      <Section title="2. How We Use Data">
        <p>
          Data is used only to provide sign-in, play your chosen audio files, and remember your
          preferences. We do <strong>not</strong> use your data for advertising, and we do{' '}
          <strong>not</strong> sell, rent, or trade it to third parties.
        </p>
      </Section>

      <Section title="3. Third-Party Services">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Google Firebase Authentication</strong> —{' '}
            <ExternalLink href="https://firebase.google.com/support/privacy" />
          </li>
          <li>
            <strong>Google Sign-In</strong> —{' '}
            <ExternalLink href="https://policies.google.com/privacy" />
          </li>
        </ul>
      </Section>

      <Section title="4. Permissions">
        <PermissionTable
          headers={['Permission', 'Purpose']}
          rows={[
            ['Storage / Audio file access', 'Read and play audio files on your device'],
            ['Notifications', 'Show playback controls during background playback'],
          ]}
        />
        <p>You can revoke these permissions anytime in your device settings.</p>
      </Section>

      <Section title="5. Data Retention & Deletion">
        <p>
          Local data remains on your device until you clear the app's data or uninstall it.
          Account data is stored in Firebase; to delete your account and related data, contact us
          below.
        </p>
      </Section>

      <Section title="6. Children's Privacy">
        <p>
          The App is not directed to children under 13, and we do not knowingly collect personal
          data from children.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          We may update this policy from time to time. Changes will be posted on this page with an
          updated "Last updated" date.
        </p>
      </Section>

      <Section title="8. Contact Us">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:merukoo0507@gmail.com" className="text-green-600 hover:underline">
            merukoo0507@gmail.com
          </a>
        </p>
      </Section>

      <hr className="my-10 border-gray-200" />

      {/* 中文 */}
      <h2 className="text-2xl font-bold">隱私權政策｜Privacy Policy</h2>
      <p className="mt-2 text-sm text-gray-500">
        <strong>最後更新日期 / Last updated:</strong> 2026-06-09
      </p>
      <p className="mt-4 leading-relaxed text-gray-600">
        音訊歌詞播放器 Lyrics
        Player（以下稱「本應用程式」）重視您的隱私。本政策說明本應用程式如何蒐集、使用與保護您的資料。
      </p>

      <Section title="1. 我們蒐集的資料">
        <p className="font-medium text-gray-800">1.1 帳號資料（Google 登入）</p>
        <p>
          當您選擇使用 Google 帳號登入時，我們會透過 Firebase Authentication 取得以下資訊：
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>電子郵件地址</li>
          <li>顯示名稱</li>
          <li>頭像（個人資料照片）</li>
        </ul>
        <p>
          這些資料用於建立並識別您的帳號。若您未登入，本應用程式仍可正常使用基本功能。
        </p>
        <p className="font-medium text-gray-800">1.2 本機音訊檔案</p>
        <p>本應用程式需要存取您裝置上的音訊檔案，以提供播放功能。</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            這些檔案<strong>僅在您的裝置上讀取與播放</strong>。
          </li>
          <li>
            我們<strong>不會</strong>上傳、複製或傳輸您的音訊檔案到任何伺服器。
          </li>
        </ul>
        <p className="font-medium text-gray-800">1.3 應用程式設定與播放資料</p>
        <p>
          您的播放清單、播放進度、主題顏色、語言等偏好設定，
          <strong>僅儲存於您的裝置本機</strong>（透過 SharedPreferences 與 Isar
          本機資料庫），不會傳輸到外部。
        </p>
      </Section>

      <Section title="2. 我們如何使用資料">
        <p>我們蒐集的資料僅用於：</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>提供帳號登入與身分識別</li>
          <li>在您的裝置上播放您選擇的音訊檔案</li>
          <li>記住您的應用程式偏好設定</li>
        </ul>
        <p>
          我們<strong>不會</strong>將您的個人資料用於廣告，也<strong>不會</strong>
          將其出售、出租或交易給第三方。
        </p>
      </Section>

      <Section title="3. 第三方服務">
        <p>本應用程式使用以下第三方服務，這些服務可能依其各自的隱私權政策處理資料：</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Google Firebase Authentication</strong> — 處理帳號登入
            <br />
            隱私權政策：
            <ExternalLink href="https://firebase.google.com/support/privacy" />
          </li>
          <li>
            <strong>Google Sign-In</strong> — 處理 Google 帳號授權
            <br />
            隱私權政策：
            <ExternalLink href="https://policies.google.com/privacy" />
          </li>
        </ul>
      </Section>

      <Section title="4. 權限說明">
        <p>本應用程式可能請求以下裝置權限：</p>
        <PermissionTable
          headers={['權限', '用途']}
          rows={[
            ['儲存空間／音訊檔案存取', '讀取並播放您裝置上的音訊檔案'],
            ['通知', '在背景播放時顯示播放控制'],
          ]}
        />
        <p>您可以隨時在裝置的系統設定中撤銷這些權限。</p>
      </Section>

      <Section title="5. 資料保存與刪除">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            本機資料（設定、播放清單）會保留在您的裝置上，直到您清除應用程式資料或解除安裝本應用程式。
          </li>
          <li>
            帳號資料保存於 Firebase。若您希望刪除帳號及相關資料，請透過下方聯絡方式與我們聯繫。
          </li>
        </ul>
      </Section>

      <Section title="6. 兒童隱私">
        <p>
          本應用程式並非以未滿 13
          歲之兒童為對象，我們不會在知情的情況下蒐集兒童的個人資料。
        </p>
      </Section>

      <Section title="7. 政策變更">
        <p>
          我們可能會不時更新本隱私權政策。任何變更將於本頁面公告，並更新上方的「最後更新日期」。
        </p>
      </Section>

      <Section title="8. 聯絡我們">
        <p>如對本隱私權政策有任何疑問，請透過以下方式聯絡：</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:merukoo0507@gmail.com" className="text-green-600 hover:underline">
            merukoo0507@gmail.com
          </a>
        </p>
      </Section>
    </div>
  )
}
