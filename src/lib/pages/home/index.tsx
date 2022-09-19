import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Highlight,
  Input,
  useToast,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import mixpanel from "mixpanel-browser";
import SomeText from "lib/components/samples/SomeText";
import { useEffect, useState } from "react";

const SignupForm = () => {
  // fire an event when viewed
  useEffect(() => {
    mixpanel.track("Page view");
  }, []);
  let [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const toast = useToast();
  const id = "email-toast";

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const showToast = () => {
    if (error !== "" && error !== null) {
      toast({
        title: "Email typo?",
        description: "Please double check.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (email.length < 2) {
      toast({
        title: "Email typo?",
        description: "Must be longer than 2",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (!toast.isActive(id)) {
      toast({
        title: `Awesome!`,
        description: `We'll send you an email when we launch.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      mixpanel.track("Email submitted", { email });
    }
  };

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <Flex my={12} gap="8">
      <Heading flexGrow="1">
        Sign up for <br />
        updates
      </Heading>
      <Box>
        <form
          onSubmit={(e) => {
            showToast();
            e.preventDefault();
          }}
        >
          <Input
            id="email"
            type={"text"}
            value={email}
            onChange={handleChange}
            placeholder={"me@gmail.com"}
            rounded={"full"}
            border={0}
            mb="2"
          />
          <Input type="submit" as="button">
            Yes, I'm excited!
          </Input>
        </form>
      </Box>
    </Flex>
  );
};
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

    <Box my="8">
      <Heading>The Tech</Heading>
    </Box>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      backgroundImage="https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
      gap={4}
      mb={32}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall" color="white">
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
      mb={32}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall" color="white">
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
    <Box my="8">
      <Heading>Our Courses</Heading>
    </Box>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      backgroundColor="rgba(000,100,200,0.5)"
      backgroundBlendMode="multiply"
      backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
      mb={32}
      p={8}
      w="full"
    >
      <Grid textAlign="center">
        <Heading lineHeight="tall" color="white">
          Course #1:
          <br />
          <Highlight
            query="Algorithms"
            styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
          >
            Learn Algorithms with Eve
          </Highlight>
        </Heading>

        <Text color="gray.200" fontSize="lg" mt="4">
          Become a pro at algorithms
        </Text>

        <Text color="gray.200" fontSize="lg" mt="4" fontWeight="bold">
          Coming in October 2022
        </Text>
      </Grid>
    </Flex>
    <SignupForm />
  </>
);

export default Home;
