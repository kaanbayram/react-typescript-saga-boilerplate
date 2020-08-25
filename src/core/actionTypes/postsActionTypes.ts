export const SET_POSTS = "postsActionTypes/SET_POSTS";
export const GET_POSTS = "postsActionTypes/GET_POSTS";
export const GET_POSTS_REQUEST = "postsActionTypes/GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "postsActionTypes/GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "postsActionTypes/GET_POSTS_FAILURE";


export interface SetPostsAction {
  type: typeof SET_POSTS;
  posts: string;
}

export interface GetPostsAction {
  type: typeof GET_POSTS;
  posts: string;
  id: string;
}

export interface GetPostsRequestAction {
  type: typeof GET_POSTS_REQUEST;
}


export interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  posts: string;
}


export interface GetPostsFailureAction {
  type: typeof GET_POSTS_FAILURE;
  error: Error | string;
}

export type PostsAction =
  | SetPostsAction
  | GetPostsAction
  | GetPostsRequestAction
  | GetPostsSuccessAction
  | GetPostsFailureAction;
