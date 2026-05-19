/**
 * Render simple inline markdown (**bold** and *italic*) as React nodes.
 * Used by event content paragraphs and rules — keeps the data source plain text.
 */
import { Fragment, type ReactNode } from "react";

type Token = { type: "text" | "bold" | "italic"; value: string };

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  // Order matters: ** before * to avoid mismatching bold as italic
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: input.slice(lastIndex, match.index) });
    }
    if (match[2] !== undefined) {
      tokens.push({ type: "bold", value: match[2] });
    } else if (match[3] !== undefined) {
      tokens.push({ type: "italic", value: match[3] });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < input.length) {
    tokens.push({ type: "text", value: input.slice(lastIndex) });
  }
  return tokens;
}

export function renderInline(input: string): ReactNode {
  return tokenize(input).map((token, i) => {
    if (token.type === "bold") {
      return (
        <strong key={i} className="font-medium text-white">
          {token.value}
        </strong>
      );
    }
    if (token.type === "italic") {
      return (
        <em
          key={i}
          className="font-display not-italic text-gold italic"
          style={{ fontStyle: "italic" }}
        >
          {token.value}
        </em>
      );
    }
    return <Fragment key={i}>{token.value}</Fragment>;
  });
}

export function formatCurrency(amount: number, currency = "R$"): {
  currency: string;
  value: string;
} {
  return { currency, value: amount.toLocaleString("pt-BR") };
}
