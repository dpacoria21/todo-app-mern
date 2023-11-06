interface Props {
    title: string,
    type: string
}

export const Input = ({title, type}: Props) => {
    return (
        <div className="flex flex-col w-2/4 gap-1 ">
            <span className="font-extrabold tracking-wider text-md font-roboto text-slate-50">{title}</span>
            <input type={type} required placeholder={`${title}`} className="tracking-wide text-lg shadow-md text-slate-700 px-2 py-1 font-semibold transition-all duration-300 ease-in-out border-0 rounded-sm focus:border-b-[6px] focus:border-electric-violet-800 valid:border-b-[6px] valid:border-electric-violet-800 font-roboto h-12 outline-0 bg-electric-violet-100" />
        </div>
    );
};
