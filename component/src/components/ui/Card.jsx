export default function Card ({data}){
    return (
 <div
                className="animate-rotate-border bg-conic/[from_var(--border-angle)] from-black via-[#52D3D8] 0 rounded-xl  overflow-hidden hover:shadow-lg hover:shadow-[#52D3D8] transition hover:-translate-y-3 duration-500 ease-in-out p-px"
              >
                <img src={data.img} alt={data.title} className="w-full h-80 object-cover" />
                <div className="p-6 bg-neutral-900 rounded-b-xl h-40">
                  <h3 className="text-xl font-semibold mb-2 text-white">{data.title}</h3>
                  <p className="text-gray-400">{data.desc}</p>
                </div>
              </div>
    )
}