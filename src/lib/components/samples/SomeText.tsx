import { Grid, Heading, Highlight, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading lineHeight="tall">
        <Highlight
          query="learn"
          styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
        >
          What if AI could help you learn faster?
        </Highlight>
      </Heading>

      <Text color="gray.500" fontSize='lg' mt='4'>
        We're a startup creating custom courses and an AI assistant.
      </Text>
    </Grid>
  );
};

export default SomeText;
