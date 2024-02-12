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
//     </>
//   );
// }




import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const randomInt = Math.floor(Math.random() * 100);
const imageUrlBase = `https://picsum.photos/id/${randomInt}/200/300`;

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: imageUrlBase,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
  // post_url: `${uri}/api/frame?id=1`,
});

console.log('This is the base url', process.env.NEXT_PUBLIC_BASE_URL);

export const metadata: Metadata = {
  title: 'Cosmic Cowboys',
  description: 'A frame telling the story of Cosmic Cowboys',
  openGraph: {
    title: 'Cosmic Cowboys',
    description: 'A frame telling the story of Cosmic Cowboys',
    images: [imageUrlBase],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
