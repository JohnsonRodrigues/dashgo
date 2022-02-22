import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Johnson Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            johnsonrodrigues19@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Johnson Rodrigues"
        src="https://github.com/JohnsonRodrigues.png"
      />
    </Flex>
  );
}
