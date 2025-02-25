import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // Store input value
  const [items, setItems] = useState(["lool.oo67",
    "4arij1",
    "jana.m4542",
    "jood__md",
    "amjaad1774",
    "sara_o344",
    "sahab.a11",
    "amool7138",
    "sama96422",
    "deem23450",
    "ranee_m563",
    "reaby255",
    "rima5529a",
    "layan71132",
    "ahlam0781",
    "mrwa2977",
    "meme1233300",
    "mashaael77",
    "0needa1",
    "noody1544",
    "uzx1_2",
    "pqow.qk",
    "hoda25216",
    "hour18581",
    "wmj2379",
    "btrfytm",
    "rm93_ax18",
    "nooon09842020",
    "razanjou",
    "moon561200",
    "123fo4.",
    "wwed9913",
    "biya.diaries",
    "jojojouuuf6",
    "_7_h_xx",
    "3wvrll_",
    "mister_mujeeb",
    "afnan12477",
    "futoon255",
    "fatimaa2772",
    "farah.1080",
    "vvff255",
    "rateel275",
    "enas0355",
    "hadeel.5070",
    "lenaa.60",
    "rodymorad72",
    "abl203959",
    "hooor142000",
    "aljumahrawan",
    "bash10063",
    "west8i9",
    "ri.7_al",
    "aa_2079z",
    "hui.op0",
    "m_shl099",
    "z.00_x",
    "ki22ai",
    "elee.n5774",
    "enas_2499",
    "danahasan154",
    "wafahasan1",
    "jenanss2023",
    "ghzlih1_24",
    "amalonly74",
    "zahr_zuhar",
    "elegantt2024",
    "ffss3259",
    "wjdaan76",
    "fate_maafk",
    "its_fofa92",
    "nawfaf_jl2",
    "lhnf358",
    "zizxpage",
    "_rrxbl.21",
    "sedrafaris",
    "um.abdulrehman_",
    "x.b7._",
    "al2nw.a",
    "mliii_s",
    "jamoola120",
    "zennnnna_hllllllllo",
    "amool7138",
    "i.reemi",
    "abdrhman6n",
    "zomorda5001",
    "ruba.khalid7",
    "m0qgdf_",
    "dsopuv",
    "a12nw.a",
    "shrooq_sunrise",
    "um_ishaq._",
    "layaan1._",
    "bxm.a7",
    "abeermoosa0",
    "vd_4c8",
    "alanud_hm00oo_00ooooooo",
    "w.11.21",
    "qiakiwiwi",
    "sv7xr",
    "ha_4d",
    "avetis7annn",
    "0i_ml",
    "aboud_20_",
    "talial35799",
    "xr4zan",
    "lodi_1421",
    "nurhaan_mansour",
    "ai22hi",
    "lunafaisal87",
    "naw.91",
    "um_abo.ody",
    "a.__ma.7",
    "fa.res2902",
    "sara_mmmmmmmk",
    "anoodfaisal89",
    "talahishammahmoud",
    "basimhisham",
    "bdllhbw.tl",
    "av7nn",
    "hemoooo364",
    "sv5bd",
    "a_aaa07",
    "yaa.78",
    "ii4xn.j",
    "princess_cute_sara",
    "il_xso",
    "dina_ahmed",
    "yaso_198",
    "azo0oz._7",
    "om__rahaf9",
    "somo533",
    "lxi.9t",
    "mosta3mal.alhasa",
    "roroo_aa8",
    "ghzalan987",
    "roz_9.9.9",
    "omea.li",
    "ahtwene5",
    "aafffff123",
    "zeze7744999",
    "nouf__77n",
    "mrym_flth",
    "um.hiiind_",
    "ftwmh7007",
    "jwjw7047",
    "zxooz4567",
    "fjvv779",
    "en.8797",
    "joooj3210",
    "isakoura",
    "006e1",
    "6e9e",
    "sha6rh",
    "k3kc",
    "1iicute",
    "eveline.ii",
    "krzah32",
    "sm7ah.0",
    "iii7b1",
    "yl6l"
  ]); // Store array of items
  const [loading, setLoading] = useState(false); // Show loading state
  const [counter, setCounter] = useState(""); // Show loading state

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  console.log(counter);

  // const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]; // Predefined names
  const [randomName, setRandomName] = useState(""); // Store the selected name
  const [timeoutCount, setTimeoutCount] = useState(0);

  const generateRandomName = () => {
    setLoading(true); // Show loading state

    let counter = 6;
    const interval = setInterval(() => {
      counter--;
      setCounter(counter);
      // console.log(`Seconds elapsed: ${counter}`);
      if (counter === 10) {
        clearInterval(interval); // Stop after 10 seconds
      }
    }, 1000); // Print every second

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length); // Get random index
      setRandomName(items[randomIndex]);
      clearInterval(interval); // Ensure interval stops when name is set
    }, 6000);
  };
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Full viewport height
        width: "100%",
      }}
    >


      <div className="p-4 max-w-md mx-auto text-center">
        <button style={{marginTop:"100px"}}
          onClick={generateRandomName}
          className="bg-success text-white px-4 py-2 rounded"
        >
          Generate Name
        </button>
        <div className="text-center  bg-white shadow counter">
          <p style={{ fontSize: "40px" }}>{counter}</p>
        </div>
        {randomName && (
          <p className="mx-auto">
            <span
              className=" shadow win"
              style={{ margin: "60px", color: "red", fontSize: "30px" }}
            >
              w.11.21
            </span>
            <span
              className=" shadow win"
              style={{ margin: "60px", color: "red", fontSize: "30px" }}
            >
              {randomName}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
