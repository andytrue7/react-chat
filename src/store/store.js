const getResource = async () => {
  const url = 'https://edikdolynskyi.github.io/react_sources/messages.json';
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} received status ${res.status}`);
  }

  return res.json();
}

export default getResource;


