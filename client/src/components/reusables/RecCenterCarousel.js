import RecCenterCard from "./RecCenterCard";
import { Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function RecCenterCarousel({
  recCenters,
  setDisplayRecCenter,
  admin,
  displayRecCenter,
}) {
  const [displayedCard, setDisplayedCard] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    recCenters.forEach((recCenter, i) => {
      if (recCenter.id === displayRecCenter.id) {
        setDisplayedCard(i);
      }
    });
  }, []);

  const recCentersCards = recCenters.map((recCenter) => {
    return (
      <Box m="20px">
        <RecCenterCard key={recCenter.id} recCenter={recCenter} admin={admin} />
      </Box>
    );
  });

  function handleLeftClick() {
    if (displayedCard > 0) {
      setDisplayedCard(displayedCard - 1);
      setDisplayRecCenter(recCenters[displayedCard - 1]);
    } else {
      setDisplayedCard(recCenters.length - 1);
      setDisplayRecCenter(recCenters[recCenters.length - 1]);
    }
  }

  function handleRightClick() {
    setDisplayedCard((displayedCard + 1) % recCenters.length);
    setDisplayRecCenter(recCenters[(displayedCard + 1) % recCenters.length]);
  }

  function showBorder(e) {
    e.target.style.border = "solid 3px blue";
  }

  function hideBorder(e) {
    e.target.style.border = "none";
  }

  const indicators = recCenters.map((recCenter, i) => {
    if (i === displayedCard) {
      return (
        <Button
          key={i}
          onClick={() => {
            setDisplayedCard(i);
            setDisplayRecCenter(recCenters[i]);
          }}
          variant="link"
        >
          ◈
        </Button>
      );
    } else {
      return (
        <Button
          key={i}
          onClick={() => {
            setDisplayedCard(i);
            setDisplayRecCenter(recCenters[i]);
          }}
          variant="link"
        >
          ◇
        </Button>
      );
    }
  });

  // for (let i = 0; i < recCenters.length; i++) {
  //   if (i === displayedCard) {
  //     setIndicators([...indicators, <span>◈</span>]);
  //   } else {
  //     setIndicators([...indicators, <span>◇</span>]);
  //   }
  // }

  return (
    <>
      <Flex justify="center" align="center">
        <Button
          onClick={handleLeftClick}
          colorScheme="teal"
          border="none"
          variant="outline"
        >
          ◀
        </Button>
        {recCentersCards ? recCentersCards[displayedCard] : null}
        <Button
          onClick={handleRightClick}
          colorScheme="teal"
          border="none"
          variant="outline"
        >
          ▶
        </Button>
      </Flex>
      <Flex justify="center" align="center">
        <p>{indicators}</p>
      </Flex>
    </>
  );
}

export default RecCenterCarousel;
