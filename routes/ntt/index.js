import { allRegions } from './recording_regions/allRegions';
import { recordingsByYear } from './recordingsByYear';
import { recordingById } from './recordingById';
import { recordingByEpisode } from './recordingByEpisode';
import { detailsByEpisode } from './detailsByEpisode';
import { detailsByRecordingId } from './detailsByRecordingId';
import { topCalls } from './topCalls'
import { recordingRegions } from './recording_regions/recordingRegions'
import { recordingRegionsById } from './recording_regions/recordingRegionsById'
import { regionsByRecordingId } from './recording_regions/regionsByRecordingId'
import { recordingRegionsByYear } from './recording_regions/recordingRegionsByYear'
import { recordingRegionsBYearDescription } from './recording_regions/recordingRegionsBYearDescription'
import { audioRegionFile } from './recording_regions/audioRegionFile'

export const nttRoutes = [
  allRegions,
  recordingsByYear,
  recordingById,
  recordingByEpisode,
  detailsByEpisode,
  detailsByRecordingId,
  topCalls,
  recordingRegions,
  recordingRegionsById,
  regionsByRecordingId,
  recordingRegionsByYear,
  recordingRegionsBYearDescription,
  audioRegionFile,
]