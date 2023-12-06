const API_URL = "https://restcountries.com/v3.1";

export async function getCountries() {
  const res = await fetch(`${API_URL}/all`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting countries");

  const data = await res.json();
  const georgiaIndex = data.findIndex((item) => item.name.common === "Georgia");
  data[georgiaIndex] = {
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
  };
  // console.log(data.length);
  // console.log(georgiaIndex, georgiaIndex);
  // console.log(data);

  return data;
}

export async function getRegion(region) {
  const res = await fetch(`${API_URL}/region/${region}`);
  if (!res.ok) throw Error(`Couldn't find a region`);

  const data = await res.json();

  const updatedData = data.filter((item) => item.name.common !== "Georgia");
  const acc = updatedData.map((item) => item.name);

  // const georgia = data.filter((item) => item.name.common === "Georgia");
  // // console.log(georgia);
  // console.log(updatedData);
  return updatedData;
}

export async function getCountry(name) {
  const res = await fetch(`${API_URL}/name/${name}`);
  if (!res.ok) throw Error(`Couldn't find country: ${name}`);

  const data = await res.json();

  const georgiaIndex = data.findIndex((item) => item.name.common === "Georgia");
  data[georgiaIndex] = {
    name: {common: "Georgia", official: "Georgia"},
    region: "Europe",
    capital: "Tbilisi",
    flags: {
      png: "https://flagcdn.com/w320/ge.png",
      svg: "https://flagcdn.com/ge.svg",
      alt: "The flag of Georgia has a white field with a large centered red cross that extends to the edges and divides the field into four quarters. A small red Bolnur-Katskhuri cross is centered in each quarter.",
    },
    cca3: "GEO",
    population: 3714000,
  };

  return data;
}

export async function getByCode(code) {
  const res = await fetch(`${API_URL}/alpha/${code}`);
  if (!res.ok) throw Error(`Couldn't find country:${code}`);

  const data = await res.json();

  return data;
}
