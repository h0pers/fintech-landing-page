import { cva } from "class-variance-authority";

export { default as Review } from "./Review.vue";
export { default as reviews } from "./reviews.js";

export const reviewsVariants = cva(
  "rounded-[20px] px-[47px] py-9 space-y-7",
  {
    variants: {
      variant: {
        default:
          "bg-white [&>p,h4]:text-[#161919] [&>h5]:text-[#454747]",
        active:
          "bg-[#004852] [&>p,h4]:text-white [&>div,h5]:text-[#A1A1A1]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
