import { Post } from "../../components/Post";
import { FormSearch } from "../../components/FormSearch";
import { Profile } from "../../components/Profile";
import { HomeContainer, PostContainer } from "./styles";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Home() {
    
    const { issues } = useContext( IssuesContext )

    return (
        <HomeContainer>
            <Profile />
            <FormSearch />
            <PostContainer>
                {
                    issues.map(issue => {
                        return  <Post key={issue.id} issue={issue} />
                    })
                }               
            </PostContainer>
        </HomeContainer>
    )
}