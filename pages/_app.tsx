/**
 * 这是一个顶级的公共组件. 所有的 pages 组件(Component)都会经过这里
 * 等同于 React SPA 的 App.tsx
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import cn from 'clsx'

export default function App({ Component, pageProps }: AppProps) {
  console.log(11111, pageProps)
  return (
    <>
      <h1 className="text-3xl font-bold underline">标题栏</h1>
      <Component {...pageProps} />
    </>
  )
}
