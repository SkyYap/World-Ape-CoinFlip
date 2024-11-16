import {useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
// import main_logo_apes from "resources/logo/ui_icon_coinfliplogo.png";
import ChooseCoinComponent from "./ChooseCoinComponent.tsx";
import ChooseAmountComponent from "./ChooseAmountComponent.tsx";
import ButtonFlipCoin from "./ButtonFlipCoin.tsx";
// import FlipCoinBtn from "resources/button/FlipCoinBtn.png";
import CoinFlip from "./CoinFlip.tsx";
import { solValue } from "../constant/SolValue.tsx";
import { VerifyBlock } from "../../components/Verify/index.tsx";

const CoinFlipGameplay = () => {
  const [currentBoxValue, setCurrentBoxValue] = useState(solValue[0].value);
  const [isHeadSelected, setHeadSelect] = useState(false);
  const [result, setResult] = useState("heads");
  const [isVerified, setIsVerified] = useState(false);

  return (
    <Flex mb={5} flexDir="column" width="100%" px={4}>
      <CoinFlip/>
      
      <Flex p={4} justifyContent="center" flexDir={{base: "column", md: "row"}} alignItems="center" gap={4}>
        <Flex
          backgroundColor="#555da8"
          height="50px"
          width={{base: "100%", md: "40%"}}
          borderColor="white"
          borderWidth={1}
          borderRadius={10}
          fontSize={{base: 20, md: 25}}
          alignItems="center"
          justifyContent="center"
        >
          <Text color="white">ORB</Text>
        </Flex>
      </Flex>

      {!isVerified ? (
        <VerifyBlock onVerificationSuccess={() => setIsVerified(true)} />
      ) : (
        <Flex 
          alignItems="center" 
          flexDir={{base: "column", md: "row"}}
          gap={{base: 6, md: 0}}
          mt={{base: 2, md: 0}}
        >
          <ChooseCoinComponent
            isHeadSelected={isHeadSelected}
            setHeadSelect={setHeadSelect}
          />
          <Flex flexDir="row" alignItems="center" gap={4}>
            <ChooseAmountComponent
              setCurrentBoxValue={setCurrentBoxValue}
              currentBoxValue={currentBoxValue}
            />
            <ButtonFlipCoin
              setResult={setResult}
              result={result}
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default CoinFlipGameplay;
