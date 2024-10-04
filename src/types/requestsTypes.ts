type Body = {
  About: string;
  Background: string;
};

export type Episode = {
  Id: number;
  Audio: string;
  Category: string;
  CreateDate: string;
  Description: string;
  Episode: string;
  Epoch: number;
  Icon: string;
  Image: string;
  MediaName: string;
  RemoteId: string;
  Title: string;
};

export type GetTimelineResponse = {
  Body: Body[];
  Timeline: Episode[];
};

export type GetContent = {
  podcastEpisodes: Episode[];
} & IAboutUsData;

export type IAboutUsData = {
  aboutUs: string;
  backgroundImage: string;
};
