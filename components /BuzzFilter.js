export default function BuzzFilter({ value, onChange }) {
  return (
    <div className="space-x-2 my-2">
      <button onClick={() => onChange("low")} className={value === "low" ? "underline" : ""}>Låg</button>
      <button onClick={() => onChange("medium")} className={value === "medium" ? "underline" : ""}>Medel</button>
      <button onClick={() => onChange("high")} className={value === "high" ? "underline" : ""}>Hög</button>
    </div>
  );
}
