import { Post } from "../../components/Post";
import { FormSearch } from "../../components/FormSearch";
import { Profile } from "../../components/Profile";
import { HomeContainer, PostContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Profile />
            <FormSearch />
            <PostContainer>
                <Post />
            </PostContainer>
        </HomeContainer>
    )
}