interface Props {
    title: string,
    type: string
}

export const Input = ({title, type}: Props) => {
    return (
        <div className="flex flex-col w-2/4 gap-1 ">
            <span className="text-lg font-semibold font-roboto text-slate-800">{title}</span>
            <input type={type} required className="px-2 py-1 font-semibold transition-all duration-300 ease-in-out border-0 rounded-sm focus:border-b-[4px] focus:border-electric-violet-700 valid:border-b-[4px] valid:border-electric-violet-700 font-roboto h-9 outline-0 bg-electric-violet-100" />
        </div>
    );
};
