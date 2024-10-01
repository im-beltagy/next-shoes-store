import { axiosInstance, endpoints } from "@/lib/axios";
import SingleProductView from "@/view/sections/store/view/single-produt-view";

export default async function Page({
  params: { product_id },
}: {
  params: { product_id: string };
}) {
  try {
    const res = await axiosInstance.get(endpoints.products.getOne(product_id));
    return <SingleProductView product={res.data.product} />;
  } catch (error: any) {
    return <div>{error.response.data.message}</div>;
  }
}
