import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { imageUrlBuilder } from '@sanity/image-url';
// import { sanityClient } from '@sanity/client';


export const client=sanityClient({
    projectId:'7e2bjjnk',
    dataset:'production',
    apiVersion:'2023-06-08',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);