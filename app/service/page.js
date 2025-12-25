import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";

export const metadata = {
  title: "Our Services",
  description:
    "Shiv Shakti Packers & Movers offers complete relocation services including home shifting, office shifting, packing & unpacking, loading & unloading, insurance and delivery pack services across India.",
  keywords: [
    "Packers and Movers Services",
    "Home Shifting Services",
    "Office Shifting Services",
    "Packing and Unpacking",
    "Loading Unloading Services",
    "Insurance Services",
    "Delivery Pack Services",
  ],
  robots: "index, follow",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="Popular Services" />
      <GrowBusiness paddingTop={9} />
      <Service2 paddingTop={9} title="Shifting Solutions" />
      <Cta />
      <Faq />
    </NextLayout>
  );
};
export default page;
