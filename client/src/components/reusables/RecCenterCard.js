import { Box, Image, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function RecCenterCard({ recCenter, admin }) {
  const history = useHistory();

  function handleClick() {
    if (admin) {
      history.push(`/admin/rec_centers/${recCenter.id}/resources`);
    }
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
      <Flex direction="column" align="center" m="5px">
        <Box w="230px" mt="10px">
          <Image
            fit
            src="/map_image.png"
            alt="Map with location"
            width="full"
            height="180px"
          />
        </Box>
        <br />
        <Box>
          {recCenter.name}
          <Box display="flex" justifyContent="space-around">
            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight"></Box>
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
            Open hours: {recCenter.opening_hours}
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
