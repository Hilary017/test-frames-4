// import { getFrameMetadata } from '@coinbase/onchainkit';
// import type { Metadata } from 'next';

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: "Begin"
//     }
//   ],
//   image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/0.png`,
//   post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
// });

// export const metadata: Metadata = {
//   title: 'Cosmic Cowboys',
//   description: 'A frame telling the story of Cosmic Cowboys',
//   openGraph: {
//     title: 'Cosmic Cowboys',
//     description: 'A frame telling the story of Cosmic Cowboys',
//     images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/0.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <h1>Cosmic Cowboys</h1>
//       <img src='https://picsum.photos/id/88/1146/600' alt='a pix' />
//     </>
//   );
// }









// page that renders a frame
// ./app/page.tsx

import { Frame, getFrameFlattened } from "frames.js";
import type { Metadata } from "next";

// Declare the frame
const initialFrame: Frame = {
  image: "https://picsum.photos/seed/frames.js/1146/600",
  version: "vNext",
  buttons: [
    {
      label: "Random image",
      action: 'post'
    },
  ],
  postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/frame`,
};

// Export Next.js metadata
export const metadata: Metadata = {
  title: "Random Image Frame",
  description: "This is an example of a simple frame using frames.js",
  openGraph: {
    images: [
      {
        url: "https://picsum.photos/seed/frames.js/600",
      },
    ],
  },
  other: getFrameFlattened(initialFrame),
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
      <img src='https://picsum.photos/id/88/1146/600' alt='a pix' />
    </>
  );
}










// import { getFrameMetadata } from '@coinbase/onchainkit';
// import type { Metadata } from 'next';

// const randomInt = Math.floor(Math.random() * 100);
// const imageUrlBase = `https://picsum.photos/id/${randomInt}/1146/600`;

// const frameMetadata = getFrameMetadata({
//   buttons: [
//     {
//       label: 'Begin'
//     }, 
//     {
//       label: 'Start'
//     }
//   ],
//   image: imageUrlBase,
//   post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
// });

// export const metadata: Metadata = {
//   title: 'Lary',
//   description: 'This is a story about Lary',
//   openGraph: {
//     title: 'Lary',
//     description: 'A frame telling the story of Lary',
//     images: [`https://picsum.photos/id/${randomInt}/1146/600`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

// export default function Page() {
//   return (
//     <>
//       <h1>Cosmic Cowboys</h1>
//     </>
//   );
// }
