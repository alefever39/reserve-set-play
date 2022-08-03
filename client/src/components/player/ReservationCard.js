import { Flex, Box, Heading, Button } from '@chakra-ui/react'
function ReservationCard({reservation}) {
  console.log(reservation)

  function handleClick(){
    console.log(`Player wants to make a change to reservation id: ${reservation.id}`)
  }

  return (
    <Flex maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' justifyContent="space-around">
      <Box fontWeight='semibold' m="10px">
        {reservation.resource.name}
        <Box fontSize='s' >Reservation time: {reservation.reservation_time}</Box>
        <Box
          color='gray.500'
          letterSpacing='wide'
          fontSize='xs'
          m='2'
          textTransform='uppercase'
        >
         Address: {reservation.rec_center}, {reservation.rec_center_address}
        </Box>
        <Box>
          <Button colorScheme='teal' size='sm' onClick={handleClick} m="5px">Change</Button>
        </Box>
      </Box>   
    </Flex>
  );
}

export default ReservationCard;
