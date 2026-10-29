import { Target, RefreshCw, Truck, ShieldCheck, Clock, Handshake } from "lucide-react";
import type { Locale } from "@/lib/content";

const content = {
  ar: {
    title: "رسالتنا، وقيمنا", mission: "رسالتنا", values: "قيمنا",
    missions: [
      ["حلول دقيقة لكل عميل", "تقديم حلول تغليف ومنتجات بلاستيكية متكاملة بمواصفات فنية دقيقة تتطابق تمامًا مع المتطلبات التشغيلية لكل عميل، مع تطبيق معايير فحص صارمة تضمن اتساق كل الدفعات الإنتاجية لتلبية احتياجات مختلف القطاعات الحالية والمستقبلية."],
      ["تطوير مستمر", "التحديث المستمر لخطوط الإنتاج وتقنيات البثق لزيادة الكفاءة، مع الاستمرار الدائم في تطوير خامات التغليف."],
      ["إنتاج يدعم استمراريتك", "إدارة خطوط الإنتاج بكفاءة عالية تضمن تسليم الطلبيات في مواعيدها المحددة لحماية خطوط إنتاج العملاء من التوقف."],
    ],
    commitments: [
      ["الاهتمام بالجودة", "نحرص على ثبات جودة ومواصفات منتجاتنا في كل طلب، مع الالتزام بمعايير صارمة خلال عمليات التصنيع لأننا ندرك أن استقرار الخامة يمثل جزءًا أساسيًا من استقرار إنتاج عملائنا."],
      ["الالتزام بالمواعيد", "نلتزم بمواعيد التوريد المتفق عليها، إدراكًا منا لأهمية توافر الخامات في الوقت المناسب لاستمرار عمليات الإنتاج، ونتعامل مع كل طلب بمسؤولية لضمان انتظام التوريد وتقليل مخاطر التأخير على عملائنا."],
      ["العميل أولًا", "نضع احتياجات عملائنا في مقدمة أولوياتنا، ونحرص على فهم متطلباتهم وتقديم حلول تتوافق مع مواصفاتهم وطبيعة أعمالهم. كما نولي التواصل والمتابعة وحل المشكلات اهتمامًا أساسيًا، وفي حال حدوث أي خطأ من جانبنا، نتحمل المسؤولية ونعمل على معالجته بسرعة وفعالية، بما يدعم رضا العميل واستمرارية أعماله."],
    ],
  },
  en: {
    title: "Our Mission & Values", mission: "Our Mission", values: "Our Values",
    missions: [
      ["Precision for Every Customer", "Provide integrated packaging solutions and plastic products with precise technical specifications that match each customer's operational requirements. Apply rigorous inspection standards to ensure consistent production batches for the present and future needs of different sectors."],
      ["Continuous Development", "Continuously upgrade production lines and extrusion technologies to improve efficiency, while constantly developing our packaging materials."],
      ["Keeping Your Production Moving", "Manage production lines efficiently to deliver orders on schedule and protect our customers' production lines from interruption."],
    ],
    commitments: [
      ["Commitment to Quality", "We maintain consistent product quality and specifications in every order, following strict manufacturing standards because reliable materials are essential to stable production for our customers."],
      ["On-Time Delivery", "We honour agreed delivery schedules because timely material supply is essential to continuous production. We handle every order responsibly to maintain reliable supply and reduce the risk of delays for our customers."],
      ["Customers First", "We put our customers' needs first, understand their requirements and provide solutions suited to their specifications and business. Communication, follow-up and problem-solving are central to our work. If we make a mistake, we take responsibility and address it quickly and effectively to support customer satisfaction and business continuity."],
    ],
  },
};
const icons = [Target, RefreshCw, Truck, ShieldCheck, Clock, Handshake];
export default function MissionValues({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <section id="mission-values" aria-labelledby="mission-values-title" className="bg-slate-950 py-16 text-white md:py-20">
    <div className="mx-auto max-w-7xl px-6">
      <h2 id="mission-values-title" className="text-3xl font-black md:text-5xl">{t.title}</h2>
      {[{ title: t.mission, rows: t.missions, offset: 0 }, { title: t.values, rows: t.commitments, offset: 3 }].map(group => <div key={group.title} className="mt-10">
        <h3 className="mb-6 text-2xl font-bold text-orange-300">{group.title}</h3>
        <div className="grid gap-6 lg:grid-cols-3">{group.rows.map(([title, text], i) => {
          const Icon = icons[group.offset+i];
          return <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7">
            <Icon aria-hidden="true" className="mb-5 h-8 w-8 text-orange-300" />
            <h4 className="text-xl font-bold">{title}</h4><p className="mt-4 leading-8 text-slate-200">{text}</p>
          </article>;
        })}</div>
      </div>)}
    </div>
  </section>;
}
