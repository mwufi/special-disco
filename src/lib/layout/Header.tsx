import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" position='sticky' top='4'>
      <Link href="/">
        <Heading as="h1" size="lg" as='button'>
          Eve Schools
        </Heading>
      </Link>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
