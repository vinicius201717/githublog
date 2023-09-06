import { useForm } from "react-hook-form";
import { FormSearchContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";


type FormData = {
    query: string;
}

const searchFormSchema = z.object({
    query: z.string()
})

export function FormSearch() {

    const { setSearchGithubIssues } = useContext(IssuesContext)

    const { register, handleSubmit } = useForm<FormData>({
        resolver: zodResolver(searchFormSchema)
    })

    const onSubmit = (data: FormData) => {
        setSearchGithubIssues(data.query)
                .then((issues) => {
                    return issues
                })
                .catch((error) => {
                    console.error('Erro ao buscar issues:', error);
            });
    };

    return (
        <FormSearchContainer onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="search">Publicação</label>
                <span>6 publicações</span>  
            </div>
            <input type="text" {...register("query")} placeholder="Buscar conteúdo"/>
        </FormSearchContainer>
    )
}
