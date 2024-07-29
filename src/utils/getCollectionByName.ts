import {getCollection,type ContentEntryMap} from "astro:content";
import { isProd } from "@utils/isProd";

export const getCollectionByName = async (name: keyof ContentEntryMap) => {
  return await getCollection(name, ({ data }) => {
    return isProd ? data.draft !== true : true;
  });
}
