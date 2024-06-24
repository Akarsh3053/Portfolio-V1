import Bounded from "@/components/Bounded";
import ContactForm from "@/components/ContactForm";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Shapes } from "../Hero/Shapes";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg" className="-mt-10">
        {slice.primary.heading}
      </Heading>
      <div className="md:grid md:grid-cols-2 gap-4 flex flex-col-reverse">
        <ContactForm />
        <Shapes />
      </div>
    </Bounded>
  );
};

export default Contact;
