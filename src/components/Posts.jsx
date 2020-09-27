import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const List = styled.div`
  counter-reset: gradient-counter;
  margin: 1.75rem 0;
  padding-left: 1rem;
  .list-link {
    text-decoration: none;
    &:hover {
      div {
        background-color: #ededed;
      }
    }
  }
`;

const ListItem = styled.div`
  background: #fafafa;
  color: #000;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
  counter-increment: gradient-counter;
  margin-top: 2rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
    &::before,
    &::after {
      background: linear-gradient(135deg, #83e4e2 0%,#a2ed56 100%);
      border-radius: 1rem 1rem 0 1rem;
      content: '';
      height: 3rem;
      left: -1rem;
      overflow: hidden;
      position: absolute;
      top: -1rem;
      width: 3rem;
    }
    &::before {
      align-items: flex-end;
      box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
      content: counter(gradient-counter);
      color: #1d1f20;
      display: flex;
      font: 900 1.5em/1 'Montserrat';
      justify-content: flex-end;
      padding: 0.125em 0.25em;
      z-index: 1;
    }
    @for $i from 1 through 5 {
      &:nth-child(10n+#{$i}):before {
        background: linear-gradient(135deg, rgba(#a2ed56, $i * 0.2) 0%,rgba(#fddc32, $i * 0.2) 100%);
      }
    }
    @for $i from 6 through 10 {
      &:nth-child(10n+#{$i}):before {
        background: linear-gradient(135deg, rgba(#a2ed56, 1 - (($i - 5) * 0.2)) 0%,rgba(#fddc32, 1 - (($i - 5) * 0.2)) 100%);
      }
    }
`;

export default class Posts extends Component {
  render() {
    return (
      <List>
        { this.props.posts.map((post, i) => (
          <Link
            to={`/post/${ post.id }`}
            key={i}
            className="list-link"
          >
            <ListItem>
              { post.title }
            </ListItem>
          </Link>
        ))}
      </List>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}
