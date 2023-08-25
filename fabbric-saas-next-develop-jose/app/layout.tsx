import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";
import Navbar from "@/components/navbar/navbar_dashboard";
import '@/assets/css/globals.css'
import '@/assets/css/dashboard.css'

export const metadata = {
  title: 'Fabbric',
  description: 'Fabbric Creator Dashboard',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  
}) {
    const session = await getServerSession(options)

    const props = { session: session }

    return (
        < >
        <html>
            <head>
            {/* <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} /> */}
            <link rel="icon" href="/fabbric_favicon.png" />
            </head>

            <body>
                <Navbar props={props} />
                {children}
            </body>

        </html>
        </>
    )
}