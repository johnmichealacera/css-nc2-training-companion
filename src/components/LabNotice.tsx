export default function LabNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">
      <p className="font-semibold mb-1">Assessment-lab procedure</p>
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}
