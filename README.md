# Võ Đường Karate-do Tịnh Trì

Monorepo base cho website giới thiệu và quản lý CLB võ thuật. Project được tổ chức theo hướng feature-based, frontend và backend tách rời, có thể triển khai frontend trên Vercel và backend trên Render/VPS.

## Stack

- **Client:** React 18, Vite, TypeScript, React Router, TailwindCSS, shadcn/ui style primitives, Lucide, Framer Motion, Zustand, React Hook Form, Zod, Axios.
- **Server:** Node.js, Express, TypeScript, Mongoose, MongoDB Atlas, JWT, Cloudinary boundary.
- **Workspace:** npm workspaces với `client`, `server`, `packages/shared`.

## Chạy local

> Yêu cầu Node.js 20+ và npm 9+.

```bash
npm install
cp .env.example .env
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:4000
- Health check: http://localhost:4000/api/health

Frontend hiện dùng mock data để có thể xem toàn bộ public pages và dashboard ngay cả khi chưa cấu hình MongoDB. Axios client đã sẵn sàng gọi API thật khi `VITE_API_URL` được cấu hình.

## Các route chính

Public: `/`, `/gioi-thieu`, `/huan-luyen-vien`, `/co-so`, `/tin-tuc`, `/tin-tuc/:slug`, `/thu-vien-anh`, `/lich-hoc`, `/hoc-phi`, `/lien-he`.

Admin: `/admin`, `/admin/tai-khoan`, `/admin/huan-luyen-vien`, `/admin/co-so`, `/admin/bai-viet`, `/admin/danh-muc`, `/admin/album-anh`, `/admin/lich-hoc`, `/admin/hoc-phi`, `/admin/hoc-vien`.

## Cấu trúc

```text
client/src/
├── components/       # UI primitives, public layout, admin layout
├── features/         # feature-specific components/config
├── lib/              # axios, mock data, utilities
├── pages/            # route-level screens
├── store/            # Zustand stores
└── types/            # frontend contracts

server/src/
├── config/           # env, database, cloudinary
├── controllers/      # request handlers
├── middlewares/      # auth, roles, errors
├── models/           # Mongoose schemas
├── routes/           # API route modules
├── services/         # integrations/business boundary
└── types/            # API/auth contracts
```

## Triển khai

### Frontend / Vercel

1. Set Root Directory là `client` (hoặc deploy từ monorepo với workspace build).
2. Build command: `npm run build -w client`.
3. Output: `client/dist`.
4. Set `VITE_API_URL` trỏ tới backend.
5. SPA fallback đã được khai báo trong `client/vercel.json`.

### Backend / Render hoặc VPS

1. Build: `npm run build -w server`.
2. Start: `npm run start -w server`.
3. Cấu hình `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL` và Cloudinary credentials.

## Ghi chú bảo mật

- `JWT_SECRET` phải là secret riêng ở production.
- Bật MongoDB IP allowlist phù hợp môi trường deploy.
- Upload Cloudinary nên chuyển sang signed upload hoặc server-side signature trước khi production.
- Middleware role đã có sẵn; hãy gắn `requireAuth` và `requireRole(...)` vào route mutation khi triển khai nghiệp vụ thật.
