import { SimpleGrid, Button, Heading, Flex, Box} from '@chakra-ui/react'

import ResourceCreateModal from "./ResourceCreateModal";
import ResourceCard from "./ResourceCard";
import ResourceEditModal from './ResourceEditModal';
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

function Resources() {
  const { rec_center_id } = useParams();
  const [recCenter, setRecCenter] = useState([]);
  const [resources, setResources] = useState([]);
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [activeResourceId, setActiveResource] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3000/admin/rec_centers/${rec_center_id}/resources`, {
      method:'get',
      credentials: 'include'
      })
        .then(res => res.json())
        .then((data) => setResources(data))
      }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/rec_centers/${rec_center_id}`, {
      method:'get',
      credentials: 'include'
      })
    .then(res => res.json())
    .then((data)=> setRecCenter(data))
  }, [])

  function handleCreateOpen(){
    setCreateModalOpen(true)
  }

  function handleAddResource(newResource){
    setResources([...resources, newResource])
  }

  function removeResource(deletedResourceId){
    const updatedList = resources.filter((resource) => resource.id !== deletedResourceId)
    setResources(updatedList)
  }

  function updateResource(updatedResource){
    const updatedResourcesList = resources.map((resource) => {
      if (resource.id === updatedResource.id) {
        return updatedResource
      } else {
        return resource;
      }
    })
    setResources(updatedResourcesList)
  }

  const resourceItems = resources.map((resource) => (
    <ResourceCard key={resource.id} resource={resource} setEditModalOpen={setEditModalOpen} setActiveResource={setActiveResource}/>
  ))

  return (
    <Box>
      <Flex h='100px' justifyContent="space-between" alignItems="center" mx="15px">
        <Heading as='h1'>Resources at {recCenter.name}</Heading>
        <Button onClick={handleCreateOpen}>Add new resource</Button>
      </Flex>
      <Box>
        <SimpleGrid minChildWidth='320px' spacing='30px' mx="15px"  >
          {createModalOpen ? (
            <ResourceCreateModal setCreateModalOpen={setCreateModalOpen} recCenterId={rec_center_id} handleAddResource={handleAddResource}/>
            ) : null}
          {editModalOpen ? (
            <ResourceEditModal setEditModalOpen={setEditModalOpen} recCenterId={rec_center_id} activeResourceId={activeResourceId} removeResource={removeResource} updateResource={updateResource}/>
            ) : null}
          {resourceItems}
        </SimpleGrid>
      </Box>
    </Box>

  );
}

export default Resources;


