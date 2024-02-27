import Heading from "./Heading";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="px-4 py-12 mt-10 bg-bg-shade md:px-12">
      <div className="container mx-auto">
        <Heading title="Testimonials" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin."
            author="John Doe"
            position="Patient"
          />
          <TestimonialCard
            quote="Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            author="Jane Smith"
            position="Patient"
          />
          <TestimonialCard
            quote="Nulla accumsan sollicitudin elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            author="David Johnson"
            position="Patient"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
