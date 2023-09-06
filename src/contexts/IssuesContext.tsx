import { createContext, ReactNode, useEffect, useState } from 'react';
import { apiGithubArray, apiUser, searchGitHubIssues } from '../utils/githubCLI';


export interface User {
    id: string
    name: string,
    avatar: string,
    followers: number,
    url: string,
    company: string,
    login: string,
    bio: string
}

export interface IssuesInterface {
    id: string;
    title: string;
    url: string;
    body: string
    comments: number;
    created_at: string;
  }
  

interface IssuesContextType {
  issues: IssuesInterface[];
  user: User | undefined,
  setSearchGithubIssues: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode;
}



export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesProvider({ children }: IssuesProviderProps) {

    const [issues, setIssues] = useState<IssuesInterface[]>([])
    const [user, setUser] = useState<User>()

    async function setSearchGithubIssues(query: string) {
        setIssues(await searchGitHubIssues(query))
    }

    async function fetchIssues() {
        try {
            const responde00: User | undefined = await apiUser();
            const response: IssuesInterface[] = await apiGithubArray();     
            setUser(responde00) 
            setIssues(response);
        }
        catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchIssues()
    }, [])

    return (
        <IssuesContext.Provider value={{ 
            issues, 
            user,
            setSearchGithubIssues,
            
        }}>
            {children}
        </IssuesContext.Provider>
    );
}