import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchPostsIfNeeded } from '../actions';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

const Header = styled.div`
  width: 100%;
  display: inline-block;
`;

const BackButton = styled.div`
  cursor: pointer;
  float: right;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #ededed;
`;

const PostContentContainer = styled.article`
  padding: 30px;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  a {
   color: #fc471e;
  }
  h1 {
    font-weight: 400;
  }
  h2 {
    font-weight: 400;
    strong {
      color: #fc471e;
    }
  }
  pre {
    display: grid;
    line-height: 1.4;
    margin: 4px 0;
    padding: 8px;
    background: #f6f7f8;
    max-width: 100%;
    overflow: auto;
    code {
      background-color: transparent;
      color: #1c1c1c;
      margin: 0;
    }
  }
`;

const Title = styled.h1`
  color: #000;
  font-weight: 500;
`;

class Post extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const { posts } = this.props;
    const postID = this.props.match.params.id ? this.props.match.params.id : '';
    const post = posts.filter(item => item.id === postID);

    let postTitle = '';
    let postContent = '';
    if (post[0]) {
      postTitle = post[0].title;
      postContent = post[0].selftext;
    }

    const navigateBack = () => {
      this.props.history.goBack();
    }

    return (
      <div className="main-container">
        <Header>
          <BackButton onClick={navigateBack}>Back</BackButton>
        </Header>
        <PostContentContainer>
          <Title>{postTitle}</Title>
          <ReactMarkdown source={postContent} />
        </PostContentContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
    ] || {
    isFetching: true,
    items: [],
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
}

export default connect(mapStateToProps)(Post)
