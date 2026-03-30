"use client";
import { useState, useEffect, useRef } from "react";

export interface Token {
  src: string;
  name: string;
  symbol: string;
}

interface TokenListProps {
  tokens: Token[];
  size?: number;
  gap?: number;
  maxStack?: number;
}

function TokenAvatar({
  token,
  size,
  style,
  onHover,
}: {
  token: Token;
  size: number;
  style: React.CSSProperties;
  onHover: (token: Token | null, e?: React.MouseEvent) => void;
}) {
  const [failed, setFailed] = useState(false);

  const shared = {
    style: {
      width: size,
      height: size,
      margin: "0px",
      border: "2.5px solid white",
      ...style,
    },
    onMouseEnter: (e: React.MouseEvent) => onHover(token, e),
    onMouseMove: (e: React.MouseEvent) => onHover(token, e),
    onMouseLeave: () => onHover(null),
  };

  if (failed) {
    return (
      <div
        {...shared}
        className="absolute rounded-full flex items-center justify-center font-semibold bg-gray-200 text-gray-600 shadow-sm select-none"
        style={{ ...shared.style, fontSize: size * 0.38 }}
      >
        {token.name[0].toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={token.src}
      alt={token.name[0]}
      className="absolute rounded-full object-cover shadow-sm m-0"
      {...(shared as React.ImgHTMLAttributes<HTMLImageElement>)}
      onError={() => setFailed(true)}
    />
  );
}

export function TokenList({
  tokens,
  size = 32,
  gap = 4,
  maxStack = 4,
}: TokenListProps) {
  const [expanded, setExpanded] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    token: Token;
    x: number;
    y: number;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const overflowCount = tokens.length - maxStack;
  const hasOverflow = overflowCount > 0;

  const collapsedLeft = (i: number) =>
    size * 5 * (1 - Math.exp(-i / tokens.length));
  const collapsedWidth =
    collapsedLeft(
      Math.min(tokens.length - 1, maxStack - 1 + (hasOverflow ? 1 : 0)),
    ) + size;
  const expandedWidth = (tokens.length - 1) * (size + gap) + size;

  const handleHover = (token: Token | null, e?: React.MouseEvent) =>
    setTooltip(token && e ? { token, x: e.clientX, y: e.clientY } : null);

  // Prevent hydration mismatch by rendering a placeholder until client-side mount
  if (!mounted) {
    return (
      <div
        className="relative inline-flex items-center max-w-full"
        style={{ height: size }}
      >
        <div style={{ width: collapsedWidth, height: size }} />
      </div>
    );
  }

  return (
    <div
      className="relative inline-flex items-center cursor-pointer max-w-full scrollbar-hide"
      style={{ height: size }}
      onMouseOver={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setTooltip(null);
      }}
    >
      <div
        className="transition-[width] duration-200 ease-out relative overflow-x-auto scrollbar-hide"
        style={{
          width: expanded ? expandedWidth : collapsedWidth,
          height: size,
          maxWidth: "100%",
        }}
        ref={container}
        onMouseLeave={() => {
          container.current?.scroll(0, 0);
        }}
      >
        {tokens.map((token, i) => {
          const isOverflow = hasOverflow && i >= maxStack;
          return (
            <TokenAvatar
              key={token.src + i}
              token={token}
              size={size}
              style={{
                left: expanded ? i * (size + gap) : collapsedLeft(i),
                zIndex: expanded ? i + 1 : tokens.length - i,
                transition: "left 200ms ease-out, opacity 150ms ease-out",
                opacity: !expanded && isOverflow ? 0 : 1,
                pointerEvents: !expanded && isOverflow ? "none" : "auto",
              }}
              onHover={handleHover}
            />
          );
        })}

        {hasOverflow && (
          <div
            className="absolute rounded-full flex items-center justify-center font-medium bg-gray-100 text-gray-500 transition-opacity duration-150"
            style={{
              left: collapsedLeft(maxStack),
              width: size,
              height: size,
              border: "2.5px solid white",
              fontSize: size * 0.34,
              opacity: expanded ? 0 : 1,
              pointerEvents: expanded ? "none" : "auto",
              zIndex: tokens.length + 1,
            }}
          >
            +{overflowCount}
          </div>
        )}
      </div>

      {tooltip && (
        <div
          className="fixed pointer-events-none z-[9999] bg-white border border-black/15 rounded-lg px-2.5 py-1.5 text-xs whitespace-nowrap shadow-md"
          style={{ left: tooltip.x + 12, top: tooltip.y - 44 }}
        >
          <div className="font-medium text-gray-900">{tooltip.token.name}</div>
          <div className="text-gray-500 text-[11px] mt-0.5">
            {tooltip.token.symbol}
          </div>
        </div>
      )}
    </div>
  );
}
