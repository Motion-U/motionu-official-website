export default function MembershipPerkCard({ title, description }) {
    return (
        <div className="p-5 py-7 rounded-2xl shadow-sm shadow-sky-700 bg-white border-1 border-sky-900 transition duration-300 ease-in-out md:lg:hover:scale-110 hover:-translate-y-3 ">
            <p className="text-xl font-bold text-sky-700">{title}</p>
            <p className="text-sm leading-6 text-slate-600 text-justify">{description}</p>
        </div>
    );
}
