import Link from 'next/link'

export default function HomePage() {
  return (
    <nav className="demo-root flex min-h-screen flex-col items-center justify-center">
      <ul>
        <li>
          <Link href={ "/game" }>Game</Link>
        </li>
        <li>
          <Link href={ "/help" }>Help</Link>
        </li>
      </ul>
    </nav>
  );
}
