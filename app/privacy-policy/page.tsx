"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />

      <section className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-foreground/70 leading-relaxed">
                VirtuousDataSolution ("we", "us", "our", or "Company") operates the VirtuousDataSolution website (the
                "Service"). This page informs you of our policies regarding the collection, use, and disclosure of
                personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information Collection and Use</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <h3 className="text-xl font-bold mb-2 text-foreground">Types of Data Collected:</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Technical data (IP address, browser type, operating system, pages visited)</li>
                <li>Usage data (time spent on pages, links clicked, content interactions)</li>
                <li>Device information (device type, unique identifiers, device settings)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Data</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                VirtuousDataSolution uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues and fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Security of Data</h2>
              <p className="text-foreground/70 leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Privacy Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at
                privacy@virtuousdatasolution.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
