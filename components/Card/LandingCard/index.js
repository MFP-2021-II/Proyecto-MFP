export default function LandingCard({ titulo, children }) {
  return (
    <div className="bg-[#EFC4AE] mb-2 text-center p-3 rounded-lg max-w-sm md:max-w-md">
      <h3 className="text-[#C36C7D] font-bold text-lg pb-2">
        {titulo}
      </h3>
      <p className="text-base">
        {children}
      </p>
    </div>
  )
}