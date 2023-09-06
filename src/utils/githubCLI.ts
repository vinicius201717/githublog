import axios from 'axios';

import { IssuesInterface } from 'src/contexts/IssuesContext';

export async function apiUser() {

  try {
    const response = await axios.get('https://api.github.com/users/vinicius201717');
    if (response && response.data) {
      return {
          id: response.data.id,
          name: response.data.name,
          avatar: response.data.avatar_url,
          followers: response.data.followers,
          url: response.data.html_url,
          company: response.data.company,
          login: response.data.login,
          bio: response.data.bio
      }
    }
    return;
  } catch (error) {
    console.error('Erro ao listar issues:', error);
    throw error;
  }
}

export async function apiGithubArray() {

  try {
    const response = await axios.get('https://api.github.com/repos/vinicius201717/githublog/issues');
    if (response && response.data) {
      const issues: IssuesInterface[] = response.data.map((issue: IssuesInterface) => ({
        id: issue.id,
        title: issue.title,
        url: issue.url,
        body: issue.body,
        comments: issue.comments,
        created_at: issue.created_at
      }));
      return issues;
    }
    return [];
  } catch (error) {
    console.error('Erro ao listar issues:', error);
    throw error;
  }
}

export async function apiGithub(id: string) {
  try {
    const response = await axios.get('https://api.github.com/repos/vinicius201717/githublog/issues/' + id);
    if (response && response.data) {
      return {
          id: response.data.id,
          title: response.data.title,
          url: response.data.url,
          body: response.data.body,
          comments: response.data.comments,
          created_at: response.data.created_at,
      }
    }
    return;
  } catch (error) {
    console.error('Erro ao listar issues:', error);
    throw error;
  }
}

// export async function apiGithubOther(url: IssuesInterface) {
//   try {
//     const response = await axios.get(url);
//     if (response && response.data) {
//       return {
//           id: response.data.id,
//           title: response.data.title,
//           url: response.data.url,
//           body: response.data.body,
//           comments: response.data.comments,
//           created_at: response.data.created_at,
//       }
//     }
//     return;
//   } catch (error) {
//     console.error('Erro ao listar issues:', error);
//     throw error;
//   }
// }

export async function searchGitHubIssues(query: string) {
  try {
    const state = 'open';    
    const apiUrl = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}+state:${state}`;
  
    const response = await axios.get(apiUrl);
    
    if (response && response.data && response.data.items) {
      const issues = response.data.items.map((issue: any) => ({
        id: issue.id,
        title: issue.title,
        url: issue.html_url,
        body: issue.body,
        comments: issue.comments,
        created_at: issue.created_at,
      }));
      
      return issues;
    }
    
    return [];
  } catch (error) {
    console.error('Erro ao buscar issues no GitHub:', error);
    throw error;
  }
}