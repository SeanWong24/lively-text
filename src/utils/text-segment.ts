export interface TextSegment {
  start: number;
  end: number;
  text: string;
}

export function obtainTextSegments(text: string = '', matchRegExp: RegExp = /([\w-]+|\s+|[^\w-\s])/g) {
  const textSegments: TextSegment[] = [];
  for (const match of text.matchAll(matchRegExp)) {
    const index = match.index;
    const text = match?.[0];
    textSegments.push({
      start: index,
      end: index + text.length - 1,
      text,
    });
  }
  return textSegments;
}
