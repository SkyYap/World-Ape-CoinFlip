import { PayBlock } from "./components/Pay";
import { VerifyBlock } from "./components/Verify";
import CoinFlipGameplay from "./component/coinflipscreen/CoinFlipGameplay";
import { Flex } from '@chakra-ui/react';

export default function App() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center gap-y-3 overflow-x-hidden" 
      style={{ backgroundColor: '#076A69' }}
    >
      <Flex 
        direction="column" 
        width="100%" 
        px={{base: 4, md: 24}} 
        py={{base: 12, md: 24}}
      >
        {/* <VerifyBlock />
        <PayBlock /> */}
        <Flex 
          width="100%" 
          mt={10} 
          justifyContent="flex-end" 
          alignItems="flex-end"
          px={{base: 2, md: 10}}
        >
        </Flex>
        <CoinFlipGameplay />
      </Flex>
    </main>
  );
}
