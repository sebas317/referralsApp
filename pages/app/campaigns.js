import Link from 'next/link'
import React from 'react'
import Button from '../../components/atoms/Button'

function campaigns() {

  const isAdmin = true;

  const myCampaigns = [
    {
      id: 1, 
      "name": "First Campaign",
      "dia": 6,
    },
    {
      id: 2,
      "name": "Second Campaign",
      "dia": 8,
    },
    {
      id: 3,
      "name": "Third Campaign",
      "dia": 9,
    },
    {
      id: 4,
      "name": "Fourth Campaign",
      "dia": 33,
    },
    {
      id: 5,
      "name": "Fifth Campaign",
      "dia": 7,
    },
    {
      id: 6,
      "name": "Sixth Campaign",
      "dia": 27,
    },
  ];

  const AdminView = () => (
    <div className="flex flex-col justify-center items-center min-h-screen border-2 w-full mx-auto px-10 xl:w-2/4">
      <Link href="/app/dashboard/" className='text-gray-500 underline w-full text-left'>
        Volver
      </Link>
      <h1 className='text-gray-500 font-semibold text-3xl w-full'>Campañas</h1>
      <div className='w-full flex flex-col justify-center items-center gap-5 h-max my-10 mx-0 xl:mx-10 xl:w-3/4'>
        {myCampaigns.map(campaign => (
          <div className='flex flex-row w-full justify-between' key={campaign.id}>
            <Link href={`/app/campaigns/${campaign.id}`}>
              <h2 className='text-gray-500 font-semibold text-2xl w-full underline'>{campaign.name}</h2>
            </Link>
            <Link href={`/app/campaigns/edit/${campaign.id}/`}>
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
  );

  const UserView = () => (
    <div className="flex flex-col justify-center items-center min-h-screen border-2 w-full mx-auto px-10 xl:w-2/4">
      <Link href="/app/dashboard/" className='text-gray-500 underline w-full text-left'>
        Volver
      </Link>
      <h1 className='text-gray-500 font-semibold text-3xl w-full'>Seleccionar Campaña</h1>
      <div className='w-full flex flex-col justify-center items-center gap-5 h-max my-10 mx-0 xl:mx-10 xl:w-3/4'>
        {myCampaigns.map(campaign => (
          <div className='flex flex-row w-full justify-center' key={campaign.id}>
            <Link href={`/app/campaigns/${campaign.id}`}>
              <h2 className='text-gray-500 font-semibold text-2xl w-full underline'>{campaign.name} - Dia {campaign.dia}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    !!isAdmin ? <AdminView/> : <UserView/>
  )
}

export default campaigns