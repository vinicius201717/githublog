import { FormSearchContainer } from "./styles";

export function FormSearch() {
    return (
        <FormSearchContainer>
            <div>
                <label htmlFor="search">Publicação</label>
                <span>6 publicações</span>  
            </div>
            <input type="text" placeholder="Buscar conteúdo"/>
        </FormSearchContainer>
    )
}