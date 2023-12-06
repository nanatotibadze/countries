import classes from "./Home.module.css";
import Search from "../components/Search";
import Countries from "../components/Countries";
import {useLoaderData} from "react-router-dom";
import {getRegion} from "../services/apiCountries";

function Region() {
  const region = useLoaderData();
  // const result = region.filter((word) => word.name.common !== "Georgia");

  // console.log(result);

  // const dateOne = region.filter((item) => item.common.name !== "Georgia");
  // console.log(dateOne);
  // if (georgiaIndex > -1) let dataOne= ;

  // if (georgiaIndex > -1)
  //   return region.filter((item) => item.common.name !== "Georgia");
  // region[georgiaIndex] = {
  //   name: {common: "Georgia", official: "Georgia"},
  //   region: "Europe",
  //   capital: "Tbilisi",
  //   flags: {
  //     png: "https://flagcdn.com/w320/ge.png",
  //     svg: "https://flagcdn.com/ge.svg",
  //     alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
  //   },
  //   population: 3714000,
  // };
  // console.log(georgiaIndex);
  // let updatedData;
  // updatedData = region.filter((item) => item.name.common !== "Georgia");

  // updatedData = [
  //   ...region,
  //   {
  //     name: {common: "Georgia", official: "Georgia"},
  //     region: "Europe",
  //     capital: "Tbilisi",
  //     flags: {
  //       png: "https://flagcdn.com/w320/ge.png",
  //       svg: "https://flagcdn.com/ge.svg",
  //       alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
  //     },
  //     population: 3714000,
  //   },
  // ];

  // if (params.regionName === "asia")
  //   updatedData = data.filter((item) => item.name.common !== "Georgia");

  // if (params.regionName === "europe")
  //   updatedData = [
  //     ...data,
  //     {
  //       name: {common: "Georgia", official: "Georgia"},
  //       region: "Europe",
  //       capital: "Tbilisi",
  //       flags: {
  //         png: "https://flagcdn.com/w320/ge.png",
  //         svg: "https://flagcdn.com/ge.svg",
  //         alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
  //       },
  //       population: 3714000,
  //     },
  //   ];

  return (
    <section className={classes.home}>
      <Search />
      <Countries countries={region} />
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
// export async function loader() {
//   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set

//   const data = await getCountries();

//   return data;
// }

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({params}) {
  const data = await getRegion(params.regionName);

  // if (params.regionName === "asia") console.log(":Dasda");

  // let updatedData;
  // if (params.regionName === "asia")
  //   updatedData = data.filter((item) => item.name.common !== "georgia");
  // console.log(updatedData);
  // data.filter((item) => item.name.common !== "georgia");

  // if (params.regionName === "europe")
  //   updatedData = [
  //     ...data,
  //     {
  //       name: {common: "Georgia", official: "Georgia"},
  //       region: "Europe",
  //       capital: "Tbilisi",
  //       flags: {
  //         png: "https://flagcdn.com/w320/ge.png",
  //         svg: "https://flagcdn.com/ge.svg",
  //         alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
  //       },
  //       population: 3714000,
  //     },
  //   ];
  // if (params.regionName === "asia")
  //   data.filter((item) => item.name.common !== "georgia");
  // console.log(updatedData);
  // data.filter((item) => item.name.common !== "georgia");
  // console.log(data);
  if (params.regionName === "europe")
    data.push({
      name: {common: "Georgia", official: "Georgia"},
      region: "Europe",
      capital: "Tbilisi",
      flags: {
        png: "https://flagcdn.com/w320/ge.png",
        svg: "https://flagcdn.com/ge.svg",
        alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
      },
      population: 3714000,
      cca3: "GEO",
    });
  // if (params.regionName === "asia")
  // data.filter((item) => item.name.common !== "georgia");
  return data;
}
export default Region;
