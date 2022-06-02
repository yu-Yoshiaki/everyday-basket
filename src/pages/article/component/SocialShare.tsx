import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import * as ReactShare from "react-share";

const config = {
  size: 60,
};

type Props = {
  id: string;
  title: string;
  size?: number;
  via?: string;
};

export const SocialShare = (props: Props) => {
  const title = `${props.title} / A-Release`;
  const url = `https://arelease.vercel.app/article/${props.id}`;
  return (
    <Box
      maxW={"740px"}
      mx={"auto"}
      py={"20px"}
      px={"20px"}
      rounded={"xl"}
      boxShadow={"base"}
      bg={"white"}
      mt={8}
    >
      <Grid
        templateRows="repeat(2,0.85fr)"
        templateColumns="repeat(3, 1fr)"
        justifyContent={"center"}
      >
        <GridItem colSpan={3}>
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            - 記事をシェアする -
          </Text>
        </GridItem>

        <GridItem>
          <ReactShare.FacebookShareButton url={url}>
            <ReactShare.FacebookIcon size={props.size ?? config.size} round />
          </ReactShare.FacebookShareButton>
        </GridItem>
        <GridItem>
          <ReactShare.TwitterShareButton url={url} title={title}>
            <ReactShare.TwitterIcon size={props.size ?? config.size} round />
          </ReactShare.TwitterShareButton>
        </GridItem>
        <GridItem>
          <ReactShare.LineShareButton url={url} title={title}>
            <ReactShare.LineIcon size={props.size ?? config.size} round />
          </ReactShare.LineShareButton>
        </GridItem>
      </Grid>
    </Box>
  );
};
