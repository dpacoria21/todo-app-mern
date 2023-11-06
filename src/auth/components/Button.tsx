interface Props {
    title: string,
    px: string,
    py: string,
    rounded: string,
}
export const Button = ({title, px, py, rounded}: Props) => {
    return (
        <button type="submit" className={`${px} ${py} tracking-widest transition-all duration-100 ease-in-out ${rounded} shadow-md active:shadow-lg active:scale-95 bg-electric-violet-500 hover:bg-electric-violet-600 text-slate-200 font-russo-one`}>
            {title}
        </button>
    );
};
