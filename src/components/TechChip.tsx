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
        "rounded-md border border-neutral-800 bg-neutral-900/50 text-neutral-400",
        "transition-colors duration-300 hover:border-neutral-600 hover:text-neutral-200",
        "shrink-0 cursor-default select-none",
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
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <TechChip key={item}>{item}</TechChip>
      ))}
    </div>
  );
}
