import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Generador de Datos de Prueba',
  description: 'Genera datos de prueba argentinos para tus formularios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

