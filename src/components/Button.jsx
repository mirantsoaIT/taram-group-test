export default function Button({ children, onClick, className = "", icon, font, iconPosition }) {
    const baseStyles = "font-montserrat inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer hover:scale-105 focus:outline-none hover:shadow-lg hover:shadow-gray-400/30";
    const variants = {
        primary: "bg-gradient-to-r from-[#71DDAE] to-[#0096aa] text-black hover:from-[#4CD4B0] hover:to-[#0096aa] active:scale-95 w-full sm:w-auto justify-center",
        outline: "border-1 border-[#71DDAE] text-[#71DDAE] transparent hover:bg-[#4CD4B0] hover:text-black active:scale-95 w-full sm:w-auto justify-center",
    }
    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[className]} ${font ? font : ""}}`}
        >
            {icon && iconPosition === 'left' && <span className="text-lg">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="text-lg">{icon}</span>}
        </button>
    );
}