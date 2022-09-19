import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Highlight,
  Input,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

const Home = () => (
  <>
    <NextSeo title="Home" />
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeText />
    </Flex>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      backgroundImage="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
      gap={4}
      mb={64}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall">
          <Highlight
            query="learn"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            The Eve knowledge graph
          </Highlight>
        </Heading>

        <Text color="gray.200" fontSize="lg" mt="4">
          All the power of a textbook, in bite-sized segments
        </Text>
      </Grid>
    </Flex>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      mb={64}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall">
          <Highlight
            query="learn"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Eve Companion
          </Highlight>
        </Heading>

        <Text color="gray.200" fontSize="lg" mt="4">
          Tutor, guide, forum - all in one. App in your pocket.
        </Text>
      </Grid>
    </Flex>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      backgroundColor="rgba(000,100,200,0.5)"
      backgroundBlendMode="multiply"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      mb={64}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall">
          <Highlight
            query="Algorithms"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Course #1: Learn Algorithms with Eve
          </Highlight>
        </Heading>

        <Text color="gray.200" fontSize="lg" mt="4">
          Become a pro at algorithms. Get a software development job today.
        </Text>

        <Text color="gray.200" fontSize="lg" mt="4" fontWeight="bold">
          Coming in October 2022
        </Text>
      </Grid>
    </Flex>
    <Flex my={12}>
      <Heading>Sign up for updates</Heading>
      <Input
        type={"text"}
        placeholder={"me@gmail.com"}
        rounded={"full"}
        border={0}
      />
    </Flex>
  </>
);

export default Home;
