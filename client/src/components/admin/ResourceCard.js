import { Box, Image, Button } from '@chakra-ui/react'
function ResourceCard({resource, setEditModalOpen, setActiveResource}) {

  function handleClick(){
    setEditModalOpen(true)
    setActiveResource(resource.id)
  }
  
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' justifyContent="space-around">
      <Image src={resource.sports_type.image} width='full' height='220px'/>
      <Box p='6'>
        <Box display='flex' alignItems='center' justifyContent="space-between" >
          <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {resource.name}
          </Box>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {resource.sports_type.sports_type}
          </Box>
          <Box>
            <Button colorScheme='teal' size='sm' onClick={handleClick}>Edit</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ResourceCard;
