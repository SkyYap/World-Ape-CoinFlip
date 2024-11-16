import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
    Container,
    Button,
    Center,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import main_logo_apes from "resources/logo/ui_icon_apelogo.png";
import btn_side_bg from "resources/button/ui_button_sidemenu.png";

interface LinkItemProps {
    name: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'FAQS', icon: FiHome },
    { name: 'STATS', icon: FiTrendingUp },
    { name: 'FLIP HISTORY', icon: FiCompass },
    { name: 'PROFILE', icon: FiStar },
];

export default function Sidebar({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>

            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />

            <Flex width="100%" height="100%" >
                <SidebarContent onClose={() => onClose} />
                {children}
            </Flex>
        </Box>
    );
}
interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Flex
            flexDir={"column"}
            bg={useColorModeValue('black', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('#074143', 'gray.700')}
            display={{ base: "none", md: "flex" }}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image src={main_logo_apes} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} title={link.name} icon={link.icon} />
            ))}
        </Flex>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}
const NavItem = ({ icon, title, children, ...rest }: NavItemProps) => {
    return (
        // <Link
        //       style={{
        //         borderColor: "white",
        //         borderRadius: "5px",
        //         borderWidth: "0.5px",
        //         justifyContent: "center",
        //         paddingLeft: "15px",
        //         paddingRight: "15px",
        //         paddingTop: "5px",
        //         paddingBottom: "5px",
        //         pos: "absolute",
        //         right: 3,
        //         bottom: 3,
        //         display: "block",
        //       }}
        //       to={`/my-project-settings/${currentProjectData.collectionId}`}
        //       _hover={{ color: "white" }}
        //     >
        //       <Text fontSize={"13px"} fontWeight={"bold"}>
        //         Manage
        //       </Text>
        //     </Link>
        <Link href="#" style={{
            textDecoration: 'none',
        }} _focus={{ boxShadow: 'none' }} >
            <Flex
                height='56px'
                width='190px'
                bgColor={'transparent'}
                color={'white'}
                bgImage={btn_side_bg}
                m={'10px'}
                justifyContent={'flex-star'} alignItems={"center"}
                p={'10px'}
            >
                <Text fontSize={"15px"} fontWeight={"bold"}>
                    {title}
                </Text>
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('black', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Image src={main_logo_apes} />

        </Flex>
    );
};

