import api from './apiConfig';

export const getRecordings = async () => {
  try {
    const res = await api.get('/ntt/recordings');
    return res.data;
  } catch(err) {
    throw err;
  }
};

export const getRecording = async id => {
  try {
    const res = await api.get(`/ntt/recordings/${id}`);
    console.log(res.data)
    return res.data;
  } catch(err) {
    throw err;
  }
};

export const getRecordingDetail = async id => {
  try {
    const res = await api.get(`/ntt/regions/recording/${id}`)
    return res.data
  } catch(err) {
    throw err;
  }
} 

export const getRecordingRegionsByParentId = async id => {
  try {
    const res = await api.get(`/ntt/regions/recording/${id}`)
    return res.data
  } catch(err) {
    throw err;
  }
}

export const getRecordingsByYear = async year => {
  try {
    const res = await api.get(`/ntt/recordings/year/${year}`)
    return res.data
  } catch(err) {
    throw err;
  }
}
export const getRecordingsTopCalls = async () => {
  try {
    const res = await api.get(`/ntt/topcalls`)
    return res.data
  } catch(err) {
    throw err;
  }
}
