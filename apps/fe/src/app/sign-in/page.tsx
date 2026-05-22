import { signIn } from '@/auth';

export default function SignInPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-xl font-semibold text-gray-800">deploy-management-poc</h1>
      <form
        action={async () => {
          'use server';
          await signIn('microsoft-entra-id', { redirectTo: '/' });
        }}
      >
        <button
          type="submit"
          className="rounded bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          Microsoft 계정으로 로그인
        </button>
      </form>
      <p className="text-sm text-gray-500">@iscreamarts.onmicrosoft.com 계정만 허용됩니다.</p>
    </main>
  );
}
