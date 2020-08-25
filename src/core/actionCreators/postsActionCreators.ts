import * as actions from "../actionTypes/postsActionTypes";

export function setPosts(posts: string): actions.SetPostsAction {
  return {
    type: actions.SET_POSTS,
    posts
  };
}

export function getPosts(posts: string, id: string): actions.GetPostsAction {
  return {
    type: actions.GET_POSTS,
    posts,
    id
  };
}

export function getPostsRequest(): actions.GetPostsRequestAction {
  return {
    type: actions.GET_POSTS_REQUEST
  };
}

export function getPostsSuccess(posts: string
): actions.GetPostsSuccessAction {
  return {
    type: actions.GET_POSTS_SUCCESS,
    posts
  };
}

export function getPostsFailure(error: Error | string): actions.GetPostsFailureAction {
  return {
    type: actions.GET_POSTS_FAILURE,
    error
  };
}
