import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import '../styles/iframe_globals.scss';
import '../styles/modal_globals.scss';
import { Metadata } from 'next';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Júlio faria\'s portifolio',
  description: 'Júlio Faria\'s personal projects 😉',
}