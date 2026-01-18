import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, X, ArrowRight, ArrowLeft, BookOpen, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function NauticEdVsRYAPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <a href="https://virginislandsyachtbroker.com/" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Brokerage</a>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/contact" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Training" variant="light" />
        </div>
      </header>

      {/* Article Header */}
      <section className="bg-gradient-to-br from-[#2e4b5c] to-[#1a2f3a] py-20 pt-32">
        <div className="container mx-auto px-4">
          <Link href="/training/day-skipper-st-martin" className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#47c0d5]">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to St. Martin Training</span>
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#47c0d5]/20 px-4 py-2">
            <BookOpen className="h-4 w-4 text-[#47c0d5]" />
            <span className="text-sm font-medium text-[#47c0d5]">Certification Guide</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            NauticEd vs RYA for Catamaran Charter Certification
          </h1>
          <p className="max-w-3xl text-xl text-white/80">
            Choosing between NauticEd and RYA certification? We compare both systems to help you decide which path leads to bareboat charter success.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <section className="mb-12">
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                When it comes to sailing certifications for bareboat chartering, two organizations dominate the conversation: the <strong>NauticEd (RYA)</strong> based in the UK, and <strong>NauticEd</strong> based in the US. Both offer internationally recognized credentials, but they take different approaches to training and certification.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                As an authorized NauticEd training partner, we've trained sailors through both systems and can offer an honest comparison to help you choose the right path.
              </p>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">Side-by-Side Comparison</h2>

              <div className="overflow-hidden rounded-xl border-2 border-primary/10">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="p-4 text-left font-bold">Feature</th>
                      <th className="p-4 text-center font-bold">NauticEd SLC</th>
                      <th className="p-4 text-center font-bold">NauticEd Bareboat Charter Master</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-primary">Online Theory</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Self-paced, lifetime access</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Online or classroom</span>
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium text-primary">Practical Training</td>
                      <td className="p-4 text-center">
                        <span className="text-sm">5-7 days</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-sm">5 days minimum</span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-primary">ICC Eligible</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium text-primary">European Recognition</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">30+ countries</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Widely recognized</span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-primary">Digital Logbook</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Automatic tracking</span>
                      </td>
                      <td className="p-4 text-center">
                        <X className="mx-auto h-5 w-5 text-gray-300" />
                        <span className="text-xs text-muted-foreground">Paper-based</span>
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium text-primary">Tidal Waters Required</td>
                      <td className="p-4 text-center">
                        <X className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Not required</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-yellow-600" />
                        <span className="text-xs text-muted-foreground">For full qualification</span>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-primary">Caribbean Training</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Ideal conditions</span>
                      </td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                        <span className="text-xs text-muted-foreground">Available</span>
                      </td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium text-primary">US Coast Guard Approved</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="mx-auto h-5 w-5 text-green-600" />
                      </td>
                      <td className="p-4 text-center">
                        <X className="mx-auto h-5 w-5 text-gray-300" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* NauticEd Advantages */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">When to Choose NauticEd</h2>

              <Card className="mb-6 border-2 border-[#47c0d5]">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary">NauticEd SLC is ideal if you:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#47c0d5]" />
                      <span className="text-muted-foreground">Want flexible online theory you can complete at your own pace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#47c0d5]" />
                      <span className="text-muted-foreground">Prefer training in consistent Caribbean conditions rather than UK/European weather</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#47c0d5]" />
                      <span className="text-muted-foreground">Value digital credentials and automatic experience logging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#47c0d5]" />
                      <span className="text-muted-foreground">Are US-based and want USCG-recognized certification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#47c0d5]" />
                      <span className="text-muted-foreground">Plan to charter primarily in the Mediterranean or Caribbean</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* RYA Advantages */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">When to Choose RYA</h2>

              <Card className="mb-6 border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary">NauticEd Bareboat Charter Master is ideal if you:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">Are UK-based and want to train locally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">Plan to continue to RYA Yachtmaster progression</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">Need tidal navigation experience for UK/Northern European sailing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">Prefer the traditional classroom-based approach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* The Bottom Line */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">The Bottom Line</h2>
              <div className="rounded-xl bg-muted p-6">
                <p className="mb-4 text-muted-foreground">
                  <strong className="text-primary">For bareboat charter certification,</strong> both NauticEd SLC and NauticEd Bareboat Charter Master are widely accepted by charter companies worldwide. The practical skills are equivalent — the difference is in the delivery.
                </p>
                <p className="mb-4 text-muted-foreground">
                  NauticEd offers a more modern, flexible approach with digital tools and doesn't require tidal waters for full certification. RYA offers the traditional pathway with strong UK recognition.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-primary">Our recommendation:</strong> If you're training in the Caribbean and want charter-ready certification for Mediterranean and worldwide sailing, NauticEd SLC combined with SLC assessment provides everything you need.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-xl bg-gradient-to-br from-[#2e4b5c] to-[#1a2f3a] p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-white">Get NauticEd Certified in St. Martin</h2>
              <p className="mb-6 text-white/80">
                Our 6-day program delivers NauticEd SLC + SLC certification in perfect Caribbean conditions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-[#47c0d5] text-[#2e4b5c] hover:bg-[#5dd0e5]">
                  <Link href="/training/day-skipper-st-martin">
                    View St. Martin Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/training/nauticed-prerequisites">NauticEd Prerequisites</Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <Link href="/training" className="text-secondary hover:underline">← Back to All Training Programs</Link>
          </div>
          <h2 className="mb-8 text-center text-2xl font-bold text-primary">Related Articles</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Link href="/training/articles/catamaran-charter-certification-europe" className="group">
              <Card className="h-full border-2 border-primary/10 transition-all group-hover:border-secondary">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-primary group-hover:text-secondary">How to Get Certified to Charter a Catamaran in Europe</h3>
                  <p className="text-sm text-muted-foreground">Understand the certification requirements for European charter destinations.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/training/articles/skipper-certification-requirements" className="group">
              <Card className="h-full border-2 border-primary/10 transition-all group-hover:border-secondary">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-primary group-hover:text-secondary">What Charter Companies Look for in Skipper Certification</h3>
                  <p className="text-sm text-muted-foreground">Learn what credentials charter companies actually require.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Logo variant="dark" />
              <p className="mt-4 leading-relaxed text-white/80">Your trusted partner for yacht sales, training, and charter ownership in the Caribbean</p>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Bali Catamarans</Link></li>
                <li><Link href="/training" className="transition-colors hover:text-secondary">Sailing Training</Link></li>
                <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Training Programs</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/training/day-skipper" className="transition-colors hover:text-secondary">Bareboat Charter Master (BVI)</Link></li>
                <li><Link href="/training/day-skipper-st-martin" className="transition-colors hover:text-secondary">Bareboat Charter Master (St. Martin)</Link></li>
                <li><Link href="/training/offshore-passages" className="transition-colors hover:text-secondary">Offshore Passages</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Contact Us</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>+1 786 246 0809</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>training@virginislandsyachtbroker.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Virgin Islands Yacht Broker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
