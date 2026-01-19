import Link from "next/link";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#030303] text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-600 to-cyan-500 font-bold text-white">
                        V
                    </div>
                    <span className="text-lg font-bold">Vortex</span>
                </Link>
            </nav>

            <main className="mx-auto max-w-4xl px-6 py-20">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Politique de Confidentialité</h1>
                <p className="mt-4 text-zinc-400">Dernière mise à jour : 19 Janvier 2026</p>

                <div className="mt-12 space-y-12 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white">1. Collecte de données</h2>
                        <p className="mt-4">
                            Vortex est conçu pour respecter votre vie privée. Pour les fonctionnalités locales de gestion de fichiers,
                            <strong> aucune donnée personnelle n'est collectée, transmise ou stockée</strong> sur nos serveurs.
                            Vos fichiers restent exclusivement sur votre appareil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">2. Utilisation des permissions</h2>
                        <p className="mt-4">
                            L'application demande l'accès à votre stockage uniquement pour vous permettre de gérer vos fichiers.
                            Ces accès sont nécessaires au fonctionnement technique de l'application et ne sont utilisés à aucune autre fin.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">3. Localisation des données</h2>
                        <p className="mt-4">
                            Toutes les opérations de gestion de fichiers s'effectuent localement sur votre terminal.
                            Si vous choisissez d'utiliser des services cloud tiers via Vortex (à l'avenir), ces services seront soumis à leurs propres politiques de confidentialité.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">4. Sécurité</h2>
                        <p className="mt-4">
                            Bien que nous ne stockions pas vos données sur nos serveurs, nous intégrons des protocoles de sécurité avancés
                            pour garantir que l'application elle-même est protégée contre les intrusions malveillantes sur votre appareil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">5. Contact</h2>
                        <p className="mt-4">
                            Pour toute question concernant votre confidentialité, vous pouvez nous contacter à Abidjan :
                        </p>
                        <div className="mt-4 rounded-2xl bg-white/5 p-6 border border-white/10">
                            <p className="font-semibold text-white">Bureau Vortex CI :</p>
                            <p>Marcory Zone 4, Abidjan</p>
                            <p>République de Côte d'Ivoire</p>
                            <p>Email : privacy@vortex-app.ci</p>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 border-t border-white/5 py-10 text-center text-sm text-zinc-500">
                <p>© 2026 Vortex App. Confidentialité garantie.</p>
            </footer>
        </div>
    );
}
