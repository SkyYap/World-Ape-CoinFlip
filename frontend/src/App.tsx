import { PayBlock } from "./components/Pay";
import { VerifyBlock } from "./components/Verify";
import CoinFlipGameplay from "./component/coinflipscreen/CoinFlipGameplay";
import { Flex } from '@chakra-ui/react';

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3" style={{ backgroundColor: '#076A69' }}>
      <VerifyBlock />
      <PayBlock />
        <Flex width={'100%'} mt={10} mr={10} justifyContent={'flex-end'} alignItems={"flex-end"}>
          {/* <Flex width={'225px'} height={'62px'} bgImage={panel_sol_amount} mr={10} justifyContent={'flex-end'} alignItems={"flex-end"} >
              <Text as={'b'} color={'black'} mr={'30px'} mb={'5px'} fontSize={25}>SOL 0.0000</Text>
          </Flex> */}
            {/* <Button
                backgroundColor={'#555da8'}
                height={'50px'}
                borderColor={'white'}
                borderWidth={1}
                borderRadius={0}
                onClick={connected ? disconnect : onRequestConnectWallet}>
                {connected ? "LOGOUT" : "SELECT WALLET"}
            </Button> */}
        </Flex>
      <CoinFlipGameplay />
    </main>
  );
}
