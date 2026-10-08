import { Outlet } from 'react-router-dom'
import { PageMetadata } from '../components/PageMetadata'
import { StructuredData } from '../components/StructuredData'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PageMetadata />
      <StructuredData />
      <SiteHeader />
      <main className="mx-auto w-full flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
