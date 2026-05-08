import type { TimelineItem } from "./Timeline";
import Badge from "../Badge";

type TimelineCardProps = {
  item: TimelineItem;
};

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <div className="bg-(--background-tile) cursor-default text-left rounded-2xl p-6 shadow-lg transition-all duration-300 border border-gray-200 dark:border-white/5 shadow-[inset 0 1px 0 rgba(255,255,255,0.03),0 0 0 1px rgba(0,0,0,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_0_0_1px_rgba(0,0,0,0.4)]">
      <p className="text-center sm:text-left text-xs text-blue-600 dark:text-cyan-500 uppercase tracking-widest mb-2">
        {item.year}
      </p>
      <h3 className="text-center sm:text-left text-lg font-semibold text-(--gray-color) dark:text-(--white-color)">
        {item.title}
      </h3>
      <p className="text-center sm:text-left text-(--secondary-color) dark:text-(--gray-color) text-xs mb-4">
        {item.location}
      </p>
      <ul className="text-sm text-(--white-color) mt-2 flex flex-col gap-4">
        {item.description.map((item: string, index) => {
          return (
            <li
              key={index}
              className="flex items-start gap-2 text-(--gray-color) dark:text-(--white-color)"
            >
              <span className="w-1.5 h-1.5 mt-[8px] rounded-full bg-(--gray-color) dark:bg-white shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap gap-2 text-xs mt-4">
        {item.technology.map((item: string, index) => {
          return (
            <li key={index}>
              <Badge>
                <span className="text-violet-500">{item}</span>
              </Badge>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
