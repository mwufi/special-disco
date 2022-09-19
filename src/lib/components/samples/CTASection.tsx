import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/nextarter-chakra";

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2} margin={2}>
        <Button
          as="a"
          href="https://github.com/sozonome/nextarter-chakra/generate"
          target="_blank"
          size="sm"
        >
          Use This Template
        </Button>
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Open in Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
