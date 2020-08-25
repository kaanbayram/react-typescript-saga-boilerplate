import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setPosts } from "../../core/actionCreators/postsActionCreators";
import { PostsAction } from "../../core/actionTypes/postsActionTypes";
import { getPosts } from "../../core/actionCreators/postsActionCreators";
import Startup from "./Startup";

import { AppState } from "../../core/reducers/rootReducer";

import * as actionTypes from "../../core/actionTypes/postsActionTypes";

const mapDispatchToProps = (dispatch: Dispatch<PostsAction>) => ({
  onSearch: (artist: string, song: string) => {
    dispatch(getPosts(artist, song));
  },
  onClear: () => {
    dispatch(setPosts(""));
  }
});

const mapStateToProps = (state: any) => {
    return {
      posts: state,
      isLoading: state.isLoading[actionTypes.GET_POSTS],
      error: state.error[actionTypes.GET_POSTS]
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Startup);
