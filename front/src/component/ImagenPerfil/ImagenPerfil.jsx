/* eslint-disable react/prop-types */
const ImagenPerfil = ({src, texAlt}) => {
    return(
<>
<img className="block h-24 w-24 m-2 rounded-full border-solid border-2 border-white" src={src} alt={texAlt} />
</>
    );
};

export default ImagenPerfil;