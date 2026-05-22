import { auth, signOut } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold">deploy-management-poc</h1>
      <div className="text-gray-700">
        Welcome, <span className="font-medium">{session?.user?.name ?? '익명'}</span>
      </div>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/sign-in' });
        }}
      >
        <button
          type="submit"
          className="rounded bg-gray-700 px-4 py-2 text-white text-sm hover:bg-gray-800 transition"
        >
          로그아웃
        </button>
      </form>
    </main>
  );
}
