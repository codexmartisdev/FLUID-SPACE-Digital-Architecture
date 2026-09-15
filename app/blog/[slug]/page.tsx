import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleIndex = articles.findIndex((a) => a.slug === slug);

  if (articleIndex === -1) {
    notFound();
  }

  const article = articles[articleIndex];
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="w-full">
      <article className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#faf9f7]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-500 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para o Blog</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase text-neutral-400 mb-6">
            <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] tracking-wider">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-900 leading-[1.15] mb-8">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-light leading-relaxed mb-12 border-l-2 border-black/20 pl-6">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between py-6 border-y border-black/10 mb-12">
            <div className="text-[#191a1d]">
              <BrandLogo
                symbolClassName="h-9 w-9"
                nameClassName="text-lg"
                subtitleClassName="text-[8px]"
              />
            </div>

            <div className="text-xs font-mono text-neutral-400 uppercase">
              Caderno de Ideias
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-200 mb-12 shadow-xs">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-base md:text-lg text-neutral-700 font-light leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {article.quotes && article.quotes.length > 0 && (
              <blockquote className="my-10 p-8 rounded-2xl bg-white border border-black/5 text-xl md:text-2xl font-light text-neutral-900 italic leading-snug">
                &ldquo;{article.quotes[0]}&rdquo;
              </blockquote>
            )}

            {article.keyPoints && (
              <div className="my-10 p-8 rounded-2xl bg-white border border-black/5">
                <h3 className="font-mono text-xs tracking-wider uppercase text-neutral-400 mb-4">
                  Fundamentos de Aplicação
                </h3>
                <ul className="space-y-3">
                  {article.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </article>

      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl md:text-2xl font-light text-neutral-900">
              Continue lendo
            </h3>
            <Link
              href="/blog"
              className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
            >
              Ver todos os artigos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex flex-col p-6 rounded-2xl bg-[#faf9f7] border border-black/5 hover:border-black/15 transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-200 mb-4">
                  <Image
                    src={rel.cover}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-104"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                  {rel.category} · {rel.date}
                </span>
                <h4 className="text-lg font-normal text-neutral-900 group-hover:text-black mb-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-neutral-600 font-light line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        sectionNumber="05"
        title="Quer aplicar estes conceitos em seu projeto?"
        subtitle="Vamos conversar sobre as melhores soluções para o seu espaço."
        buttonText="ENTRAR EM CONTATO"
        buttonHref="/contato"
      />
    </div>
  );
}
