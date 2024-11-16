import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import main_logo_apes from "resources/logo/ui_icon_coinfliplogo.png";
import ChooseCoinComponent from "./ChooseCoinComponent.tsx";
import ChooseAmountComponent from "./ChooseAmountComponent.tsx";
import ButtonFlipCoin from "./ButtonFlipCoin.tsx";
import FlipCoinBtn from "resources/button/FlipCoinBtn.png";
import CoinFlip from "./CoinFlip.tsx";
import { solValue } from "../constant/SolValue.tsx";

const CoinFlipGameplay = () => {
  const [currentBoxValue, setCurrentBoxValue] = useState(solValue[0].value);
  const [isHeadSelected, setHeadSelect] = useState(false);

  const [result, setResult] = useState("heads");
  const [flipAnimation, setFlipAnimation] = useState(false);

  return (
    <Flex mb={10} flexDir="column">
      <CoinFlip result={result} />
      <Flex p={2} justifyContent={"center"}>
        <Flex
          backgroundColor={"#555da8"}
          height={"50px"}
          width={"40%"}
          borderColor={"white"}
          borderWidth={1}
          borderRadius={10}
          fontSize={25}
          alignItems={"center"}
          justifyContent={"center"}
          mr={5}
        >
          <Text color="white">WLD, ORB, ORO</Text>
        </Flex>

        <Box>
          <Flex mb={"5px"}>
            <Text color={"white"} mr={"14px"} fontSize={12}>
              MIN
            </Text>
            <Input
              border={0}
              borderRadius={20}
              backgroundColor={"#303266"}
              htmlSize={4}
              width="auto"
              height={"25px"}
            />
          </Flex>
          <Flex>
            <Text color={"white"} mr={"10px"} fontSize={12}>
              MAX
            </Text>
            <Input
              border={0}
              borderRadius={20}
              backgroundColor={"#303266"}
              htmlSize={4}
              width="auto"
              height={"25px"}
            />
          </Flex>
        </Box>
      </Flex>

      <Flex alignItems={"center"}>
        <ChooseCoinComponent
          isHeadSelected={isHeadSelected}
          setHeadSelect={setHeadSelect}
        />
        <ChooseAmountComponent
          setCurrentBoxValue={setCurrentBoxValue}
          currentBoxValue={currentBoxValue}
        />
        <ButtonFlipCoin
          flipAnimation={flipAnimation}
          setFlipAnimation={setFlipAnimation}
          setResult={setResult}
          result={result}
        />
      </Flex>
    </Flex>
  );
};

export default CoinFlipGameplay;
