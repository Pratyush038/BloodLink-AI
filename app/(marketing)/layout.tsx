import { Metadata } from "next"
import { Header } from "@/components/global/header"
import { headerConfig } from "@/lib/config/header"
import Footer from "@/components/global/footer"
import { footerConfig } from "@/lib/config/footer"

export const metadata: Metadata = {
  title: "BloodLink AI - Blood Shortage Prediction Platform",
  description: "AI-powered platform leveraging federated learning to predict blood shortages and coordinate donor responses in real-time.",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
        <main>
            <Header config={headerConfig} />
            {children}
            <Footer config={footerConfig} />
        </main>
  )
} 