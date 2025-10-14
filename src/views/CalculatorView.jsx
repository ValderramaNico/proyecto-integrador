import Calculator from "../components/Calculator/Calculator";
import ContactForm from "../components/Calculator/ContactForm";
import ImageHeader from "../components/Calculator/ImageHeader";
import ImageBottom from "../components/Calculator/ImageBottom";

const CalculatorView = () => {
  return (
    <div>
      <ImageHeader />
      <Calculator />
      <ImageBottom />
      <ContactForm />
    </div>
  );
};

export default CalculatorView;
