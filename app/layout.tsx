import '@/styles/globals.css'
import localFont from 'next/font/local'

const LxgwWenKaiFont = localFont({ src: '../public/fonts/LXGWWenKai-Regular.ttf' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={LxgwWenKaiFont.className}>{children}</body>
    </html>
  )
}
