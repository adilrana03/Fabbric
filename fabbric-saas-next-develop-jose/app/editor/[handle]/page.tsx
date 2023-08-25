'use client';

import { useState, FC } from "react";

import ListMaleFamilies from '@/services/getEditorMaleFamilies';
import ListSubfamilies from '@/services/getEditorSubfamilies';
import Canvas3dObject from "@/components/canvas/3dcanvas";
import GarmentEditor from "@/components/editor/garmentEditor";





interface pageProps {
  params: { handle: string }
}


const page: FC<pageProps> = ({ params }) => {
  // const [selected, setSelected] = useState(true);



 



  return (
    <>
      <div className="mt-10 flex">

        <nav className="w-80 h-screen overflow-y-auto bg-white ml-6 mr-6 pt-10 border-solid-blue border-l-2 border-r-2" style={{ borderColor: "var(--colors-primary)" }}>
          <h1 className='pl-4 text-xl'>FILTERS</h1>
          {params.handle === 'male' ? (
            <>
              <div className='h-6 mt-2 w-full text-white pl-4 bg-[#7745FF] text-sm text-start align-middle'>CHOOSE FAMILY</div>
              <ListMaleFamilies/>
              {/* <ListSubfamilies /> */}
            </>
          ) : params.handle === 'female' ? (
            <>
              <div className='h-6 mt-2 w-full text-white pl-4 bg-[#7745FF] text-sm text-start align-middle'>CHOOSE FAMILY</div>
              {/* <ListFemaleFamilies/> */}
            </>
          ) : params.handle === 'genderless' ? (
            <h1 className='bg-indigo-500 text-white'>
              IS GENDERLESS: {params.handle}, Attribute:
            </h1>
          ) : null}
        </nav>


        <div style={{ flex: 1 }}>


            <GarmentEditor/>

          {/* <Canvas3dObject/> */}

        </div>

      </div>
    </>
  );
}

export default page






// import type { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import { Suspense } from 'react';

// import Grid from '@/components/grid/index';

// import Footer from '@/components/layout-editor/footer';
// import ProductGridItems from '@/components/layout-editor/product-grid-items';
// import { AddToCart } from '@/components/cart/add-to-cart';
// import { Gallery } from '@/components/editor/gallery';
// import { VariantSelector } from '@/components/editor/variant-selector';
// import Prose from '@/components/prose';

// import { HIDDEN_PRODUCT_TAG } from '@/lib/constants';
// import { getProduct, getProductRecommendations } from '@/lib/shopify';
// import { Image } from '@/lib/shopify/types';

// export const runtime = 'edge';


// export async function generateMetadata({
//   params
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {

//   console.log("params ******************************************** ")
//   console.log(params)
//   console.log(params)
//   console.log(params)
//   console.log(params)


//   const product = await getProduct(params.handle);

//   if (!product) return notFound();

//   const { url, width, height, altText: alt } = product.featuredImage || {};
//   const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//   return {
//     title: product.seo.title || product.title,
//     description: product.seo.description || product.description,
//     robots: {
//       index: hide,
//       follow: hide,
//       googleBot: {
//         index: hide,
//         follow: hide
//       }
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt
//             }
//           ]
//         }
//       : null
//   };
// }








// export default async function ProductPage({ params }: { params: { handle: string } }) {
// //   const product = await getProduct(params.handle);

// //   if (!product) return notFound();

// //   const productJsonLd = {
// //     '@context': 'https://schema.org',
// //     '@type': 'Product',
// //     name: product.title,
// //     description: product.description,
// //     image: product.featuredImage.url,
// //     offers: {
// //       '@type': 'AggregateOffer',
// //       availability: product.availableForSale
// //         ? 'https://schema.org/InStock'
// //         : 'https://schema.org/OutOfStock',
// //       priceCurrency: product.priceRange.minVariantPrice.currencyCode,
// //       highPrice: product.priceRange.maxVariantPrice.amount,
// //       lowPrice: product.priceRange.minVariantPrice.amount
// //     }
// //   };


// let product = {
//     "title":"title1",
//     "priceRange":{
//         "maxVariantPrice":{
//             "amount":"15",
//             "currencyCode":"EUR"
//         }
//     },
//     "options":"options",
//     "variants":"variants",
//     "descriptionHtml":"html",
//     "availableForSale":"available",

//     "images":[
//         {
//             "url": "/img_02389",
//             "altText": "Images"
//         },
//     ],
// }


// return (
//     <div>
//       <script
//         type="application/ld+json"
//         // dangerouslySetInnerHTML={{
//         //   __html: JSON.stringify(productJsonLd)
//         // }}
//       />
//       <div className="lg:grid lg:grid-cols-6">
//         <div className="lg:col-span-4">
//           {/* <Gallery
//             title={product.title}
//             amount={product.priceRange.maxVariantPrice.amount}
//             currencyCode={product.priceRange.maxVariantPrice.currencyCode}
//             images={product.images.map((image: Image) => ({
//               src: image.url,
//               altText: image.altText
//             }))}
//           /> */}
//         </div>

//         <div className="p-6 lg:col-span-2">
//           {/* <VariantSelector options={product.options} variants={product.variants} /> */}

//           {product.descriptionHtml ? (
//             <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
//           ) : null}

//           {/* <AddToCart variants={product.variants} availableForSale={product.availableForSale} /> */}

//         </div>
//       </div>
//       <Suspense>
//         {/* <RelatedProducts id={product.id} /> */}
//         <Suspense>
//           <Footer />
//         </Suspense>
//       </Suspense>
//     </div>
//   );
// }









// /// NOT NECESSARY AT THE MOMENT
// // async function RelatedProducts({ id }: { id: string }) {
// //   const relatedProducts = await getProductRecommendations(id);

// //   if (!relatedProducts.length) return null;

// //   return (
// //     <div className="px-4 py-8">
// //       <div className="mb-4 text-3xl font-bold">Related Products</div>
// //       <Grid className="grid-cols-2 lg:grid-cols-5">
// //         <ProductGridItems products={relatedProducts} />
// //       </Grid>
// //     </div>
// //   );
// // }