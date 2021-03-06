import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FeedContext } from "../context/FeedContext";
import { LightningIcon } from "./Icons";

const Wrapper = styled.div`
  margin: 0.6rem 0;

  h3 {
    margin-bottom: 1rem;
  }

  svg {
    fill: ${(props) => props.theme.accent};
    position: relative;
    top: 5px;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Tags = ({ setNavOpen }) => {
  const { userFeeds } = useContext(FeedContext);

  const tagList = userFeeds.map((userFeed) => userFeed.tags);
  let tags = [].concat.apply([], tagList);
  tags = [...new Set(tags)];

  // close nav
  const closeNav = () => {
    if (setNavOpen) {
      setNavOpen(false);
    }
  };

  return (
    <Wrapper>
      {tags.length
        ? tags.map((tag) => (
            <Link onClick={closeNav} key={tag} to={`/tags/${tag}`}>
              <h3>
                <LightningIcon />
                {tag}
              </h3>
            </Link>
          ))
        : null}
    </Wrapper>
  );
};

export default Tags;
