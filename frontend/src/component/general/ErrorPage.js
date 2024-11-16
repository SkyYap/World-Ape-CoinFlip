import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <Flex
      px={"2rem"}
      py={"1rem"}
      width="100%"
      textAlign={"center"}
      experimental_spaceY={"1.25rem"}
      flexDirection="column"
      justifyContent={"center"}
      height="calc(100vh)"
      background={"black"}
    >
      <Text color={"white"} fontSize="7xl">
        404 Page not found
      </Text>

      <Text color="white" fontSize={"2xl"}>
        This page does not exist. Click{" "}
        <Link
          style={{
            textDecoration: "underline",
            color: "#1E93FF",
          }}
          to="/"
        >
          here
        </Link>{" "}
        to return back to home page.
      </Text>
    </Flex>
  );
};