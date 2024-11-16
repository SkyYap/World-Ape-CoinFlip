import { Box, Text, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { solValue } from '../constant/SolValue';
// import { useState } from 'react';

const ChooseAmountComponent = ({currentBoxValue, setCurrentBoxValue}: {currentBoxValue: any, setCurrentBoxValue: any}) => {

    return (
        <Box 
            height="100%" 
            bgColor="#074143" 
            px={{base: 4, md: 7}} 
            py={10} 
            mx={{base: 2, md: 3}} 
            borderRadius={20}
        >
            <Wrap 
                h="100%" 
                spacing="30px" 
                width={{base: "300px", sm: "400px", md: "640px"}}
                justify="center"
            >
                {solValue.map((currentSol, index) => (
                    <WrapItem
                        key={index}
                        onClick={() => setCurrentBoxValue(currentSol.value)}
                    >
                        {
                            currentBoxValue == currentSol.value ?
                                <SelectionBox text={currentSol.name} /> :
                                <NonSelectionBox text={currentSol.name} />
                        }
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}

const SelectionBox = ({ text }: { text: any }) => {
    return (
        <Center 
            width={{base: "100px", md: "130px"}} 
            h="50px" 
            bg="white"
        >
            <Text as="b" color="#074143" fontWeight="extrabold" fontSize={{base: 16, md: 20}}>
                {text}
            </Text>
        </Center>
    )
}

const NonSelectionBox = ({ text }: { text: any }) => {
    return (
        <Center 
            width={{base: "100px", md: "130px"}} 
            h="50px" 
            bg="transparent" 
            border="solid 3px white"
        >
            <Text as="b" color="white" fontWeight="extrabold" fontSize={{base: 16, md: 20}}>
                {text}
            </Text>
        </Center>
    )
}

export default ChooseAmountComponent
