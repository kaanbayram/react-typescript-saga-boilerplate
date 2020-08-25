import * as actions from "../actionTypes/postsActionTypes";

export interface PostsState {
  postsResponse: any;
}

const initialState: PostsState = {
  postsResponse: {}
};

export default function postsReducer(state: PostsState = initialState,action: actions.PostsAction): PostsState {
  switch (action.type) {
    case actions.GET_POSTS:
    case actions.GET_POSTS_SUCCESS:
      return {
        postsResponse: action.posts
      };
    default:
      return state;
  }
}
