interface Props {
    title: string,
    px: number,
    py: number
}
export const Button = ({title, px, py}: Props) => {
    return (
        <button type="submit" className={`px-${px} py-${py} tracking-widest transition-all duration-300 ease-in-out rounded-sm shadow-md active:shadow-lg active:scale-95 bg-electric-violet-500 text-slate-200 font-russo-one`}>
            {title}
        </button>
    );
};
