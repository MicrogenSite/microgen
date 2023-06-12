export const Logo = ({
  className,
  image,
  imageHeight,
  imageWidth,
  logoStyles,
  logoType,
  logoTypeStyle,
}) => {
  const hasLogoImage = image;
  if (hasLogoImage) {
    return (
      <img className={className} src={image} width={imageWidth} height={imageHeight} style={logoStyles} alt={logoType || "logo"} />
    );
  }
  return (
    <h1 className={`flex-none ${className} ${logoTypeStyle}`} style={logoStyles}>{logoType}</h1>
  );
}