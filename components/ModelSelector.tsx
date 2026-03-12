import { MODELS, type ModelId } from "@/lib/models";

type Props = {
  value: ModelId;
  onChange: (value: ModelId) => void;
  label?: string;
};

export function ModelSelector({ value, onChange, label = "Model" }: Props) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-300">
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as ModelId)}
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
      >
        {MODELS.map((model) => (
          <option key={model.id} value={model.id} className="bg-slate-950">
            {model.name} · {model.badge}
          </option>
        ))}
      </select>
    </label>
  );
}
