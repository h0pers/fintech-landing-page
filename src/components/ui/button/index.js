import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#00B512] text-neutral-50 leading-[150%] rounded-full shadow-xs hover:bg-[#00B512]/90",
        outline:
          "border border-[#00B512] text-black leading-[150%] rounded-full hover:bg-black/5",
        secondaryOutline:
          "border border-[#DCDCDC] rounded-[12px] text-[#DCDCDC] hover:bg-[#DCDCDC]/25",
        label:
          "gap-1 uppercase font-medium text-sm text-neutral-700 rounded-full border border-[#EAECF0] bg-[#F9FAFB]",
        labelSecondary:
          "bg-neutral-100/18 uppercase rounded-full gap-1 text-neutral-50 font-medium text-sm leading-[150%]",
      },
      size: {
        default: "p-6 h-13",
        md: "p-2.5 px-6 h-12",
        sm: "py-1.5 px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


export const sideIconVariants = cva(
  'transform translate-x-3/5 -translate-y-1/2 absolute right-0 top-1/2 transition-colors',
  {
    variants: {
      variant: {
        default:
          "bg-white rounded-full text-neutral-700 group-hover:bg-neutral-200",
        outline:
          "text-white bg-[#00B512] rounded-full",
      },
      size: {
        default: "size-13",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
