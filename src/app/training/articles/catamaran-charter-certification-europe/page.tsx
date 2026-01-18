import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, BookOpen, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function CatamaranCharterCertificationEuropePage() {
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
            <span className="text-sm font-medium text-[#47c0d5]">Training Guide</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            How to Get Certified to Charter a Catamaran in Europe
          </h1>
          <p className="max-w-3xl text-xl text-white/80">
            Your complete guide to obtaining the certifications required for bareboat catamaran charter in European waters, including the Mediterranean, Greece, Croatia, and beyond.
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
                Chartering a catamaran in Europe is a dream for many sailors, offering access to stunning destinations like the Greek Islands, Croatian coast, French Riviera, and Balearic Islands. However, European charter companies require proof of competence before handing over the keys to a €500,000+ yacht.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                This guide explains the certification requirements, how to obtain them, and why training in the Caribbean can fast-track your European charter dreams.
              </p>
            </section>

            {/* Understanding European Requirements */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">Understanding European Charter Requirements</h2>
              <p className="mb-6 text-muted-foreground">
                Unlike the Caribbean, where charter requirements are often more relaxed, European countries mandate specific certifications:
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-primary">SLC (Sailing License and Credentials)</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      The ICC is a UN-recognized certificate proving you're competent to operate recreational craft in foreign waters. Required or recommended in most European countries.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Required in Croatia, Greece, Spain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Issued after practical assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Valid for sail and/or power</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-primary">SLC (Sailing License & Credentials)</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      NauticEd's internationally recognized sailing license that combines online theory with practical assessment. Accepted by charter companies worldwide.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Accepted in 30+ countries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Includes digital logbook</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />
                        <span>Lifetime validity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Country-Specific Requirements */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">Country-Specific Requirements</h2>

              <div className="space-y-4">
                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="mb-2 font-bold text-primary">Croatia</h3>
                        <p className="text-sm text-muted-foreground">
                          ICC mandatory. Also requires VHF radio license. Croatian authorities actively check credentials during charter check-ins.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="mb-2 font-bold text-primary">Greece</h3>
                        <p className="text-sm text-muted-foreground">
                          ICC or equivalent national license required. NauticEd SLC widely accepted by Greek charter companies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="mb-2 font-bold text-primary">Spain & Balearics</h3>
                        <p className="text-sm text-muted-foreground">
                          ICC or NauticEd Bareboat Charter Master minimum. Boats over 15m may require additional qualifications.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="mb-2 font-bold text-primary">France & Corsica</h3>
                        <p className="text-sm text-muted-foreground">
                          ICC recommended. French charter companies may accept comprehensive sailing resume in lieu of formal certification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why Train in the Caribbean */}
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-primary">Why Train in the Caribbean for European Charters?</h2>
              <p className="mb-6 text-muted-foreground">
                Our St. Martin catamaran training program provides the perfect foundation for European chartering:
              </p>

              <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <span className="font-bold text-primary">Consistent Trade Winds:</span>
                    <span className="text-muted-foreground"> Train in reliable 15-25 knot conditions that build real sailing skills</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <span className="font-bold text-primary">Multi-Island Passages:</span>
                    <span className="text-muted-foreground"> Experience offshore sailing between St. Martin, Anguilla, and St. Barts</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <span className="font-bold text-primary">International Clearances:</span>
                    <span className="text-muted-foreground"> Practice customs and immigration procedures between French, Dutch, and British territories</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <span className="font-bold text-primary">Year-Round Training:</span>
                    <span className="text-muted-foreground"> No seasonal restrictions — train when European waters are too cold</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="rounded-xl bg-gradient-to-br from-[#2e4b5c] to-[#1a2f3a] p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Charter Certified?</h2>
              <p className="mb-6 text-white/80">
                Our 6-day St. Martin program includes NauticEd SLC + SLC certification
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-[#47c0d5] text-[#2e4b5c] hover:bg-[#5dd0e5]">
                  <Link href="/training/day-skipper-st-martin">
                    View St. Martin Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/training/nauticed-prerequisites">View Prerequisites</Link>
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
            <Link href="/training/articles/why-st-martin-catamaran-training" className="group">
              <Card className="h-full border-2 border-primary/10 transition-all group-hover:border-secondary">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-primary group-hover:text-secondary">Why St Martin Is Ideal for Advanced Catamaran Training</h3>
                  <p className="text-sm text-muted-foreground">Discover what makes St. Martin the perfect location for offshore sailing training.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/training/articles/nauticed-vs-rya-certification" className="group">
              <Card className="h-full border-2 border-primary/10 transition-all group-hover:border-secondary">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-bold text-primary group-hover:text-secondary">NauticEd vs RYA for Catamaran Charter Certification</h3>
                  <p className="text-sm text-muted-foreground">Compare certification options and find the right path for your sailing goals.</p>
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
