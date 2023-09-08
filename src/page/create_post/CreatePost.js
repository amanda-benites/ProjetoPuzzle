import ScreenHeader from "../../components/sreen_header/ScreenHeader";


function CreatePost() {
    return(
        <>
          <ScreenHeader titlePage={"Criar Publicação"}/>  
          <div>
                <span>Inserir imagem</span>
                <div>
                    <input type="file"/>
                </div>
                <span>Inserir legenda</span>
                <input type="text"/>
          </div>
          <div>
            <button>Cancelar</button>
            <button>Concluir</button>
          </div>
        </>
    )
}

export default CreatePost