import {
  Flex,
  Spacer,
  Box,
  Button,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function DateCarousel() {
  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
  }

  function getNextDay(date = new Date()) {
    const next = new Date(date.getTime());
    next.setDate(date.getDate() + 1);

    return next;
  }

  function buildYearMonthDay(date = new Date()) {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" : ""}${
      date.getMonth() + 1
    }-${date.getDay() < 10 ? "0" : ""}${date.getDay()}`;
  }

  function buildDayOfWeekMonthDay(date = new Date()) {
    return date.toString().slice(0, 10);
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [savedDate, setSavedDate] = useState(buildYearMonthDay());
  const [displayedDate, setDisplayedDate] = useState(buildDayOfWeekMonthDay());

  function handleLeftClick() {
    const newDate = getPreviousDay(currentDate);
    setCurrentDate(newDate);
    setDisplayedDate(buildDayOfWeekMonthDay(newDate));
    setSavedDate(buildYearMonthDay(newDate));
  }

  function handleRightClick() {
    const newDate = getNextDay(currentDate);
    setCurrentDate(newDate);
    setDisplayedDate(buildDayOfWeekMonthDay(newDate));
    setSavedDate(buildYearMonthDay(newDate));
  }

  return (
    <>
      <Flex justify="center" align="center">
        <Button
          onClick={handleLeftClick}
          colorScheme="teal"
          border="none"
          variant="link"
        >
          ←
        </Button>
        <Box w="100px">{displayedDate}</Box>
        <Button
          onClick={handleRightClick}
          colorScheme="teal"
          border="none"
          variant="link"
        >
          →
        </Button>
      </Flex>
    </>
  );
}

export default DateCarousel;
