export function extraItems(content: object, key: string): string[] | undefined {
  const value = (content as Record<string, unknown>)[key]
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : undefined
}

export default function ExtraNotes({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
