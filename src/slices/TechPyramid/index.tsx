import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SkillDataProvider from "./SkillDataProvider";
import { Backend_skill, Frontend_skill, IT_sec, Skill_main } from "@/constants";
import Heading from "@/components/Heading";

/**
 * Props for `TechPyramid`.
 */
export type TechPyramidProps = SliceComponentProps<Content.TechPyramidSlice>;

/**
 * Component for "TechPyramid" Slices.
 */
const TechPyramid = ({ slice }: TechPyramidProps): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 py-20"
      style={{ transform: "scale(0.9" }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_main.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {IT_sec.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section >
  );
};

export default TechPyramid;
