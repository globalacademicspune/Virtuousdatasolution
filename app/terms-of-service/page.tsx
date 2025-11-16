"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfService() {
  return (
    <main>
      <Header />

      <section className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use License</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                VirtuousDataSolution's website for personal, non-commercial transitory viewing only. This is the grant
                of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/70">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>
                  Attempting to decompile, reverse engineer, disassemble, or otherwise reverse-engineering any software
                  contained on the website
                </li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Disclaimer</h2>
              <p className="text-foreground/70 leading-relaxed">
                The materials on VirtuousDataSolution's website are provided on an 'as is' basis. VirtuousDataSolution
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Limitations</h2>
              <p className="text-foreground/70 leading-relaxed">
                In no event shall VirtuousDataSolution or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on VirtuousDataSolution's website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Accuracy of Materials</h2>
              <p className="text-foreground/70 leading-relaxed">
                The materials appearing on VirtuousDataSolution's website could include technical, typographical, or
                photographic errors. VirtuousDataSolution does not warrant that any of the materials on its website are
                accurate, complete, or current. VirtuousDataSolution may make changes to the materials contained on its
                website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Links</h2>
              <p className="text-foreground/70 leading-relaxed">
                VirtuousDataSolution has not reviewed all of the sites linked to its website and is not responsible for
                the contents of any such linked site. The inclusion of any link does not imply endorsement by
                VirtuousDataSolution of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Modifications</h2>
              <p className="text-foreground/70 leading-relaxed">
                VirtuousDataSolution may revise these terms of service for its website at any time without notice. By
                using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Governing Law</h2>
              <p className="text-foreground/70 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                where VirtuousDataSolution operates, and you irrevocably submit to the exclusive jurisdiction of the
                courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at
                legal@virtuousdatasolution.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
