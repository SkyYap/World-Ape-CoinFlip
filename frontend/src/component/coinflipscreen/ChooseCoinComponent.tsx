import { Image, VStack } from '@chakra-ui/react';

import HeadSelected from "../../resources/button/HeadSelected.png";
import HeadNotSelected from "../../resources/button/HeadNotSelected.png";
import TailSelected from "../../resources/button/TailSelected.png";
import TailNotSelected from "../../resources/button/TailNotSelected.png";

const ChooseCoinComponent = ({ setHeadSelect, isHeadSelected }: { setHeadSelect: any, isHeadSelected: any }) => {

    const toggling = (isHead: any) => {
        if (isHead !== isHeadSelected) {
            setHeadSelect(!isHeadSelected)
        }
    };

    return (
        <VStack spacing={5} >
            <Image src={isHeadSelected ? HeadSelected : HeadNotSelected} onClick={() => toggling(true)} />
            <Image src={isHeadSelected ? TailNotSelected : TailSelected} onClick={() => toggling(false)} />
        </VStack>
    )
}

export default ChooseCoinComponent
