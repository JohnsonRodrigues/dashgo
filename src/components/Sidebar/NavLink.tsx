import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLInk';

interface NavLInkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export default function NavLink({
  icon,
  children,
  href,
  ...rest
}: NavLInkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="1" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
