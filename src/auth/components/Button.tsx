
interface Props {
    title: string,
    px: string,
    py: string,
    rounded: string,
    fn?: () => void;
}
export const Button = ({title, px, py, rounded, fn}: Props) => {
    return (
        <button onClick={fn} type="submit" className={`${px} ${py} mt-5 tracking-widest transition-all duration-100 ease-in-out ${rounded} shadow-md active:shadow-lg active:scale-95 bg-electric-violet-500 hover:bg-electric-violet-600 text-slate-200 font-russo-one`}>
            {title}
        </button>
    );
};
