import { CSVLink, CSVDownload } from 'react-csv'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(/*{ profiles }*/) {
  const [profiles, setProfiles] = useState([])

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
      <h1>Profiles List Preview</h1>
      {profiles.map(profile => {
        return (
          <p key={profile.email}>
            {profile.name} : {profile.email}
          </p>
        )
      })}
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
