
import { Suspense } from 'react'
import CountriesList from './(countries)/CountriesList'
import SkeletonLoader from './(countries)/skeleton'



export default async function CountriesPage() {

  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags,cca3') // Fetch once on the server

  const countries = await res.json()




  return (
    <Suspense fallback={<SkeletonLoader />}>

      <CountriesList countries={countries} />

    </Suspense>


  )
}