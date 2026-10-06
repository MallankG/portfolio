'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    radius: number;
    baseAlpha: number;
    alpha: number;
    twinkleSpeed: number;
    twinklePhase: number;
    driftX: number;
    driftY: number;
    color: string;
    layer: number; // 1 = far, 2 = mid, 3 = near
    isSparkle: boolean;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    alpha: number;
    active: boolean;
}

const STAR_COLORS = [
    '#ffffff',
    '#f8fafc',
    '#e2e8f0',
    '#7dd3fc', // bright ice cyan
    '#6ee7b7', // glowing emerald
    '#a5b4fc', // starlight indigo
];

const StarsBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const setCanvasDimensions = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        setCanvasDimensions();

        // Rich multi-layered cosmic starfield
        const starCount = Math.min(Math.floor((width * height) / 2600), 520);
        const stars: Star[] = Array.from({ length: starCount }, () => {
            const rand = Math.random();
            const layer = rand < 0.55 ? 1 : rand < 0.85 ? 2 : 3;
            const radius =
                layer === 1
                    ? Math.random() * 0.9 + 0.5
                    : layer === 2
                    ? Math.random() * 1.4 + 0.8
                    : Math.random() * 2.0 + 1.2;

            const baseAlpha =
                layer === 1
                    ? Math.random() * 0.5 + 0.35
                    : layer === 2
                    ? Math.random() * 0.5 + 0.45
                    : Math.random() * 0.4 + 0.6;

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius,
                baseAlpha,
                alpha: baseAlpha,
                twinkleSpeed: Math.random() * 0.03 + 0.008,
                twinklePhase: Math.random() * Math.PI * 2,
                driftX: (Math.random() - 0.5) * 0.08 * layer,
                driftY: -Math.random() * 0.12 * layer - 0.03,
                color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
                layer,
                isSparkle: layer === 3 && Math.random() < 0.35,
            };
        });

        // Shooting star state
        const shootingStar: ShootingStar = {
            x: 0,
            y: 0,
            length: 0,
            speed: 0,
            angle: Math.PI / 4,
            alpha: 0,
            active: false,
        };

        const spawnShootingStar = () => {
            shootingStar.x = Math.random() * width * 0.75;
            shootingStar.y = Math.random() * height * 0.45;
            shootingStar.length = Math.random() * 110 + 90;
            shootingStar.speed = Math.random() * 10 + 12;
            shootingStar.angle = (Math.random() * 20 + 25) * (Math.PI / 180);
            shootingStar.alpha = 1;
            shootingStar.active = true;
        };

        // Spawn an initial shooting star shortly after load
        const initialShootTimeout = setTimeout(() => {
            spawnShootingStar();
        }, 1200);

        // Mouse parallax tracking
        let targetMouseX = 0;
        let targetMouseY = 0;
        let currentMouseX = 0;
        let currentMouseY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX / width - 0.5) * 24;
            targetMouseY = (e.clientY / height - 0.5) * 24;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('resize', setCanvasDimensions);

        let lastShootTime = performance.now();

        const render = (now: number) => {
            ctx.clearRect(0, 0, width, height);

            // Smooth mouse interpolation
            currentMouseX += (targetMouseX - currentMouseX) * 0.05;
            currentMouseY += (targetMouseY - currentMouseY) * 0.05;

            // Draw stars
            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];

                // Update position & wrap around screen
                s.x += s.driftX;
                s.y += s.driftY;

                if (s.x < 0) s.x = width;
                if (s.x > width) s.x = 0;
                if (s.y < 0) s.y = height;
                if (s.y > height) s.y = 0;

                // Twinkle calculation
                s.twinklePhase += s.twinkleSpeed;
                const twinkle = Math.sin(s.twinklePhase) * 0.32;
                s.alpha = Math.max(0.15, Math.min(1, s.baseAlpha + twinkle));

                const parallaxX = currentMouseX * (s.layer * 0.4);
                const parallaxY = currentMouseY * (s.layer * 0.4);

                const drawX = (s.x + parallaxX + width) % width;
                const drawY = (s.y + parallaxY + height) % height;

                ctx.save();
                ctx.globalAlpha = s.alpha;
                ctx.fillStyle = s.color;

                if (s.layer >= 2) {
                    ctx.shadowBlur = s.layer === 3 ? 12 : 5;
                    ctx.shadowColor = s.color;
                }

                ctx.beginPath();
                ctx.arc(drawX, drawY, s.radius, 0, Math.PI * 2);
                ctx.fill();

                // 4-point cosmic flare on bright foreground stars
                if (s.isSparkle && s.alpha > 0.65) {
                    const flareLen = s.radius * 3.2;
                    ctx.strokeStyle = s.color;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(drawX - flareLen, drawY);
                    ctx.lineTo(drawX + flareLen, drawY);
                    ctx.moveTo(drawX, drawY - flareLen);
                    ctx.lineTo(drawX, drawY + flareLen);
                    ctx.stroke();
                }

                ctx.restore();
            }

            // Spawn shooting stars periodically (~3.5s)
            if (!shootingStar.active && now - lastShootTime > 3200) {
                if (Math.random() < 0.05) {
                    spawnShootingStar();
                    lastShootTime = now;
                }
            }

            // Render active shooting star
            if (shootingStar.active) {
                const vx = Math.cos(shootingStar.angle) * shootingStar.speed;
                const vy = Math.sin(shootingStar.angle) * shootingStar.speed;

                shootingStar.x += vx;
                shootingStar.y += vy;
                shootingStar.alpha -= 0.015;

                if (
                    shootingStar.alpha <= 0 ||
                    shootingStar.x > width + 120 ||
                    shootingStar.y > height + 120
                ) {
                    shootingStar.active = false;
                } else {
                    const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
                    const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

                    const grad = ctx.createLinearGradient(
                        shootingStar.x,
                        shootingStar.y,
                        tailX,
                        tailY
                    );
                    grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.alpha})`);
                    grad.addColorStop(0.25, `rgba(110, 231, 183, ${shootingStar.alpha * 0.8})`);
                    grad.addColorStop(1, 'rgba(6, 182, 212, 0)');

                    ctx.save();
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 2.0;
                    ctx.lineCap = 'round';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#34d399';
                    ctx.beginPath();
                    ctx.moveTo(shootingStar.x, shootingStar.y);
                    ctx.lineTo(tailX, tailY);
                    ctx.stroke();
                    ctx.restore();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            clearTimeout(initialShootTimeout);
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', setCanvasDimensions);
        };
    }, []);

    return (
        <div className="portfolio-bg" aria-hidden="true">
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default StarsBackground;
