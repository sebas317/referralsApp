import Link from 'next/link'
import React from 'react'
import Button from '../../components/atoms/Button'

function campaigns() {

  const myCampaigns = [
    {
      id: 1, 
      "name": "First Campaign"
    },
    {
      id: 2,
      "name": "Second Campaign"
    },
    {
      id: 3,
      "name": "Third Campaign"
    },
    {
      id: 4,
      "name": "Fourth Campaign"
    },
    {
      id: 5,
      "name": "Fifth Campaign"
    },
    {
      id: 6,
      "name": "Sixth Campaign"
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen border-2 w-full mx-auto px-10 xl:w-2/4">
      <h1 className='text-gray-500 font-semibold text-3xl w-full'>Campañas</h1>
      <div className='w-4/5 flex flex-col justify-center items-center gap-5 h-max my-10 mx-auto'>
        {myCampaigns.map(campaign => (
          <div className='flex flex-row w-full justify-around'>
            <h2 className='text-gray-500 font-semibold text-2xl w-full underline'>{campaign.name}</h2>
            <Link href={`/app/campaigns/${campaign.id}`}>
              <Button>
                Editar
              </Button>
            </Link>
          </div>
        ))}
        <Link href="/app/campaigns/create" className='mt-10'>
          <Button>
            Agregar Campaña
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default campaigns