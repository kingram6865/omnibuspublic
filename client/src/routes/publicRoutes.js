import { Route } from 'react-router-dom'
import Home from '../screens/Home/Home'
import Law from '../screens/Law/Law'
import NTT from '../screens/NTT/NTT'
import Recordings from '../screens/NTT/Recordings'
import RecordingRegions from '../screens/NTT/RecordingRegions';
import RecordingYear from '../screens/NTT/RecordingYear'
import TopCalls from '../screens/NTT/TopCalls'
import { EquityTexts  } from '../screens/Equity/EquityTexts'
import { Testing } from '../screens/Equity/Testing'
import  Math from '../screens/Math/Math'
import Youtube from '../screens/Youtube/Youtube'
import RPG from '../screens/RPG/RPG'
import Torrents from '../screens/Torrents/Torrents'

export const publicRoutes = [
  {path: "/", element: <Home />},
  {path: "/law", element: <Law />},
  {path: "/ntt", element: <NTT />},
  {path: "/math", element: <Math />},
  {path: "/youtube", element: <Youtube />},
  {path: "/rpg", element: <RPG />},
  {path: "/torrents", element: <Torrents />},
  {path: "/ntt/recordings", element: <Recordings />},
  {path: "/ntt/recordings/2009", element: <RecordingYear details={{ "year":"2009" }} />},
  {path: "/ntt/recordings/2010", element: <RecordingYear details={{ "year":"2010" }} />},
  {path: "/ntt/recordings/2011", element: <RecordingYear details={{ "year":"2011" }} />},
  {path: "/ntt/recordings/2012", element: <RecordingYear details={{ "year":"2012" }} />},
  {path: "/ntt/recordings/2013", element: <RecordingYear details={{ "year":"2013" }} />},
  {path: "/ntt/recordings/2014", element: <RecordingYear details={{ "year":"2014" }} />},
  {path: "/ntt/recordings/topcalls", element: <TopCalls details={{ "topcalls":"1" }} />},
  {path: "/ntt/recording/regions", element: <RecordingRegions />},
  {path: "/equity", element: <EquityTexts />},
  {path: "/equity/test", element: <Testing />},
].map((props, index) => <Route key={index} {...props} />)