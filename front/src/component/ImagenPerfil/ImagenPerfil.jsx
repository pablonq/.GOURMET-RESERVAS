/* eslint-disable react/prop-types */
const ImagenPerfil = ({src, texAlt, isSmall}) => {
    return(
<>
<img className={`block ${isSmall ? "h-12 w-12" : "h-24 w-24"} m-2 rounded-full border-solid border-2 border-white`} src={src} alt={texAlt} />
</>
    );
};

export default ImagenPerfil;