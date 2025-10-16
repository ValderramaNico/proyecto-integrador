import Calculator from "../components/Calculator/Calculator";
import ContactForm from "../components/Calculator/ContactForm";
import ImageHeader from "../components/Calculator/ImageHeader";

const CalculatorView = () => {
  return (
    <div>
      <ImageHeader />
      <Calculator />
      <ContactForm />
    </div>
  );
};

export default CalculatorView;
