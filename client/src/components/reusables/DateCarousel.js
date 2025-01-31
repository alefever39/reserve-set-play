import {
  Flex,
  Spacer,
  Box,
  Button,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  getPreviousDay,
  getNextDay,
  buildDayOfWeekMonthDay,
  buildYearMonthDay,
} from "../helperFunctions.js";

function DateCarousel({ displayDate, setDisplayDate }) {
  ///////// State
  const [carouselDate, setCarouselDate] = useState(
    buildDayOfWeekMonthDay(displayDate)
  );
  const today = new Date();

  function handleLeftClick() {
    const newDate = getPreviousDay(displayDate);
    setCarouselDate(buildDayOfWeekMonthDay(newDate));
    setDisplayDate(newDate);
  }

  function handleRightClick() {
    const newDate = getNextDay(displayDate);
    setCarouselDate(buildDayOfWeekMonthDay(newDate));
    setDisplayDate(newDate);
  }

  function backButton() {
    if (buildYearMonthDay(displayDate) === buildYearMonthDay(today)) {
      return (
        <Button
          onClick={handleLeftClick}
          colorScheme="teal"
          border="none"
          variant="link"
          isDisabled
          fontSize="xl"
        >
          ←
        </Button>
      );
    } else {
      return (
        <Button
          onClick={handleLeftClick}
          colorScheme="teal"
          border="none"
          variant="link"
          fontSize="xl"
        >
          ←
        </Button>
      );
    }
  }

  return (
    <>
      <Flex justify="center" align="center">
        {backButton()}
        <Box w="200px" fontWeight={"bold"} fontSize="xl">
          {carouselDate}
        </Box>
        <Button
          onClick={handleRightClick}
          colorScheme="teal"
          border="none"
          variant="link"
          fontSize="xl"
        >
          →
        </Button>
      </Flex>
    </>
  );
}

export default DateCarousel;
