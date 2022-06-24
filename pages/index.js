import Router, { useRouter } from 'next/router'
import { CSVLink } from 'react-csv'
import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import axios from 'axios'
import Link from 'next/link'

function go(id) {
  Router.push(`/api/profile/${id}`)
}

export default function Home(/*{ profiles }*/) {
  const [profiles, setProfiles] = useState([])
  const router = useRouter()

  useEffect(() => {
    axios
      .get('api/profiles')
      .then(response => setProfiles(response.data))
      .catch(rejected => {
        console.log(rejected)
      })
  }, [])

  console.log(profiles)
  const headers = [
    { label: 'name', key: 'name' },
    { label: 'email', key: 'email' }
  ]

  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: profiles
  }

  return (
    <>
      <h1 className="text-red-500">Profiles List Preview</h1>
      <h2>pathname:- {() => router.push(`/api/profile/1`).then().pathname}</h2>
      <h2>asPath:- {router.asPath}</h2>
      {profiles.map(profile => {
        return (
          <>
            <p key={profile.email}>
              {profile.name} : {profile.email}
            </p>
            <button onClick={() => Router.push(`api/profile/${profile.id}`)}>
              go push
            </button>

            <button onClick={() => console.log(`api/profile/${profile.id}`)}>
              go
            </button>
            <br />
            <br />
            <QRCodeSVG value="" />
            <br />
          </>
        )
      })}
      <br />
      <CSVLink {...csvReport}>EXPORT CSV</CSVLink>
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/profiles');
//   const profiles = await res.json();

//   return {
//     props: {
//       profiles,
//     },
//   };
// }
