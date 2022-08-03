import { Box, Image, Flex, Spacer } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function RecCenterCard({ recCenter }) {
  const history = useHistory();

  function handleClick() {
    history.push(`/admin/rec_centers/${recCenter.id}/resources`);
  }
  return (
    <Box
      maxW="sm"
      minH="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={handleClick}
    >
      <Flex direction="column" align="center">
        <Box w="230px">
          <Image fit src="/map_image.png" alt="Map with location" width='full' height='180px'/>
        </Box>
        <br />
        <Box>
          <Box display="flex" alignItems="baseline">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {recCenter.name}
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {recCenter.address}
            </Box>
          </Box>

          <Box as="span" color="gray.600" fontSize="sm">
            Opens at: {recCenter.opens_at} - Closes at: {recCenter.closes_at}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {recCenter.description}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default RecCenterCard;
