import { Box, Text, Wrap, WrapItem, Center } from '@chakra-ui/react';
import { solValue } from '../constant/SolValue';
import { useState } from 'react';

const ChooseAmountComponent = ({currentBoxValue, setCurrentBoxValue}) => {

    return (
        <Box height={'100%'} bgColor={'#074143'} pl={7} pt={10} pb={10} ml={3} mr={3} borderRadius={20}>
            <Wrap h={'100%'} spacing='30px' width={'640px'} >
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

const SelectionBox = ({ text }) => {
    return (
        <Center width={'130px'} h='50px' bg='white'>
            <Text as={'b'} color={'#074143'} fontWeight={'extrabold'} fontSize={20}>
                {text}
            </Text>
        </Center>
    )
}

const NonSelectionBox = ({ text }) => {
    return (
        <Center width={'130px'} h='50px' bg='transparent' border={'solid 3px white'} >
            <Text as={'b'} color={'white'} fontWeight={'extrabold'} fontSize={20}>
                {text}
            </Text>
        </Center>
    )
}

export default ChooseAmountComponent
