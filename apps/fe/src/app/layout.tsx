import './global.css';

export const metadata = {
  title: 'deploy-management-poc',
  description: 'Deploy dashboard PoC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
