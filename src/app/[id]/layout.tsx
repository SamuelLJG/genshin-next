


export default function RootLayout({children, params,}: {
    children: React.ReactNode;
    params: { id: string };
  })
{
  return <>
    {children}
  </>
}