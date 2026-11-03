import ContactForm from "@/components/contact-form";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "ar" ? "الوظائف — انضم إلينا | الدولية" : "Careers — Join us | AL DAWLIA" };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  const ar = locale === "ar";
  return (
    <main className="bg-[#FCFCF7]" dir={ar ? "rtl" : "ltr"}>
      <section className="bg-slate-950 pb-16 pt-40 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-bold text-orange-400">{ar ? "الوظائف" : "Careers"}</p>
          <h1 className="mt-5 text-4xl font-black md:text-6xl">{ar ? "انضم إلينا" : "Join our team"}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">{ar ? "كن جزءًا من فريق الدولية لخامات البلاستيك. شاركنا خبراتك وطموحاتك، وسنتواصل معك عند توفر فرصة تناسب تخصصك." : "Be part of AL DAWLIA. Share your experience and ambitions, and we will contact you when an opportunity matches your skills."}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-lg md:p-10 lg:col-span-2">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{ar ? "طلب الانضمام إلى فريقنا" : "Apply to join us"}</h2>
          <ContactForm locale={ar ? "ar" : "en"} careers />
        </div>
        <aside className="h-fit rounded-3xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">{ar ? "خبرتك تصنع فرقًا" : "Your experience matters"}</h2>
          <p className="mt-5 leading-8 text-slate-300">{ar ? "عرّفنا بتخصصك وخبرتك في الإنتاج، أو الجودة، أو الصيانة، أو المبيعات، أو المجالات الإدارية. نرحب بالتعرف على الكفاءات الراغبة في العمل معنا." : "Tell us about your background in production, quality, maintenance, sales or administration. We welcome interest from people who would like to work with us."}</p>
          <p className="mt-6 text-sm leading-7 text-slate-300">{ar ? "هذا النموذج للتقديم العام، ولا يعني وجود وظيفة شاغرة حاليًا." : "This is a general application form and does not indicate a current vacancy."}</p>
          <a href="mailto:info@aldawlia-plastic.com" className="mt-6 block break-all text-orange-300" dir="ltr">info@aldawlia-plastic.com</a>
        </aside>
      </section>
    </main>
  );
}
