import { TiZoom } from "react-icons/ti";

export const EmptySearch = () => {
  return (
    <div className="py-20 space-y-4 flex items-center flex-col">
      <TiZoom className="text-5xl" />
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold text-black">No results found</h2>
        <p className="text-sm text-gray-500">Try searching for something else</p>
      </div>
    </div>
  )
}
