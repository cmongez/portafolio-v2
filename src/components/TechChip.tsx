import { cn } from "@/lib/utils";

interface TechChipProps {
  children: string;
  className?: string;
}

export function TechChip({ children, className }: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide",
        "rounded-full border border-neutral-700/60 bg-neutral-800/50 text-neutral-300",
        "transition-all duration-300 hover:border-neutral-600 hover:text-neutral-100 hover:bg-neutral-800/80",
        "shrink-0 cursor-default select-none",
        "shadow-sm hover:shadow-md hover:shadow-neutral-900/50",
        className
      )}
    >
      {children}
    </span>
  );
}

interface TechChipsProps {
  items: string[];
  className?: string;
}

export function TechChips({ items, className }: TechChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <TechChip key={item}>{item}</TechChip>
      ))}
    </div>
  );
}
