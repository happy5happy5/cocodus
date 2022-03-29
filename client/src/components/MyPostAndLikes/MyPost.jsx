import React from "react";
import { BsPencil } from "react-icons/bs";
import { Section } from "../styles/Section.styled";
import TitleContent from "../TitleContent";
import { Block, IconAndText, Icon } from "./MyPostAndLikes.styled";

function MyPost(props) {
  return (
    <Section>
      <Block>
        <IconAndText>
          <Icon>
            <BsPencil size={30} />
          </Icon>
          <TitleContent text="작성한 글" fontSize="1.5rem" width="100%" />
        </IconAndText>
      </Block>
    </Section>
  );
}

export default MyPost;