# ローカル環境の起動
```
pnpm dev
```

# Prisma
初回、マイグレーション時
```
npx prisma migrate dev --name init
```
シーディング（v6まではマイグレーション時に自動で走っていたがv7からは手動必須になった）
```
npx prisma db seed
```

```
npx prisma generate
```

```
open http://localhost:3000
```

