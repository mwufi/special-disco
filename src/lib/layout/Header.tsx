import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const backgroundColor = useColorModeValue("white", "rgb(26,32,44)");
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      position="sticky"
      top="0"
      p="4"
      background={backgroundColor}
    >
      <Link href="/">
        <Heading size="lg" as="button">
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
