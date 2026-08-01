export type StampBorderStyle = "solid" | "dashed" | "dotted";

export type StampVariant = {
  id: string;
  label: string;
  background: string;
  sealFill: string;
  borderColor: string;
  borderStyle: StampBorderStyle;
};

export const stampVariants: StampVariant[] = [
  {
    id: "clay",
    label: "Clay",
    background: "#cfa58c",
    sealFill: "#ded8ad",
    borderColor: "#234b45",
    borderStyle: "solid",
  },
  {
    id: "sage",
    label: "Sage",
    background: "#92978a",
    sealFill: "#ded8ad",
    borderColor: "#234b45",
    borderStyle: "dashed",
  },
  {
    id: "golden",
    label: "Golden",
    background: "#ded8ad",
    sealFill: "#cfa58c",
    borderColor: "#5f5724",
    borderStyle: "dotted",
  },
];

export const defaultStampVariant = stampVariants[0];

export type StampContent = {
  dish: string;
  place: string;
  emoji: string;
};

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };

    return entities[character];
  });

const wrapStampText = (value: string, maxLength = 20) => {
  const words = value.split(/\s+/);
  const lines: string[] = [];

  for (const word of words) {
    const currentLine = lines.at(-1);

    if (!currentLine || currentLine.length + word.length + 1 > maxLength) {
      lines.push(word);
    } else {
      lines[lines.length - 1] = `${currentLine} ${word}`;
    }
  }

  if (lines.length > 2) {
    lines[1] = `${lines.slice(1).join(" ").slice(0, maxLength - 1)}…`;
  }

  return lines.slice(0, 2);
};

const borderStrokeAttributes = (borderStyle: StampBorderStyle) => {
  if (borderStyle === "dashed") return ` stroke-dasharray="16 10"`;
  if (borderStyle === "dotted")
    return ` stroke-dasharray="2 14" stroke-linecap="round"`;
  return "";
};

const buildStampSvg = (content: StampContent, variant: StampVariant) => {
  const dishLines = wrapStampText(content.dish)
    .map(
      (line, index) =>
        `<tspan x="400" dy="${index === 0 ? 0 : 78}">${escapeXml(line)}</tspan>`,
    )
    .join("");
  const placeText = escapeXml(content.place.slice(0, 42));
  const borderAttributes = borderStrokeAttributes(variant.borderStyle);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
      <rect width="800" height="1000" rx="72" fill="${variant.background}"/>
      <rect x="30" y="30" width="740" height="940" rx="54" fill="none" stroke="${variant.borderColor}" stroke-width="12"${borderAttributes}/>
      <circle cx="400" cy="235" r="125" fill="${variant.sealFill}" stroke="${variant.borderColor}" stroke-width="10"/>
      <text x="400" y="275" text-anchor="middle" font-size="112">${content.emoji}</text>
      <text x="400" y="90" text-anchor="middle" fill="#234b45" font-family="Nunito, Arial, sans-serif" font-size="25" font-weight="800" letter-spacing="5">THE COMFORT ATLAS</text>
      <text x="400" y="425" text-anchor="middle" fill="#5f5724" font-family="Nunito, Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="4">MY COMFORT DISH</text>
      <text x="400" y="520" text-anchor="middle" fill="#234b45" font-family="Nunito, Arial, sans-serif" font-size="68" font-weight="800">${dishLines}</text>
      <text x="400" y="710" text-anchor="middle" fill="#20332f" font-family="Nunito, Arial, sans-serif" font-size="34" font-weight="600">${placeText}</text>
      <g transform="rotate(-4 400 835)">
        <rect x="210" y="785" width="380" height="100" rx="12" fill="none" stroke="#a55b32" stroke-width="9"/>
        <text x="400" y="850" text-anchor="middle" fill="#a55b32" font-family="Nunito, Arial, sans-serif" font-size="30" font-weight="800" letter-spacing="3">TASTES LIKE HOME</text>
      </g>
    </svg>`;
};

export const downloadStamp = (content: StampContent, variant: StampVariant) => {
  const stampSvg = buildStampSvg(content, variant);
  const blob = new Blob([stampSvg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  const safeDishName = content.dish
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);

  downloadLink.href = url;
  downloadLink.download = `comfort-stamp-${safeDishName || "my-dish"}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(url);
};
