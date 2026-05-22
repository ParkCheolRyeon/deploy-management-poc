# deploy-management-poc

다양한 배포 방식(ECS/Lambda/EC2/RDS)을 가진 사내 프로젝트들의 배포 상태를 한 곳에서 트래킹·승인·롤백하기 위한 PoC.

배경: `~/Desktop/deploy-dashboard-poc.md`

## 구조

```
deploy-management-poc/
├── apps/
│   ├── fe/        # Next.js (App Router, Tailwind, Turbopack, Zustand, clsx)
│   └── be/        # Go (HTTP server)
├── packages/
│   └── db/        # Go module — sqlc 산출물 + migrations 자리 (테이블 미정의)
├── go.work        # be + db Go workspace
└── nx.json        # Nx monorepo
```

## 개발

루트에서 실행:

```bash
pnpm run dev:fe   # Next.js (Turbopack) → http://localhost:3000
pnpm run dev:be   # Go HTTP (Air live-reload) → http://localhost:8080
```

`dev:be`는 Air를 통해 `apps/be/**/*.go` 변경 감지 시 자동 리빌드.
Air 설치가 필요하면: `go install github.com/air-verse/air@latest`

## 인증

Microsoft Entra ID (Auth.js v5). `.env.local` 환경변수:

```
AUTH_SECRET=                          # openssl rand -base64 32
AUTH_MICROSOFT_ENTRA_ID_ID=
AUTH_MICROSOFT_ENTRA_ID_SECRET=
AUTH_MICROSOFT_ENTRA_ID_ISSUER=       # https://login.microsoftonline.com/<TENANT_ID>/v2.0
```

도메인 화이트리스트: `@i-screamarts.com`
