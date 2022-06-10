import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoMdBusiness } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { useGetWindowSize } from "src/hook/useGetWindowSize";

const items = [
  { href: "/team", label: "TEAM", icon: IoMdBusiness },
  { href: "/service", label: "SERVICE", icon: RiServiceLine },
  { href: "/article", label: "BLOG", icon: MdArticle },
  { href: "/contact", label: "CONTACT", bg: "blue.300", icon: EmailIcon },
];

const SmartPhone = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList w={"full"} zIndex={5}>
        {items.map(({ href, label, bg, icon }) => {
          return (
            <Link href={href} key={label} passHref>
              <MenuItem
                as={"a"}
                bg={bg}
                w={"90%"}
                rounded={"md"}
                marginLeft={"auto"}
                marginRight={"auto"}
              >
                <HStack>
                  <Icon as={icon} /> <Text>{label}</Text>
                </HStack>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Menu>
  );
};

const PC = () => {
  return (
    <ButtonGroup gap="2">
      <nav>
        {items.map(({ href, label, bg }) => {
          return (
            <Link href={href} key={label} passHref>
              <Button
                as={"a"}
                color={bg ? "white" : "blue.400"}
                bg={bg ?? "white"}
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </nav>
    </ButtonGroup>
  );
};

export const MenuComponent = () => {
  const { windowSize } = useGetWindowSize();

  return <div>{windowSize.width < 480 ? <SmartPhone /> : <PC />}</div>;
};
