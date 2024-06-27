import { allChannels } from "./allChannels";
import { favoriteChannels } from "./favoriteChannels";
import { videosByChannel } from './videosByChannel';
import { channelsByMostVideos } from './channelsByMostVideos';

export const ytubeRoutes = [
  allChannels,
  favoriteChannels,
  videosByChannel,
  channelsByMostVideos,
]