import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Layout = ({ children, title, description, className }: Props) => {
  console.log(title);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main
        className={`flex items-center flex-col min-h-screen h-fit w-full bg-white ${className}`}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
