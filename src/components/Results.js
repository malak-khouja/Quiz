import { useContext,useEffect,useState } from 'react';
import {nameContext} from './UserContext';
import '../App.css';

export default function Results(props) {
    const { userName } = useContext(nameContext);
    console.log("User name:", userName);
    
    const [artwork, setArtwork] = useState({});
    const optionToElement = {
    "Red 🔴": "Fire",
    "Blue 🔵": "Water",
    "Green 🟢": "Earth",
    "Yellow 🟡": "Air",

    "Reading 📖": "Air",
    "Sports 🏀": "Fire",
    "Gaming 🎮": "Earth",
    "Traveling ✈️": "Water",

    "Summer ☀️": "Fire",
    "Winter ❄️": "Water",
    "Spring 🌸": "Earth",
    "Autumn 🍂": "Air",

    "Lion 🦁": "Fire",
    "Snake 🐍": "Water",
    "Badger 🦡": "Earth",
    "Penguin 🐧": "Air",
    };

    function determineElement(answers) {
        const counts = { Fire: 0,Water: 0,Earth: 0,Air: 0,};
        answers.forEach(function(answer) {
           const element = optionToElement[answer];
           if (element) {
                counts[element]++;
            }
        });
        let dominant = null;
        let max = 0;
        for(let element in counts){
            if(counts[element]>max){
                max = counts[element];
                dominant = element;
            }
        }
        return dominant;
    };

    useEffect(function(){
      async function fetchRandomArtwork() {
    try {
      const resp = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects");
      const data = await resp.json();
      const ids = data.objectIDs;

      const randomIndex = Math.floor(Math.random() * ids.length);
      const randomId = ids[randomIndex];

      const artResp = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomId}`);
      const artData = await artResp.json();

      if (artData.primaryImageSmall) {
        setArtwork(artData);
      } else {
        fetchRandomArtwork();
      }
    } catch (err) {
      console.error("Error fetching artwork:", err);
    }
  }

  fetchRandomArtwork();
}, []);

  return (
    <div>
      <p><strong>{userName || "Guest"}</strong>, your element is: {determineElement(props.answers)}</p>
       {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img src={artwork.primaryImage} alt={artwork.title} />
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}