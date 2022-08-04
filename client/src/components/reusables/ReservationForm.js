import { Box } from "@chakra-ui/react";

function ReservationForm({ displayReservation }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = "";
  let dayOfTheWeek = "";
  let day = "";
  let month = "";
  let year = "";
  let displayDate = "";

  if (displayReservation !== "") {
    date = new Date(displayReservation.date);
    dayOfTheWeek = weekday[date.getDay()];
    day = String(date.getDate()).padStart(2, "0");
    month = String(date.getMonth() + 1).padStart(2, "0");
    year = date.getFullYear();
    displayDate = month + "/" + day + "/" + year;
  }

  return (
    <Box
      border="2px"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      py="15px"
      my="20px"
    >
      <Box color="gray.600" fontWeight="Bold" fontSize="xl" px="60px">
        Reservation Details
      </Box>
      <Box
        borderBottom="2px"
        borderColor="gray.200"
        mx="40px"
        mt="10px"
        mb="15px"
      ></Box>
      {displayReservation !== "" ? (
        <>
          <Box
            fontWeight="bold"
            textAlign={"left"}
            fontSize="lg"
            color="gray.600"
            px="40px"
          >
            Date
          </Box>
          <Box
            textAlign={"left"}
            mb="15px"
            fontWeight="semibold"
            color="gray.600"
            px="40px"
          >
            {dayOfTheWeek}, {displayDate}
            {"  "}•{"  "}
            {displayReservation.time}:00
          </Box>
          <Box
            fontWeight="bold"
            textAlign={"left"}
            fontSize="lg"
            color="gray.600"
            px="40px"
          >
            Location
          </Box>
          <Box
            textAlign={"left"}
            mb="15px"
            fontWeight="semibold"
            color="gray.600"
            px="40px"
          >
            {displayReservation.recCenter.name} •{" "}
            {displayReservation.resourceName}
          </Box>
        </>
      ) : (
        <Box fontWeight="semibold" color="gray.600" px="15px">
          Choose timeslot to view reservation details
        </Box>
      )}
    </Box>
  );
}

export default ReservationForm;
