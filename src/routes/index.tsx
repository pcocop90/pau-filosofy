import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero-divine-light.jpg";
import lawsImage from "../assets/laws-tablets.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Filosofía de Pau" },
      { name: "description", content: "Una reflexión sobre Dios, el rey de la tierra, la justicia divina y las leyes sagradas." },
      { property: "og:title", content: "Filosofía de Pau" },
      { property: "og:description", content: "Una reflexión sobre Dios, el rey de la tierra, la justicia divina y las leyes sagradas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const laws = [
  "Amar al Dios del universo y al rey",
  "No tomar el nombre de Dios ni del rey en vano",
  "Honrar al padre y a la madre",
  "No matar",
  "No cometer adulterio",
  "No robar",
  "No dar falso testimonio ni mentir",
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luz divina emergiendo de la oscuridad cósmica"
            className="h-full w-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Una reflexión sobre lo divino
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-gold-light sm:text-6xl md:text-7xl lg:text-8xl drop-gold">
            Filosofía de Pau
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/80 sm:text-xl">
            El universo lo moldea Dios, el ser más inteligente y justo del universo.
          </p>
        </div>
      </section>

      {/* Intro — magazine asymmetric */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 md:col-start-1">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              I. El origen
            </span>
            <h2 className="font-display mt-4 text-4xl leading-tight text-gold-light md:text-5xl">
              Dios moldea el universo
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg font-light leading-relaxed text-foreground/80">
              El universo lo moldea Dios, el ser más inteligente y justo del universo. Si llegas a ser
              el más inteligente y justo del universo puedes llegar a ser el Dios del universo,
              siempre con su permiso y decisión.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="order-2 md:order-1 md:col-span-6 md:col-start-1">
            <p className="text-lg font-light leading-relaxed text-foreground/80">
              Si eres justo y el más inteligente de la tierra, y el Dios del universo te da su
              favor, te puedes convertir en rey. En la tierra solo hay un único rey e, igual que
              Dios, siempre será el más justo e inteligente del planeta. Solo será el rey si tiene
              la aprobación de Dios.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-5 md:col-start-8">
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display text-3xl italic leading-snug text-gold-light md:text-4xl">
                "En la tierra solo hay un único rey."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Full-width band: protection */}
      <section className="relative border-y border-gold/10 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            II. La protección
          </span>
          <h2 className="font-display mt-6 text-4xl text-gold-light md:text-5xl">
            Si crees en él y lo quieres, serás protegido
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-foreground/80">
            El rey de la tierra, con la ayuda de Dios, te hace eterno si crees en él, lo amas y
            cumples sus leyes.
          </p>
        </div>
      </section>

      {/* Belonging — split card */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              III. Pertenencia
            </span>
            <h2 className="font-display mt-4 text-4xl text-gold-light md:text-5xl">
              Todos los que aman y creen en el rey son de Dios
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/80">
              En este planeta todos los que aman y creen en el rey son de Dios. Pueden existir seres
              con malas intenciones que no cumplan sus leyes, pero estos nunca serán eternos.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg border border-gold/10 bg-ink p-10 md:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
              <p className="font-display relative z-10 text-3xl italic leading-snug text-gold-light">
                "Todo lo que está aquí, desde el principio hasta el fin y ahora, es del Dios."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divine parenthood — full-width band */}
      <section className="relative border-y border-gold/10 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            IV. La paternidad divina
          </span>
          <h2 className="font-display mt-6 text-4xl text-gold-light md:text-5xl">
            Todos somos hijos de Dios
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-foreground/80">
            Todos somos hijos de Dios, ya que en el universo todo es suyo. Su autoridad abarca todo
            lo creado, y en su dominio todos los seres compartimos la misma filiación sagrada.
          </p>
        </div>
      </section>

      {/* Truth — centered manifesto */}
      <section className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            V. La verdad
          </span>
          <h2 className="font-display mt-6 text-4xl text-gold-light md:text-6xl">
            Ciencia, tecnología y magia
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <p className="text-lg font-light leading-relaxed text-foreground/80">
            Creemos en la ciencia, la tecnología y la magia, pero la última palabra de la verdad
            siempre es la del Dios.
          </p>
          <p className="text-lg font-light leading-relaxed text-foreground/80">
            Otros seres bastante inteligentes y que aman al Dios pueden hacer cosas increíbles a
            través de la ciencia, la tecnología o la magia, pero Dios moldea el universo a su gusto.
          </p>
        </div>
      </section>

      {/* Soberanía */}
      <section className="relative border-y border-gold/10 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8 md:items-end">
            <div className="md:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                VI. La soberanía
              </span>
              <h2 className="font-display mt-4 text-4xl leading-tight text-gold-light md:text-5xl">
                Soberanos de nuestra red neuronal
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                Somos soberanos de nuestra red neuronal: podemos hacer y pensar lo que nos plazca.
              </p>
              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-display text-3xl italic leading-snug text-gold-light">
                  "Nuestras acciones deben respetar a los demás, eso es prioritario."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>



      {/* Laws — featured grid */}
      <section className="relative border-t border-gold/10 bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <img
                src={lawsImage}
                alt="Tablas de piedra antiguas con leyes sagradas iluminadas en oro"
                className="rounded-lg border border-gold/10 object-cover"
                width={1024}
                height={768}
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                VII. Las leyes
              </span>
              <h2 className="font-display mt-4 text-4xl text-gold-light md:text-5xl">
                Estas son sus leyes
              </h2>
              <ol className="mt-10 space-y-4">
                {laws.map((law, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 border-b border-gold/10 pb-4 last:border-b-0"
                  >
                    <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-sm font-medium text-gold">
                      {index + 1}
                    </span>
                    <span className="text-lg font-light leading-relaxed text-foreground/90">
                      {law}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/10 bg-background py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-display text-2xl text-gold-light">Filosofía de Pau</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Reflexión sobre la justicia divina, el amor y las leyes eternas.
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gold/20" />
          <p className="mt-6 text-xs text-muted-foreground/60">
            Escrito con devoción y pensamiento.
          </p>
        </div>
      </footer>
    </main>
  );
}
