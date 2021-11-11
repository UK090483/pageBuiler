// import React from 'react';

// import ProjectCard from '@src/services/pageBuilder/pageTypes/project/projectCard';
// import {
//   projectCardQuery,
//   ProjectCardResult,
// } from '@src/services/pageBuilder/pageTypes/project/projectQueries';
// import { AppLocations } from 'types';

// export const listingBlockQuery = `
// _type == "listing" => {
//  ...,
//   'items': *[ _type == ^.contentType ][]{
//     ${projectCardQuery}
//   }
// }
// `;

// export interface ListingBlogResult {
//   _type: 'listing';
//   _key: string;
//   items: ProjectCardResult[];
// }

// export interface ListingBlockProps extends ListingBlogResult {
//   lang: AppLocations;
// }

// const ListingBlock: React.FC<ListingBlockProps> = (props) => {
//   const { items } = props;

//   return (
//     <div>
//       {items.map((item, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <ProjectCard key={index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default ListingBlock;

export {};
