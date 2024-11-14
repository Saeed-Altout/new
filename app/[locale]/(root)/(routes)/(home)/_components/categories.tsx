import { cn } from "@/lib/utils";

import { Heading } from "@/components/ui/heading";
import { categories } from "@/constants";

export const Categories = () => {
  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label="Overview" title="Top Categories" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-[5px] p-4 space-y-2 hover:-translate-y-2 duration-300 ease-in-out"
            >
              <h3
                className={cn(
                  "font-medium leading-8 relative before:absolute before:h-full before:w-1 before:content-[''] before:bg-primary before:-left-4",
                  index == 0 && "before:bg-[#00D8C0]",
                  index == 1 && "before:bg-[#FF8C90]",
                  index == 2 && "before:bg-[#00A7DC]",
                  index == 3 && "before:bg-[#A686F1]",
                  index == 4 && "before:bg-[#C243FE]",
                  index == 5 && "before:bg-[#FDC511]",
                  index == 6 && "before:bg-[#ED80CA]",
                  index == 7 && "before:bg-[#97C680]"
                )}
              >
                {category.name}
              </h3>
              <p className="text-sm font-normal text-[#999999]">
                {category.courses} Courses
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
