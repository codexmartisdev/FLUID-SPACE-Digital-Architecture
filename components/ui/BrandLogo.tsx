interface BrandLogoProps {
  className?: string;
  symbolClassName?: string;
  nameClassName?: string;
  subtitleClassName?: string;
  showSubtitle?: boolean;
}

export function BrandLogo({
  className = "",
  symbolClassName = "h-11 w-11",
  nameClassName = "text-xl md:text-2xl",
  subtitleClassName = "text-[9px] md:text-[10px]",
  showSubtitle = true,
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3.5 text-current ${className}`}>
      <svg
        viewBox="0 0 240 220"
        aria-hidden="true"
        className={`shrink-0 overflow-visible ${symbolClassName}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 10V168H176C205 168 226 148 226 120C226 94 205 72 176 72H86V136"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86 72L226 214"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M86 168V216"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-serif font-light tracking-[-0.045em] ${nameClassName}`}
        >
          LaR
        </span>
        {showSubtitle && (
          <span
            className={`mt-1 whitespace-nowrap font-medium uppercase tracking-[0.18em] opacity-65 ${subtitleClassName}`}
          >
            Arquitetura e Interiores
          </span>
        )}
      </span>
    </span>
  );
}
