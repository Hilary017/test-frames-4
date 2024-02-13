// import { NextRequest, NextResponse } from 'next/server';

// async function getResponse(req: NextRequest): Promise<NextResponse> {
//   const searchParams = req.nextUrl.searchParams
//   const id:any = searchParams.get("id")
//   const idAsNumber = parseInt(id)

//   const nextId = idAsNumber + 1

//   if(idAsNumber === 7){
//       return new NextResponse(`<!DOCTYPE html><html><head>
//     <title>This is frame 7</title>
//     <meta property="fc:frame" content="vNext" />
//     <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/7.png" />
//     <meta property="fc:frame:button:1" content="Cosmic Cowboys" />
//     <meta property="fc:frame:button:1:action" content="post_redirect" />
//     <meta property="fc:frame:button:2" content="Blog post Tutorial" />
//     <meta property="fc:frame:button:2:action" content="post_redirect" />
//     <meta property="fc:frame:button:3" content="Video Tutorial" />
//     <meta property="fc:frame:button:3:action" content="post_redirect" />
//     <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
//   </head></html>`);
//   } else {
//   return new NextResponse(`<!DOCTYPE html><html><head>
//     <title>This is frame ${id}</title>
//     <meta property="fc:frame" content="vNext" />
//     <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/${id}.png" />
//     <meta property="fc:frame:button:1" content="Next Page" />
//     <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
//   </head></html>`);
//   }
// }

// export async function POST(req: NextRequest): Promise<Response> {
//   return getResponse(req);
// }

// export const dynamic = 'force-dynamic';





// import { NextRequest, NextResponse } from 'next/server';

// async function getResponse(req: NextRequest): Promise<NextResponse> {
//   const searchParams = req.nextUrl.searchParams
//   const id:any = searchParams.get("id")
//   const idAsNumber = parseInt(id)

//   const nextId = idAsNumber + 1;
//   const randomInt = Math.floor(Math.random() * 100);
//   const imageUrlBase = `https://picsum.photos/id/${randomInt}/1146/600`;

//   if(idAsNumber === 7){
//       return new NextResponse(`<!DOCTYPE html><html><head>
//     <title>This is frame 7</title>
//     <meta property="fc:frame" content="vNext" />
//     <meta property="fc:frame:image" content="https://picsum.photos/id/${randomInt}/1146/600" />
//     <meta property="fc:frame:button:1" content="Cosmic Cowboys" />
//     <meta property="fc:frame:button:1:action" content="post_redirect" />
//     <meta property="fc:frame:button:2" content="Blog post Tutorial" />
//     <meta property="fc:frame:button:2:action" content="post_redirect" />
//     <meta property="fc:frame:button:3" content="Video Tutorial" />
//     <meta property="fc:frame:button:3:action" content="post_redirect" />
//     <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
//   </head></html>`);
//   } else {
//   return new NextResponse(`<!DOCTYPE html><html><head>
//     <title>This is frame ${id}</title>
//     <meta property="fc:frame" content="vNext" />
//     <meta property="fc:frame:image" content="https://picsum.photos/id/${randomInt}/1146/600" />
//     <meta property="fc:frame:button:1" content="Next Page" />
//     <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
//   </head></html>`);
//   }
// }

// export async function POST(req: NextRequest): Promise<Response> {
//   return getResponse(req);
// }

// export const dynamic = 'force-dynamic';




// ./app/frames/route.ts
 
// export { POST } from "frames.js/next/server";







// handle frame actions
// ./app/frames/route.ts

import { getFrameHtml, validateFrameMessage, Frame } from "frames.js";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Parse and validate the frame message
  const { isValid, message } = await validateFrameMessage(body);
  if (!isValid || !message) {
    return new Response("Invalid message", { status: 400 });
  }

  const randomInt = Math.floor(Math.random() * 100);
  const imageUrlBase = `https://picsum.photos/seed/${randomInt}`;

  // Use the frame message to build the frame
  const frame: Frame = {
    image: `https://picsum.photos/seed/${randomInt}/1146/600`,
    version: 'vNext',
    buttons: [
      {
        label: `Next (pressed by ${message.data.fid})`,
        action: 'post'
      },
    ],
    ogImage: `${imageUrlBase}/600`,
    postUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/frame`,
  };


  const html = getFrameHtml(frame);

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
    status: 200,
  });
}
