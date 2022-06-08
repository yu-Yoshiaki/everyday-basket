import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useGetWindowSize } from "src/hook/useGetWindowSize";

const items = [
  { href: "/service", label: "SERVICE" },
  { href: "/article", label: "BLOG" },
  { href: "/contact", label: "CONTACT", bg: "blue.300" },
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
        {items.map(({ href, label, bg }) => {
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
                {label}
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
