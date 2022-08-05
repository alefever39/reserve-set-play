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
      border="2px"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      py="20px"
      align="center"
      onClick={handleClick}
    >
      <Image
        fit
        src="/map_image.png"
        alt="Map with location"
        width="230px"
        height="180px"
        mb="12px"
      />

      <Box color="gray.600" fontWeight="Bold" fontSize="xl" px="60px">
        {recCenter.name}
      </Box>
      <Box
        borderBottom="2px"
        borderColor="gray.200"
        mx="20px"
        mt="10px"
        mb="10px"
      ></Box>
      <>
        <Box
          fontWeight="bold"
          textAlign={"left"}
          fontSize="md"
          color="gray.600"
          px="20px"
        >
          Address
        </Box>
        <Box
          textAlign={"left"}
          mb="10px"
          fontWeight="semibold"
          color="gray.600"
          px="20px"
          fontSize="sm"
        >
          {recCenter.address}
        </Box>
        <Box
          fontWeight="bold"
          textAlign={"left"}
          fontSize="md"
          color="gray.600"
          px="20px"
        >
          Hours
        </Box>
        <Box
          textAlign={"left"}
          mb="10px"
          fontWeight="semibold"
          color="gray.600"
          px="20px"
          fontSize="sm"
        >
          {recCenter.opening_hours}
        </Box>

        <Box
          fontWeight="bold"
          textAlign={"left"}
          fontSize="md"
          color="gray.600"
          px="20px"
        >
          Description
        </Box>
        <Box
          textAlign={"left"}
          fontWeight="semibold"
          color="gray.600"
          px="20px"
          maxW="400px"
          fontSize="sm"
        >
          {recCenter.description}
        </Box>
      </>
    </Box>
  );
}

export default RecCenterCard;
