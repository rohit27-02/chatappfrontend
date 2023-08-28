import React from 'react'
import Contactcard from './Contactcard';
import {useQuery} from "@tanstack/react-query";

const Contacts = () => {
  const { isLoading, error, data } = useQuery(
   { queryKey: ['friendlist'],
     queryFn: () =>
    fetch("http://localhost:3001/api/friends/1").then(res =>
      res.json()
    )}
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (

    <div className='flex overflow-y-scroll h-screen flex-col gap-2 p-4'>
      {
        data?.users.map((item) => (
          <Contactcard contact={item} />
        ))
      }
    </div>
  )
}

export default Contacts