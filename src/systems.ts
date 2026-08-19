import { getCollection } from "astro:content";

/** All systems, those with a live demo link first. */
export const getSystems = async () =>
  (await getCollection("systems")).sort((a, b) => Number(!!b.data.link) - Number(!!a.data.link));
