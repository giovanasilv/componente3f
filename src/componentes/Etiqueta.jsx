const Etiqueta = (props)=> {

    var textoPadrao = "Texto Padrao da Etiqueta"

    return (
        <>
          <p>{(props.texto != null) ? props.texto : textoPadrao}</p>
        </>
    )
}

export default Etiqueta 