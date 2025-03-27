
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FiltersProps {
  filters: {
    label: string;
    options: { value: string; label: string }[];
    defaultValue?: string;
  }[];
}

export function Filters({ filters }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {filters.map((filter, index) => (
        <Select key={index} defaultValue={filter.defaultValue}>
          <SelectTrigger className="min-w-[180px] bg-slate-800/70 border-slate-700 text-white">
            <SelectValue placeholder={filter.label} />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-slate-700 text-white">
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
}
