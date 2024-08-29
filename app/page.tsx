import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">JSON Parser</h1>
      <ThemeToggle />
    </main>
  )
}
