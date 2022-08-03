import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import RecCenterCard from "../reusables/RecCenterCard";

function RecCenters({recCenters}) {
  const recCenterCollection = recCenters.map((recCenter)=>(
    <RecCenterCard 
    key={recCenter.id} 
    recCenter={recCenter}
    />
))
  return (
    <Box>
      <Heading as='h1' m="15px">Manage My Rec Centers</Heading>
      <SimpleGrid minChildWidth='320px' spacing='10px' mx="15px">
        {recCenterCollection}
      </SimpleGrid>
    </Box>
  );
}

export default RecCenters;
