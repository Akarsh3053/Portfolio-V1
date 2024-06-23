import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      <Heading>
        {slice.primary.heading}
      </Heading>
      <div className="visme_d"
        data-title="Clean Contact Form"
        data-url="x401ry90-clean-contact-form"
        data-domain="forms" data-full-page="false"
        data-min-height="500px" data-form-id="77681">
      </div>
      <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
    </Bounded>
  );
};

export default Contact;
