import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, MessageSquare, CheckCircle2 } from 'lucide-react';
import { MOCK_PRODUCTS, EXTERNAL_LINKS, SOCIAL_LINKS, BRAND_STATEMENT, STRATEGIC_WEALTH_IMAGE } from '../constants';
import ProductCard from '../components/ProductCard';
import BlogPreview from '../components/BlogPreview';

const pillars = [
  {
    title: 'Real Estate',
    desc: 'Property opportunities presented with clear information on location, ownership, pricing and payment structure.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    path: '/products',
  },
  {
    title: 'Investment Solutions',
    desc: 'Investment opportunities explained clearly so clients can understand the proposition before making a decision.',
    image: STRATEGIC_WEALTH_IMAGE,
    path: '/investment-solutions',
  },
  {
    title: 'Strategic Services',
    desc: 'Practical business and technology support designed around the needs of individuals and organisations.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    path: '/services',
  },
];

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 3);

  return (
    <main className="bg-white text-[#111111]">
      <section className="relative isolate overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=160&w=2000"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/95 to-[#111111]/70" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#C8A24A]">The Gateway to Opportunity</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              A clearer path to trusted opportunity.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              {BRAND_STATEMENT}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#F4F4F4] focus:outline-none focus:ring-2 focus:ring-[#C8A24A] focus:ring-offset-2 focus:ring-offset-[#111111]">
                Explore opportunities <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C8A24A] focus:ring-offset-2 focus:ring-offset-[#111111]">
                Talk to VannieJay
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#777777]">What we do</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Solutions built around the problem.</h2>
          <p className="mt-5 text-lg leading-8 text-[#777777]">VannieJay connects people with opportunities and services across our growing business ecosystem.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="group overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C8A24A]/60 hover:shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
              <div className="h-52 overflow-hidden bg-[#F4F4F4]">
                <img src={pillar.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.02em]">{pillar.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#777777]">{pillar.desc}</p>
                <Link to={pillar.path} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#C8A24A] focus:outline-none focus:ring-2 focus:ring-[#C8A24A]">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#E5E5E5] bg-[#F4F4F4] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#777777]">Featured opportunities</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Worth understanding before you decide.</h2>
              <p className="mt-4 text-lg leading-8 text-[#777777]">Browse current opportunities and review the details that matter.</p>
            </div>
            <Link to="/products" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#111111] bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[#111111] hover:text-white">View all</Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#777777]">Why VannieJay</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">Trust is built through clarity.</h2>
            <p className="mt-6 text-lg leading-8 text-[#777777]">We aim to make complex opportunities easier to understand, evaluate and act on.</p>
            <div className="mt-10 space-y-7">
              {[
                ['Clear information', 'We prioritise the details clients need to make informed decisions.'],
                ['Customer satisfaction', 'Every engagement is designed around the client and the problem to be solved.'],
                ['Long-term thinking', 'We are building a multi-sector African business with a long-term view.'],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#C8A24A]" size={22} />
                  <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-[#777777]">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[#111111]">
            <img src={STRATEGIC_WEALTH_IMAGE} alt="Strategic investment" className="aspect-[4/3] w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A24A]">VannieJay</p><p className="mt-2 text-2xl font-semibold text-white">The Gateway to Opportunity.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#111111] px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C8A24A]">Insights</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Make better decisions with better information.</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">Explore our latest market perspectives, investment education and practical insights.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/resources" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#111111]">Explore insights <ArrowRight size={17} /></Link>
              <a href={EXTERNAL_LINKS.podcast} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"><PlayCircle size={18} /> Listen to the podcast</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5E5E5] bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#777777]">Start a conversation</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Tell us what you are trying to solve.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#777777]">Whether you are exploring property, an investment opportunity or another service, start with the problem.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#111111] px-6 py-3 text-sm font-semibold text-white hover:bg-[#333333]"><MessageSquare size={18} /> WhatsApp VannieJay</a>
            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#111111] px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-[#F4F4F4]">Contact us</Link>
          </div>
        </div>
      </section>
      <BlogPreview />
    </main>
  );
};

export default Home;
