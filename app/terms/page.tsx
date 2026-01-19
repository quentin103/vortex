import Link from "next/link";

export default function TermsPage() {
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
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Conditions Générales d'Utilisation</h1>
                <p className="mt-4 text-zinc-400">Dernière mise à jour : 19 Janvier 2026</p>

                <div className="mt-12 space-y-12 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white">1. Acceptation des conditions</h2>
                        <p className="mt-4">
                            En téléchargeant ou en utilisant l'application Vortex, vous acceptez d'être lié par les présentes conditions.
                            Vortex est une application de gestion de fichiers conçue pour offrir fluidité et sécurité aux utilisateurs basés en Côte d'Ivoire et dans le monde.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">2. Utilisation sans compte</h2>
                        <p className="mt-4">
                            Vortex permet une utilisation locale sans création de compte. Dans ce mode, aucune information personnelle n'est requise.
                            Vous restez seul responsable des fichiers gérés sur votre appareil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">3. Responsabilité de l'utilisateur</h2>
                        <p className="mt-4">
                            Vous êtes responsable du contenu que vous gérez via Vortex. Vortex ne peut être tenu responsable de la perte de données
                            due à une mauvaise manipulation ou à un dysfonctionnement matériel de votre appareil.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">4. Localité et Juridiction</h2>
                        <p className="mt-4">
                            Vortex est opéré depuis Abidjan, Côte d'Ivoire. Tout litige relatif à l'utilisation de l'application sera soumis
                            aux tribunaux compétents d'Abidjan.
                        </p>
                        <div className="mt-4 rounded-2xl bg-white/5 p-6 border border-white/10">
                            <p className="font-semibold text-white">Adresse Physique :</p>
                            <p>Marcory Zone 4, Rue des Majorettes</p>
                            <p>Abidjan, Côte d'Ivoire</p>
                            <p>BP 450 Abidjan 01</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white">5. Modifications</h2>
                        <p className="mt-4">
                            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront publiées sur cette page.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="mt-20 border-t border-white/5 py-10 text-center text-sm text-zinc-500">
                <p>© 2026 Vortex App. Tous droits réservés.</p>
            </footer>
        </div>
    );
}
