# React Vite TypeScript Tailwind Project

Dự án React được xây dựng với Vite, TypeScript và Tailwind CSS - mang lại trải nghiệm phát triển tuyệt vời với build time siêu nhanh.

## 🚀 Công nghệ sử dụng

- **Vite** - Build tool thế hệ mới, nhanh hơn Webpack
- **React 19** - Library UI hàng đầu với các tính năng mới nhất
- **TypeScript** - Type safety và developer experience tốt hơn
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint + Prettier** - Code quality và formatting

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Button.tsx
│   ├── Modal.tsx
│   └── index.ts
├── pages/              # Các trang chính
│   └── Home.tsx
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── utils/              # Utility functions
│   ├── api.ts
│   └── helpers.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── services/           # API services và business logic
├── assets/             # Static assets
│   ├── images/
│   └── icons/
├── App.tsx
└── main.tsx
```

## 🛠 Cài đặt và chạy dự án

### Yêu cầu hệ thống

- Node.js >= 18.0.0
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Dự án sẽ chạy tại `http://localhost:5173` (Vite default port)

### Build cho production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting và formatting

```bash
npm run lint        # Kiểm tra lỗi code
npm run lint:fix    # Tự động sửa lỗi có thể
npm run format      # Format code với Prettier
```

## ⚡ Ưu điểm của Vite

### 🔥 Tốc độ vượt trội

- **Dev server khởi động tức thì** - Không cần bundle toàn bộ app
- **Hot Module Replacement (HMR) siêu nhanh** - Thay đổi code được phản ánh ngay lập tức
- **Build production nhanh hơn** - Sử dụng Rollup với tối ưu hóa tốt

### 🎯 Tối ưu hóa tự động

- **Tree-shaking** - Loại bỏ code không sử dụng
- **Code splitting** - Tự động chia nhỏ bundle
- **Asset optimization** - Tối ưu hóa hình ảnh và assets

### 🔧 Developer Experience

- **TypeScript support tuyệt vời** - Không cần cấu hình phức tạp
- **CSS preprocessing** - PostCSS, Sass built-in
- **Environment variables** - Hỗ trợ .env files

## 🎨 Styling với Tailwind CSS

Dự án sử dụng Tailwind CSS cho styling. Các class utilities có thể được sử dụng trực tiếp trong JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
  Hello Tailwind with Vite!
</div>
```

## 📦 Components có sẵn

### Button

Component button với các variants và sizes khác nhau:

```tsx
import { Button } from './components';

<Button variant="primary" size="lg" loading={false}>
  Click me
</Button>;
```

### Modal

Component modal responsive:

```tsx
import { Modal } from './components';

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
  Modal content here
</Modal>;
```

## 🔧 Cấu hình

- **Vite**: `vite.config.ts`
- **Tailwind**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`
- **TypeScript**: `tsconfig.json`
- **ESLint**: `.eslintrc.cjs`
- **Prettier**: `.prettierrc`

## 🌍 Environment Variables

Tạo file `.env` từ `.env.example`:

```bash
cp env.example .env
```

Vite sử dụng prefix `VITE_` cho environment variables:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=My Vite App
```

Sử dụng trong code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 📈 So sánh với Create React App

| Tính năng          | Vite              | Create React App     |
| ------------------ | ----------------- | -------------------- |
| Dev server startup | < 1s              | 10-30s               |
| Hot reload         | Tức thì           | 1-3s                 |
| Build time         | Nhanh hơn 10-100x | Chậm                 |
| Bundle size        | Nhỏ hơn           | Lớn hơn              |
| Cấu hình           | Đơn giản          | Phức tạp (sau eject) |

## 📝 Best Practices

1. **Component Structure**: Mỗi component nên có type definitions riêng
2. **File Naming**: Sử dụng PascalCase cho components, camelCase cho utilities
3. **Type Safety**: Luôn define types cho props và state
4. **Code Organization**: Tách biệt logic, UI và types
5. **Performance**: Sử dụng React.memo và useMemo khi cần thiết
6. **Environment**: Sử dụng VITE\_ prefix cho environment variables

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem `LICENSE` để biết thêm thông tin.
