export default function Header() {
  return (
    <div className="mx-4 my-6">
      <div className="flex justify-between items-center bg-white rounded-full px-6 py-3 shadow-sm">
        <span className="font-medium"> Honey</span>
        <div className="flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
