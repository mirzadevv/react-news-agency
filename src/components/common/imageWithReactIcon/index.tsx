import { IconType } from "react-icons";

type ImageWithReactIconProps = {
  src: string | IconType;
  size?: number;
  type: string;
  onClick?: () => void;
  toggleMode?: boolean;
  toggledSrc?: IconType;
  className?: string;
};

export default function ImageWithReactIcon({
  type,
  src,
  size = 100,
  onClick,
  toggleMode,
  toggledSrc,
  className,
}: ImageWithReactIconProps) {
  if (toggleMode && !toggledSrc) {
    throw new Error("When toggleMode is true, toggledSrc must be provided.");
  }

  if (type === "image" && (toggleMode || toggledSrc)) {
    throw new Error("Cannot use toggleMode or toggledSrc with type 'image'.");
  }

  return (
    <div className={className}>
      {type === "image" && typeof src === "string" && (
        <li onClick={onClick}>
          <a>
            <img src={src} width={size} height={size} />
          </a>
        </li>
      )}

      {type === "icon" && typeof src !== "string" && !toggledSrc && (
        <li onClick={onClick}>
          <a>{src({ size })}</a>
        </li>
      )}

      {type === "icon" && typeof src !== "string" && (
        <li onClick={onClick}>
          <a>
            {toggleMode ? src({ size }) : toggledSrc && toggledSrc({ size })}
          </a>
        </li>
      )}
    </div>
  );
}
