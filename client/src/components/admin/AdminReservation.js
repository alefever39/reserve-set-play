import { Box, Button } from "@chakra-ui/react";

function AdminReservation({handleAdminReservation}) {
  return (
    <Box>
        <Button colorScheme='teal' variant='solid' onClick={handleAdminReservation}>Create block</Button>
    </Box>
  );
}

export default AdminReservation;
