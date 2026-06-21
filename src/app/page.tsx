import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Clock,
  Tag,
  Users,
  Truck,
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  ChevronRight,
  Phone,
  Factory,
  Wrench,
  Award,
} from "lucide-react";
import { companyInfo } from "@/data/company";
import {
  getPublicCategories,
  getPublicFeaturedProducts,
  getPublicNewArrivals,
} from "@/lib/publicProducts";
import { ReactElement } from "react";
import { getPublicProjectImages } from "@/lib/publicGalleries";
import { getRecentPublishedBlogs, parseBlogImages } from "@/lib/publicBlogs";
import ExpandableGallery from "@/components/ExpandableGallery";
import InquiryForm from "@/components/InquiryForm";
import EnquiryButton from "@/components/EnquiryButton";
import RatingSummary from "@/components/RatingSummary";
import React from "react";

export const dynamic = "force-dynamic";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={28} />,
  clock: <Clock size={28} />,
  tag: <Tag size={28} />,
  users: <Users size={28} />,
  truck: <Truck size={28} />,
  calendar: <Calendar size={28} />,
};

export default async function HomePage() {
  const [
    categories,
    newArrivals,
    featuredProducts,
    projectImages,
    recentBlogs,
  ] = await Promise.all([
    getPublicCategories(),
    getPublicNewArrivals(8),
    getPublicFeaturedProducts(8),
    getPublicProjectImages(),
    getRecentPublishedBlogs(3),
  ]);

  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-gray-50">
        {/* BACKGROUND: Kept as requested */}
        <div className="absolute inset-0">
          <Image
            src="/images/herobg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT: Headline + USPs (Placement Preserved) */}
            <div className="text-white pt-2 sm:pt-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm mb-6 text-white font-medium">
                <Award size={16} className="text-accent" />
                <span>Trusted by {companyInfo.clients} Businesses</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
                Leading Supplier of{" "}
                <span className="text-accent">Industrial PPR-C</span> Piping
                Solutions
              </h1>
              <ul className="space-y-3 mb-8">
                {[
                  "Trusted by 500+ Businesses Nationwide",
                  "DIN 16962 Quality Assured Products",
                  "PAN India Supply & Installation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-100 font-medium"
                  >
                    <CheckCircle size={20} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Quick Enquiry Form + buttons (Placement Preserved) */}
            <div>
              <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl p-5 sm:p-7 rounded-3xl">
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-gray-900">
                    Get a Free Quote
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Fill in your requirement and we&apos;ll respond within 2
                    hours.
                  </p>
                </div>
                <InquiryForm compact />
                <p className="text-center text-xs text-gray-400 mt-4 uppercase tracking-wider font-medium">
                  Privacy Protected
                </p>
              </div>

              {/* Quick Contact Buttons (Placement Preserved) */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
                <a
                  href={`tel:${companyInfo.contact.phoneHref}`}
                  className="order-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 sm:px-6 py-3 rounded-xl text-sm font-bold transition-all flex-1 sm:flex-none shadow-lg shadow-primary/20"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="order-2 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb858] text-white px-5 sm:px-6 py-3 rounded-xl text-sm font-bold transition-all flex-1 sm:flex-none shadow-lg shadow-[#25D366]/20"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <Link
                  href="/products"
                  className="order-3 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-5 sm:px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg w-full sm:w-auto"
                >
                  View Products <ArrowRight size={16} />
                </Link>
              </div>

              {/* Rating badges (Placement Preserved) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 bg-white/60 p-3 rounded-xl backdrop-blur-sm border border-white">
                <a
                  href={companyInfo.social.indiamart}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4].map((s) => (
                      <Star key={s} size={16} className="fill-current" />
                    ))}
                    <Star size={16} className="text-gray-300" />
                  </div>
                  <span className="text-gray-900 text-sm font-bold">
                    4.0 on IndiaMART
                  </span>
                </a>
                <div className="text-gray-900 text-sm font-bold flex items-center gap-1">
                  <Factory size={14} /> Since 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="py-14 sm:py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* LEFT: Text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-0.5 bg-primary" />
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  About Company
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for{" "}
                <span className="text-primary">
                  Industrial Piping Solutions
                </span>
              </h2>

              <div className="relative mb-6 h-[280px] rounded-2xl overflow-hidden shadow-lg lg:hidden">
                <Image
                  src="/images/aboutus.png"
                  alt="About Radiatech Electra"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.about.short}
              </p>

              <div className="space-y-3 mb-8">
                {companyInfo.specializations.slice(0, 4).map((spec) => (
                  <div key={spec} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary shrink-0" />
                    <span className="text-gray-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1">
                    Mission
                  </div>
                  <p className="text-xs text-gray-700">
                    {companyInfo.about.mission}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1">
                    Vision
                  </div>
                  <p className="text-xs text-gray-700">
                    {companyInfo.about.vision}
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="self-start inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>

            {/* RIGHT: Image (Original size/position) */}
            <div className="relative hidden h-full min-h-[400px] lg:block">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutus.png"
                  alt="About Radiatech Electra"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-6 text-white shadow-xl rounded-2xl hidden md:block">
                <div className="text-2xl font-bold">Since</div>
                <div className="text-3xl font-extrabold text-white">2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT CATEGORIES ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Our Collection
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive range of PPR-C pipes, fittings, and industrial
              solutions meeting international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.slug}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <Link
                  href={`/products/${cat.slug}`}
                  className="relative h-60 overflow-hidden block"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                    <span className="text-white/80 text-sm font-medium">
                      {cat.productCount} Available Products
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <Link
                      href={`/products/${cat.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-3 rounded-xl text-xs font-bold transition-all"
                    >
                      View <ChevronRight size={14} />
                    </Link>
                    <EnquiryButton
                      productName={cat.name}
                      className="flex-[1.5] inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-900 hover:border-primary hover:text-primary px-4 py-3 rounded-xl text-xs font-bold transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== NEW ARRIVALS ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Latest Additions
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our latest additions to the product range, featuring
              innovative designs and enhanced performance.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <Link
                  href={`/products/${product.categorySlug}/${product.id}`}
                  className="relative h-40 sm:h-56 overflow-hidden block"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-[10px] font-extrabold px-3 py-1 rounded-full tracking-widest uppercase">
                      New
                    </span>
                  </div>
                </Link>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <Link
                    href={`/products/${product.categorySlug}/${product.id}`}
                    className="font-bold text-gray-900 text-sm mb-4 line-clamp-2 group-hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>

                  <div className="mt-auto grid grid-cols-1 gap-2">
                    <Link
                      href={`/products/${product.categorySlug}/${product.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                    >
                      View Product
                    </Link>
                    <EnquiryButton
                      productName={product.name}
                      label="Ask for Details"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-900 hover:border-primary hover:text-primary px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Our Best
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our most popular PPR-C piping products trusted by industries
              across India.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <Link
                  href={`/products/${product.categorySlug}/${product.id}`}
                  className="relative h-40 sm:h-56 overflow-hidden block"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full tracking-widest uppercase">
                      Featured
                    </span>
                  </div>
                </Link>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {product.category}
                  </span>
                  <Link
                    href={`/products/${product.categorySlug}/${product.id}`}
                    className="font-bold text-gray-900 text-sm mb-4 mt-1 line-clamp-2 group-hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>

                  <div className="mt-auto grid grid-cols-1 gap-2">
                    <Link
                      href={`/products/${product.categorySlug}/${product.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                    >
                      View Product
                    </Link>
                    <EnquiryButton
                      productName={product.name}
                      label="Ask for Details"
                      className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-900 hover:border-primary hover:text-primary px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Explore All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Our Advantage
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We combine reliable sourcing, industry expertise, and
              customer-centric service to deliver the best piping solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {companyInfo.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {iconMap[item.icon] ? (
                    React.cloneElement(
                      iconMap[
                        item.icon as keyof typeof iconMap
                      ] as React.ReactElement<Record<string, unknown>>,
                      { size: 32 },
                    )
                  ) : (
                    <Shield size={32} />
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-white rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-white rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.statsItems.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-accent">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WORK PROCESS ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Work Process
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From consultation to installation, we follow a streamlined,
              professional process to ensure quality delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your unique requirements, site conditions, and specifications.",
                icon: <Phone size={32} />,
              },
              {
                step: "02",
                title: "Design & Planning",
                desc: "Engineering the optimal solution with precise material selection and layout.",
                icon: <Wrench size={32} />,
              },
              {
                step: "03",
                title: "Quality Sourcing",
                desc: "Sourcing certified PPR-C pipes and fittings aligned with DIN 16962 standards.",
                icon: <Factory size={32} />,
              },
              {
                step: "04",
                title: "Installation",
                desc: "Professional execution with rigorous quality assurance and timely delivery.",
                icon: <Truck size={32} />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step Indicator */}
                <div className="absolute top-6 left-6 text-2xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJECT SHOWCASE ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise in industrial piping installations across
              process industries.
            </p>
          </div>

          <ExpandableGallery images={projectImages} initialLimit={6} />
        </div>
      </section>

      {/* ==================== APPLICATIONS ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="applications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Industries Served
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Fields of Application
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our PPR-C piping systems serve diverse industries with reliable,
              durable, and safe piping solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hot & Cold Water Supply",
                items: [
                  "Chilling Plants",
                  "Process Cooling Lines",
                  "Cooling Towers",
                  "Condensor Units",
                  "Data Center Cooling",
                ],
                color: "border-blue-200",
              },
              {
                title: "Clean Water Supply",
                items: [
                  "Drinking Water",
                  "Plumbing Application",
                  "DM Water",
                  "Solar Water Heater",
                  "Liquid Food Supply",
                ],
                color: "border-green-200",
              },
              {
                title: "Chemical Supply",
                items: [
                  "Chemical Plants",
                  "Effluent Treatment",
                  "Sewage Treatment",
                  "Water Treatment",
                ],
                color: "border-orange-200",
              },
              {
                title: "Air Applications",
                items: [
                  "Compressed Air",
                  "Nitrogen Air",
                  "Oxygen Air",
                  "Vacuum Line",
                ],
                color: "border-purple-200",
              },
            ].map((app) => (
              <div
                key={app.title}
                className={`p-8 bg-white border-t-[6px] ${app.color} rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300`}
              >
                <h3 className="font-extrabold text-lg text-gray-900 mb-6">
                  {app.title}
                </h3>
                <ul className="space-y-3">
                  {app.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-600 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RATINGS & REVIEWS ==================== */}
      <section className="py-20 sm:py-28 bg-gray-50" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                IndiaMART Verified
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Ratings & Reviews
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              See what our customers say about us on IndiaMART.
            </p>
          </div>

          <RatingSummary />
        </div>
      </section>

      {/* ==================== TRUSTED CLIENTS ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Our Partners
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Trusted by{" "}
              <span className="text-primary">
                Industrial & Process Industries
              </span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our clients include some of the most respected names in Indian
              industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {companyInfo.clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-32 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={140}
                  height={60}
                  className="max-h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BLOG / INSIGHTS ==================== */}
      <section className="py-20 sm:py-28 bg-white" id="blogs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Latest News
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Industry Insights & Updates
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Stay informed with the latest news, technical guides, and industry
              trends in PPR-C piping solutions.
            </p>
          </div>

          {recentBlogs.length === 0 ? (
            <div className="border border-dashed border-gray-200 bg-gray-50 rounded-3xl px-5 py-16 text-center text-sm text-gray-500">
              No blog posts published yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentBlogs.map((post) => {
                const thumbnail =
                  post.coverImage ||
                  parseBlogImages(post.images)[0] ||
                  "/images/projects/WhatsApp Image 2026-04-17 at 12.17.21 PM.jpeg";
                return (
                  <Link
                    key={post.id}
                    href={`/blogs/${post.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={thumbnail}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                        {new Date(
                          post.publishedAt || post.createdAt,
                        ).toLocaleDateString("en-IN", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto text-primary text-sm font-bold flex items-center gap-2">
                        Read Article <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              View All Articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CTA / INQUIRY SECTION ==================== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/sendenquiry.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                Ready to Upgrade Your{" "}
                <span className="text-accent">Piping System?</span>
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get a free consultation and quote for your industrial piping
                requirements. Our experts will help you find the perfect
                solution.
              </p>
              <div className="space-y-4">
                {[
                  "Free site assessment and consultation",
                  "Competitive pricing with no hidden costs",
                  "Quick response within 24 hours",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <div className="p-1 rounded-full bg-accent/20">
                      <CheckCircle size={16} className="text-accent" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Your Inquiry
              </h3>
              <InquiryForm compact onDark />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
