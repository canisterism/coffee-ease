import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section className="flex flex-col justify-center items-center my-4 p-4">
        <span className="text-2xl font-extrabold">珈琲豆は鮮度が命。</span>
        <p className="m-3 text-gray-500 text-sm">
          焙煎の間15～20分お待ちいただきますが、煎りたての新鮮な豆をお持ち帰りいただけます。
          煎りたてだからこそ味わえる味・香りとも最高の珈琲で至福のひとときをどうぞ。
        </p>
      </section>
      <section className="flex flex-col justify-center items-center my-4 p-4">
        <h2 className="text-2xl font-extrabold">店舗情報</h2>
        <div className="flex content-between">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3243.640683633183!2d139.544247!3d35.611929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f0be9ab441bd%3A0xb600c67a4c894b17!2z54-I55Cy6LGG54SZ54WO44Kk44O844K6!5e0!3m2!1sja!2sjp!4v1678104344689!5m2!1sja!2sjp"
            className="w-1/2"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="m-3 text-gray-500 text-sm">
            焙煎の間15～20分お待ちいただきますが、煎りたての新鮮な豆をお持ち帰りいただけます。
            煎りたてだからこそ味わえる味・香りとも最高の珈琲で至福のひとときをどうぞ。
          </p>
        </div>
      </section>
    </main>
  );
}
