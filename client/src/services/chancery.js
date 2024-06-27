import api from './apiConfig';

export const getEquityTexts = async () => {
  try {
    const res = await api.get('/texts/equity');
    return res.data;
  } catch(err) {
    console.log(`(getEquityTexts)`, err)
    throw err;
  }
};

export const getEquityTextById = async (id) => {
  if (!id) return []
  
  try {
    const res = await api.get(`/texts/equity/toc/id/${id}`);
    return res.data;
  } catch(err) {
    console.log(err)
    throw err;
  }
};

export const getLevel2Data = async id => {
  try {
    const res = await api.get(`/texts/equity/level2/${id}`)
    return res.data;
  } catch (err) {
    console.log(err)
    // throw err;
  }
}

async function getTextLvlN(id, level) {
  try {
    const res = await api.get(`/texts/equity/level/${level}/${id}`)
  } catch(err) {
    console.log(err)
  }
}

export const getFullText = async id => {
  try {
    const res = await api.get(`/texts/equity/full/${id}`)
    return res.data;
  } catch (err) {
    console.log(err)
    // throw err;
  }
}
