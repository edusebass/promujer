/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";

const OtrosRedirect = async ({ params }: any) => {
  const { service } = await params;
  redirect(`/informacion/${service}`);
};

export default OtrosRedirect;
