import { IssuesInterface } from "../../contexts/IssuesContext";
import { apiGithub } from "../../utils/githubCLI";
import { BodyPost } from "./components/BodyPost";
import { ProfilePost } from "./components/ProfilePost";
import { ProfilePostContainer } from "./styles";
import { useEffect, useState } from 'react'

export function PostPage() {

    
    const [issue, setIssue] = useState<IssuesInterface>()
    const [loading, setLoading] = useState(true)

    const url = window.location.href
    const id = url.replace(/^.*\//g, '');

    async function fetchIssue() {
            try {
            const response: IssuesInterface | undefined = await apiGithub(id);
            setIssue(response)  
            setLoading(false)    
            }
            catch(error) {
                console.error(error)
                setLoading(false)  
            }
        
    }

    useEffect(() => {
        fetchIssue()
    }, [])


    return (
        <ProfilePostContainer>
            {loading ? (
                <p>Carregando...</p>
            ) : issue ? (
                <>
                    <ProfilePost issue={issue} />
                    <BodyPost issue={issue} />
                </>
            ) : (
                // Tratar o cenário em que não há uma issue definida
                <p>Não foi possível carregar a issue.</p>
            )}
            
        </ProfilePostContainer>
    )
}