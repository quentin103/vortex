import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />
      <div className="absolute top-[20%] right-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">Vortex</span>
        </div>
        <div className="hidden space-x-8 text-sm font-medium text-zinc-400 md:flex">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
        <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-zinc-200 transition-all">
          Download App
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-32 text-center md:pt-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-purple-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
            </span>
            New: Local File Management Mode
          </div>
          <h1 className="mt-8 text-balance text-5xl font-extrabold tracking-tight md:text-7xl">
            Manage your files with <br />
            <span className="gradient-text">Absolute Fluidity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Vortex is the next generation file manager built for speed and security.
            No login required for local use. Your privacy, our priority.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-12 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 px-8 font-bold shadow-xl shadow-purple-500/20 transition-transform hover:scale-105 active:scale-95">
              Get Started for Free
            </button>
            <button className="h-12 rounded-full border border-white/10 bg-white/5 px-8 font-semibold backdrop-blur-sm transition-colors hover:bg-white/10">
              Watch Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
              <div className="text-4xl text-purple-500">📂</div>
              <h3 className="text-xl font-bold">Smart Management</h3>
              <p className="text-zinc-400 leading-relaxed">
                Organize your documents, photos, and videos with intuitive gestures and smart categorization.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
              <div className="text-4xl text-cyan-500">🔓</div>
              <h3 className="text-xl font-bold">No Account Needed</h3>
              <p className="text-zinc-400 leading-relaxed">
                Start managing your local files immediately. No sign-up, no personal data required for local features.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.04]">
              <div className="text-4xl text-indigo-500">🛡️</div>
              <h3 className="text-xl font-bold">Privacy First</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your data stays where it belongs: on your device. Encrypted and secure by default.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/50 py-20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-600 to-cyan-500 font-bold text-white">
                  V
                </div>
                <span className="text-lg font-bold tracking-tight">Vortex</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-zinc-400 leading-relaxed">
                Empowering your digital life with seamless file management and uncompromising privacy.
              </p>
              <div className="mt-6 flex flex-col gap-1 text-sm text-zinc-500">
                <p>Abidjan, Côte d'Ivoire</p>
                <p>Marcory Zone 4, Rue des Majorettes</p>
                <p>contact@vortex-app.ci</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><Link href="#features">Features</Link></li>
                <li><button className="hover:text-white">Download</button></li>
                <li><button className="hover:text-white">API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><button className="hover:text-white">GDPR</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-zinc-500 sm:flex-row">
            <p>© 2026 Vortex App. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">Made with ❤️ in Abidjan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
