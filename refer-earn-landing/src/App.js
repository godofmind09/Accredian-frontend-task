import React,{ useState } from "react";
import FAQSection from "./Components/FAQSection";
import Header from "./Components/Header";
import HeroSection from "./Components/Herosection";
import HowToRefer from "./Components/HowToRefer";
import ReferralBenefits from "./Components/ReferralBenefits";
import FormModal from "./Components/FormModal";
import SupportSection from "./Components/Support";
import Footer from "./Components/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div>
      <Header />
      <HeroSection onReferClick={handleOpenModal} />
      <FormModal open={isModalOpen} onClose={handleCloseModal} />
      <HowToRefer />
      <ReferralBenefits />
      <FAQSection />
      <SupportSection />
      <Footer />
      
    </div>
  );
}

export default App;
