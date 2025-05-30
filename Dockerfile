# ---- Base Stage (สำหรับติดตั้ง Dependencies และ Build) ----
FROM oven/bun:1 as base
WORKDIR /app

# Copy package.json, bun.lockb, etc.
COPY package.json bun.lock ./
# COPY tsconfig.json next-env.d.ts next.config.js postcss.config.js tailwind.config.js ./
# Copy ไฟล์ config อื่นๆ ที่จำเป็นสำหรับการ build

# Install dependencies
RUN bun install --frozen-lockfile

# Copy aส่วนที่เหลือของ source code
COPY . .

# Build Next.js application
# ตั้งค่า NEXT_TELEMETRY_DISABLED เพื่อปิดการส่งข้อมูล telemetry ตอน build
ENV NEXT_TELEMETRY_DISABLED 1
RUN bun run build # ตรวจสอบ script build ใน package.json ของคุณ

# ---- Runner Stage (สำหรับ Production Image ที่มีขนาดเล็ก) ----
FROM oven/bun:1-slim as runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy standalone output และ public assets จาก build stage
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

# (Optional) Copy .env.production ถ้าคุณใช้
# COPY --from=base /app/.env.production ./

EXPOSE 3000 
# Port ที่ Next.js app จะรัน (default)
ENV PORT 3000 # หรือ PORT ที่คุณกำหนด

# Command สำหรับรัน Next.js app ใน standalone mode
# server.js จะอยู่ใน .next/standalone/
CMD ["bun", "server.js"]
# หรือถ้าคุณต้องการใช้ Node.js runtime สำหรับ Next.js (ซึ่งบางครั้งเสถียรกว่าสำหรับ Next.js โดยตรง)
# คุณอาจจะต้องเปลี่ยน Base image ของ runner stage เป็น Node.js image
# FROM node:18-alpine as runner
# WORKDIR /app
# ENV NODE_ENV=production
# COPY --from=base /app/.next/standalone ./
# COPY --from=base /app/public ./public
# COPY --from=base /app/.next/static ./.next/static
# EXPOSE 3000
# ENV PORT 3000
# CMD ["node", "server.js"]