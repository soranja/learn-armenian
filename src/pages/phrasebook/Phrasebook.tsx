import React, { useState, useEffect } from "react";
import { ICats } from "../../interfaces/cats";
import axios from "axios";

function Phrasebook() {
  const [catsData, setCatsData] = useState<ICats[] | null>(null);

  useEffect(() => {
    const fetchCatsData = async () => {
      const response = await axios.get("https://cat-fact.herokuapp.com/facts");

      setCatsData(response.data);
    };

    fetchCatsData();
  }, []);

  return (
    <div className="Phrasebook" style={{ padding: 10 }}>
      {catsData?.map((cat) => {
        return <p key={cat._id}>{cat.text}</p>;
      })}
    </div>
  );
}

export default Phrasebook;
